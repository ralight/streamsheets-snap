/********************************************************************************
 * Copyright (c) 2020 Cedalo AG
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 ********************************************************************************/
const { CODES } = require('@cedalo/error-codes');
const logger = require('../utils/logger').create();

const { JSONReader, MachineGraph } = require('@cedalo/jsg-core');
const { createDefaultGraph } = require('./utils');

function JSONToGraph(json) {
	const graph = new MachineGraph();
	const reader = new JSONReader(json);
	const root = reader.getRoot();
	let shapes;
	graph.read(reader, root.graphdef);

	if (root.graphdef.version === '2') {
		const container = graph.getStreamSheetsContainer();
		if (container) {
			shapes = [];
			container.enumerateStreamSheetContainers((sheet) => {
				const shapesJSON = sheet.getStreamSheet().getCells().subItemsToJSON();
				const streamsheetId = sheet.getStreamSheetContainerAttributes().getSheetId().getValue();
				if (shapesJSON) {
					shapes.push({ streamsheetId, json: shapesJSON });
				}
			});
		}
	}

	return { graph, shapes };
}

function createGraph() {
	return new Promise((resolve, reject) => {
		const graph = createDefaultGraph();
		if (graph) {
			resolve(graph);
		} else {
			reject(new Error('Could not create graph.'));
		}
	});
}

async function loadGraphByMachineId(machineId, graphManager, graphRepository) {
	let id;
	let graph;
	let migrations;
	try {
		const graphJSON = await graphRepository.findGraphByMachineId(machineId);
		const { graph: loadedGraph, shapes } = JSONToGraph(JSON.stringify(graphJSON));
		if (shapes && shapes.length) migrations = { shapes };
		graph = loadedGraph;
		id = graphJSON.id;
	} catch (error) {
		if (error.code === CODES.GRAPH_NOT_FOUND) {
			graph = await createGraph();
		} else {
			logger.error(error);
			throw error;
		}
	}
	if (graph) {
		graphManager.addGraph({
			graph,
			machineId,
			migrations,
			id
		});
	}
}

module.exports = {
	loadGraphByMachineId
};

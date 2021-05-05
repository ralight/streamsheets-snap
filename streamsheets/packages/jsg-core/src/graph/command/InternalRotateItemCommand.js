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
const JSG = require('../../JSG');
const { readObject, writeJSON } = require('./utils');
const AbstractItemCommand = require('./AbstractItemCommand');
const Point = require('../../geometry/Point');
const NumberExpression = require('../expr/NumberExpression');
const Expression = require('../expr/Expression');

/**
 * Internal command to rotate an item.
 *
 * @example
 *
 *     // interactionhandler and item given
 *     var cmd = new InternalRotateItemCommand(item);
 *     interactionHandler.execute(cmd);
 *     //undo command
 *     interactionHandler.undo();
 *     //redo it again
 *     interactionHandler.redo();
 *
 * @class InternalRotateItemCommand
 * @extends AbstractGroupUngroupCommand
 * @constructor
 * @param {GraphItem} item GraphItem to rotate.
 * @param {Number} angle The rotation angle in radiant.
 * @param {Point} [point] An optional rotation point.
 * @private
 */
class InternalRotateItemCommand extends AbstractItemCommand {
	static createFromObject(data = {}, { graph }) {
		const item = graph.getItemById(data.itemId);
		const newpt = data.point
			? new Point(data.point.x, data.point.y)
			: undefined;
		return item
			? new InternalRotateItemCommand(
					item,
					data.angle,
					newpt
			  ).initWithObject(data)
			: undefined;
	}

	constructor(item, angle, point) {
		super(item);

		this._angle = (angle instanceof Expression) ? angle.copy() : new NumberExpression(angle);
		this._rotate = !(angle instanceof Expression);
		this._angle.evaluate(this._graphItem);
		this._oldAngle = item.getAngle().copy();
		this._point = point ? point.copy() : undefined;
	}

	initWithObject(data) {
		const cmd = super.initWithObject(data);
		cmd._angle = readObject(
			'angle',
			data.angle,
			new NumberExpression()
		);
		cmd._oldAngle = readObject(
			'oldangle',
			data.oldAngle,
			new NumberExpression()
		);
		this._rotate = data.rotate;
		return cmd;
	}

	/**
	 * Undo the delete operation by adding it to the parent.
	 *
	 * @method undo
	 */
	undo() {
		// undo rotation (around point)
		if (this._rotate) {
			this._graphItem.rotate(-this._angle.getValue(), this._point);
		}
		// ... and set old angle expression again:
		this._graphItem.setAngle(this._oldAngle);
		this._graphItem.getAngle().evaluate(this._graphItem);
	}

	/**
	 * Redo a previously undone operation by adding it again.
	 *
	 * @method redo
	 */
	redo() {
		if (this._rotate) {
			this._graphItem.rotate(this._angle.getValue(), this._point);
		} else {
			this._graphItem.setAngle(this._angle);
		}
	}

	toObject() {
		const data = super.toObject();

		data.point = this._point;
		data.angle = writeJSON('angle', this._angle);
		data.oldAngle = writeJSON('oldangle', this._oldAngle);
		data.rotate = this._rotate;

		return data;
	}
}

module.exports = InternalRotateItemCommand;

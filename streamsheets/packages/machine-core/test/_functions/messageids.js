/********************************************************************************
 * Copyright (c) 2021 Cedalo AG
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 ********************************************************************************/
const messageids = (sheet /* , ...terms */) => {
	const context = messageids.context;
	if (sheet.isProcessing) {
		if (!context.initialized) {
			context.initialized = true;
			context.result = [];
		}
		const message = sheet.streamsheet.inbox.peek();
		if (message) {
			context.result.push(message.id);
		}
	}
	return context.result ? context.result.join(',') : '';
};
module.exports = messageids;

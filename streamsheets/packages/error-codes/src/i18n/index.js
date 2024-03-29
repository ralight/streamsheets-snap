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
const de = require('./de');
const en = require('./en');

module.exports = {
	de,
	en,
	createLocalization(locale = 'en') {
		const localize = this[locale] || {};
		return (str) => str != null ? localize[str] || str : undefined;
	}
};

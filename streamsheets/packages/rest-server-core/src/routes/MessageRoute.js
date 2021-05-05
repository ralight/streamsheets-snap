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
const httpError = require('http-errors');
const auth = require('basic-auth');

const buildMessage = (payload) => {
	let message = {};
	if (typeof payload === 'string' && payload.startsWith('json=')) {
		// backward compatibility: special JSON payload beginning with "json="
		message = payload.substring(5);
		message = JSON.parse(decodeURIComponent(payload));
	} else if (payload.json) {
		// TODO: backward compatibility: deprecate?
		message = JSON.parse(decodeURIComponent(payload.json));
	} else if (typeof payload === 'object') {
		// real JSON payload
		message = payload;
	} else if (typeof payload === 'string') {
		// string payload
		message = payload;
	}
	return { data: message };
};

module.exports = class MessageRoute {
	static handleMessage(request, response, next) {
		let message = {};
		switch (request.method) {
			case 'GET':
				message = request.query;
				if (request.query.json) {
					request.query.json = JSON.parse(decodeURIComponent(request.query.json));
				}
				MessageRoute._handleMessage(request, response, message);
				break;
			case 'POST':
				message = buildMessage(request.body);
				MessageRoute._handleMessage(request, response, message);
				break;
			case 'PUT':
				message = buildMessage(request.body);
				MessageRoute._handleMessage(request, response, message);
				break;
			case 'PATCH':
				message = buildMessage(request.body);
				MessageRoute._handleMessage(request, response, message);
				break;
			case 'DELETE':
				MessageRoute._handleMessage(request, response, {});
				break;
			case 'HEAD':
				MessageRoute._handleMessage(request, response, {});
				break;
			case 'OPTIONS':
				MessageRoute._handleMessage(request, response, {});
				break;
			case 'TRACE':
				MessageRoute._handleMessage(request, response, {});
				break;
			default:
				response.set('allow', 'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS, TRACE');
				next(new httpError.MethodNotAllowed());
				break;
		}
	}

	static _handleMessage(request, response, message) {
		const { requestHandler } = request.app.locals;
		if (requestHandler) {
			const user = auth(request);
			const topic = MessageRoute.getTopicFromPath(request.path);
			// eslint-disable-next-line
			const expectResponse = request.get('Expect-Response') == 'true';
			const responseTimeout = request.get('Response-Timeout') ? parseInt(request.get('Response-Timeout'), 10) : 5;
			requestHandler
				.handleRequest({
					topic,
					message,
					method: request.method,
					expectResponse,
					responseTimeout,
					user,
					transportDetails: {
						clientIP: request.ip,
						headers: request.headers
					}
				})
				.then((result) => {
					const body = result.body || result;
					const headers = result.body ? result.headers || {} : {};
					const contentType = headers['Content-Type'];
					const statusCode = result.body ? result.statusCode || 200 : 200;
					delete body.metadata;
					if (
						(contentType && contentType === 'text/plain') ||
						(contentType && contentType.startsWith('text/html'))
					) {
						response.set(headers).status(statusCode).send(body);
					} else {
						response.set(headers).status(statusCode).json(body);
					}
				})
				.catch((error) => {
					switch (error.type) {
						case 'authorization':
							response.status(401).send('Authorization Required');
							break;
						default:
							response.status(400).send(error.message);
					}
				});
		} else {
			response.status(200).json({});
		}
	}

	static getTopicFromPath(path) {
		// old API,e.g., /api/v1.0/cedalo/tests
		let parts = /\/v1.0\/(.*)/i.exec(path);
		if (parts) {
			return parts.length >= 2 ? parts[1] : '';
		}
		// new API,e.g., /request/cedalo/tests
		parts = /\/(.*)/i.exec(path);
		return parts.length >= 2 ? parts[1] : '';
	}
};

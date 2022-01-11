/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/********************************************************************************
 * Copyright (c) 2020 Cedalo AG
 *
 * This program and the accompanying materials are made available under the 
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 ********************************************************************************/const GatewayMessagingProtocol=__webpack_require__(18);const GraphServerMessagingProtocol=__webpack_require__(19);const MachineServerMessagingProtocol=__webpack_require__(2);const StreamsMessagingProtocol=__webpack_require__(20);const Topics=__webpack_require__(21);module.exports={GatewayMessagingProtocol,GraphServerMessagingProtocol,MachineServerMessagingProtocol,StreamsMessagingProtocol,Topics};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/********************************************************************************
 * Copyright (c) 2020 Cedalo AG
 *
 * This program and the accompanying materials are made available under the 
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 ********************************************************************************/module.exports=class Request{constructor({name='Request'}={}){this._name=name;}send(){return Promise.reject(new Error('Method send() must be implemented by subclass.'));}};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/********************************************************************************
 * Copyright (c) 2020 Cedalo AG
 *
 * This program and the accompanying materials are made available under the 
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 ********************************************************************************//**
 * ******************************************************************************************
 * Machine request types
 * ******************************************************************************************
 */const ADD_INBOX_MESSAGE='add_inbox_message';const CREATE_STREAMSHEET_MESSAGE_TYPE='streamsheet_create';const GET_MACHINE_MESSAGE_TYPE='machine_get';const GET_MACHINES_MESSAGE_TYPE='machineserver_machines';const GET_CELL_RAW_VALUE='machine_get_cell_raw_value';const DELETE_MACHINE_MESSAGE_TYPE='machine_delete';const DELETE_STREAMSHEET_MESSAGE_TYPE='streamsheet_delete';const LOAD_MACHINE_MESSAGE_TYPE='machine_load';const UNLOAD_MACHINE_MESSAGE_TYPE='machine_unload';const LOAD_SHEET_CELLS='load_sheet_cells';const MACHINE_UPDATE_SETTINGS='machine_update_settings';const MACHINE_UPDATE_EXTENSION_SETTINGS='machine_update_extension_settings';const META_INFORMATION_MESSAGE_TYPE='meta_information';const OPEN_MACHINE_MESSAGE_TYPE='machine_open';const PAUSE_MACHINE_MESSAGE_TYPE='machine_pause';const RENAME_MACHINE_MESSAGE_TYPE='machine_rename';const SAVE_MACHINE_AS_MESSAGE_TYPE='machine_save_as';const SAVE_MACHINE_COPY_MESSAGE_TYPE='machine_save_copy';const SET_MACHINE_CYCLE_TIME_MESSAGE_TYPE='machine_set_cycle_time';const SET_MACHINE_LOCALE_MESSAGE_TYPE='machine_set_locale';const SET_MACHINE_UPDATE_INTERVAL_MESSAGE_TYPE='machine_set_update_interval';const SET_NAMED_CELLS='set_named_cells';const SET_GRAPH_CELLS='set_graph_cells';const SET_SHEET_CELLS='set_sheet_cells';const START_MACHINE_MESSAGE_TYPE='machine_start';const START_MACHINES_MESSAGE_TYPE='machines_start';const STEP_MACHINE_MESSAGE_TYPE='machine_step';const STOP_MACHINE_MESSAGE_TYPE='machine_stop';const STOP_MACHINES_MESSAGE_TYPE='machines_stop';const STREAMSHEETS_ORDER_MESSAGE_TYPE='streamsheets_order';const SUBSCRIBE_MACHINE_MESSAGE_TYPE='machine_subscribe';const UNSUBSCRIBE_MACHINE_MESSAGE_TYPE='machine_unsubscribe';const UPDATE_MACHINE_IMAGE_MESSAGE_TYPE='update_machine_image';const UPDATE_MACHINE_TITLE_IMAGE_MESSAGE_TYPE='update_machine_title_image';const LOAD_SUBSCRIBE_MACHINE_MESSAGE_TYPE='machine_load_subscribe';/**
 * ******************************************************************************************
 * General request types
 * ******************************************************************************************
 */const COMMAND_MESSAGE_TYPE='command';const MACHINE_ACTION_MESSAGE_TYPE='machine_action';/**
 * ******************************************************************************************
 * Events
 * ******************************************************************************************
 */const MACHINE_ADD_EVENT='machine_add';const MACHINE_CYCLETIME_EVENT='machine_cycletime';const MACHINE_CYCLEREGULATED_EVENT='machine_cycleregulated';const MACHINE_DESCRIPTOR_UPDATE_EVENT='machine_descriptor_update';const MACHINE_LAST_MODIFIED_EVENT='machine_lastmodified';const MACHINE_LOCALE_EVENT='machine_locale';const MACHINE_OPCUA_EVENT='machine_opcua';const MACHINE_RENAME_EVENT='machine_rename';const MACHINE_VIEW_SETTINGS_EVENT='machine_view_settings';const MACHINE_EXTENSION_SETTINGS_EVENT='machine_extension_settings';const MACHINE_FUNCTIONS_EVENT='machine_functions';const MACHINE_REMOVE_EVENT='machine_remove';const MACHINE_STATE_EVENT='machine_state';const MACHINE_STEP_EVENT='machine_step';const MESSAGE_ADD_EVENT='message_add';const STREAMSHEET_STEP='streamsheet_step';const STREAMSHEET_MESSAGE_ATTACHED='streamsheet_message_attached';const STREAMSHEET_MESSAGE_DETACHED='streamsheet_message_detached';const STREAMSHEET_STREAM_UPDATE_EVENT='streamsheet_stream_update';const STREAMSHEET_STREAM_UPDATED='streamsheet_stream_updated';const STREAMSHEET_STREAM_UPDATE_TYPE='streamsheet_stream_update';const MESSAGE_BOX_CLEAR='message_box_clear';const MESSAGE_PUT='message_put';const MESSAGE_POP='message_pop';const MESSAGE_CHANGED='message_changed';const STREAMS_RELOAD_EVENT='stream_reload';const SHEET_UPDATE_EVENT='sheet_update';const SHEET_CELLRANGE_CHANGE_EVENT='sheet_cellrange_change';const SHEET_CELLS_UPDATE_EVENT='sheet_cells_update';const NAMED_CELLS_EVENT='named_cells';// DEPRECATED:
const SHEET_STEP_EVENT='sheet_step';module.exports={MESSAGE_TYPES:{// Machine request types
ADD_INBOX_MESSAGE,CREATE_STREAMSHEET_MESSAGE_TYPE,DELETE_MACHINE_MESSAGE_TYPE,DELETE_STREAMSHEET_MESSAGE_TYPE,GET_MACHINE_MESSAGE_TYPE,GET_MACHINES_MESSAGE_TYPE,GET_CELL_RAW_VALUE,LOAD_MACHINE_MESSAGE_TYPE,UNLOAD_MACHINE_MESSAGE_TYPE,LOAD_SUBSCRIBE_MACHINE_MESSAGE_TYPE,LOAD_SHEET_CELLS,MACHINE_UPDATE_SETTINGS,MACHINE_UPDATE_EXTENSION_SETTINGS,META_INFORMATION_MESSAGE_TYPE,OPEN_MACHINE_MESSAGE_TYPE,PAUSE_MACHINE_MESSAGE_TYPE,RENAME_MACHINE_MESSAGE_TYPE,SAVE_MACHINE_AS_MESSAGE_TYPE,SAVE_MACHINE_COPY_MESSAGE_TYPE,SET_MACHINE_CYCLE_TIME_MESSAGE_TYPE,SET_MACHINE_LOCALE_MESSAGE_TYPE,SET_MACHINE_UPDATE_INTERVAL_MESSAGE_TYPE,SET_NAMED_CELLS,SET_GRAPH_CELLS,SET_SHEET_CELLS,START_MACHINE_MESSAGE_TYPE,START_MACHINES_MESSAGE_TYPE,STEP_MACHINE_MESSAGE_TYPE,STOP_MACHINE_MESSAGE_TYPE,STOP_MACHINES_MESSAGE_TYPE,STREAMSHEETS_ORDER_MESSAGE_TYPE,SUBSCRIBE_MACHINE_MESSAGE_TYPE,UNSUBSCRIBE_MACHINE_MESSAGE_TYPE,// General request types
COMMAND_MESSAGE_TYPE,MACHINE_ACTION_MESSAGE_TYPE,STREAMSHEET_STREAM_UPDATE_TYPE,UPDATE_MACHINE_IMAGE_MESSAGE_TYPE,UPDATE_MACHINE_TITLE_IMAGE_MESSAGE_TYPE},EVENTS:{MACHINE_ADD_EVENT,MACHINE_CYCLETIME_EVENT,MACHINE_CYCLEREGULATED_EVENT,MACHINE_DESCRIPTOR_UPDATE_EVENT,MACHINE_LAST_MODIFIED_EVENT,MACHINE_LOCALE_EVENT,MACHINE_OPCUA_EVENT,MACHINE_EXTENSION_SETTINGS_EVENT,MACHINE_RENAME_EVENT,MACHINE_VIEW_SETTINGS_EVENT,MACHINE_FUNCTIONS_EVENT,MACHINE_REMOVE_EVENT,MACHINE_STATE_EVENT,MACHINE_STEP_EVENT,MESSAGE_ADD_EVENT,NAMED_CELLS_EVENT,SHEET_STEP_EVENT,SHEET_UPDATE_EVENT,SHEET_CELLRANGE_CHANGE_EVENT,SHEET_CELLS_UPDATE_EVENT,MESSAGE_BOX_CLEAR,MESSAGE_PUT,MESSAGE_POP,MESSAGE_CHANGED,STREAMSHEET_STEP,STREAMSHEET_MESSAGE_ATTACHED,STREAMSHEET_MESSAGE_DETACHED,STREAMSHEET_STREAM_UPDATE_EVENT,STREAMSHEET_STREAM_UPDATED,STREAMS_RELOAD_EVENT}};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/********************************************************************************
 * Copyright (c) 2020 Cedalo AG
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 ********************************************************************************/const HTTPGatewayAPI=__webpack_require__(9);const WebSocketGatewayAPI=__webpack_require__(13);const _require=__webpack_require__(0),GatewayMessagingProtocol=_require.GatewayMessagingProtocol;const ErrorCodes=__webpack_require__(22);const createError=(code,message)=>({code,message});module.exports=class BaseGatewayClient{constructor({name,logger,defaultListener}={}){this.name=name||'Default base gateway client';this._logger=logger||{log(){},info(){},warn(){},error(){}};this._eventHandler=event=>this.logger.debug(event);this._closeHandler=()=>this.logger.info('Close Gateway Client');this._eventListeners=new Map();this._initDefaultEventListeners(defaultListener);this._timerID=0;this._isConnected=false;}// eslint-disable-next-line consistent-return
async connect({socketEndpointURL,restEndpointURL,token}={}){if(this._isConnected||this._isConnecting){return Promise.resolve({});}this._isConnecting=true;// TODO: handle default values
this._socketEndpointURL=socketEndpointURL||this._socketEndpointURL;this._restEndpointURL=restEndpointURL||this._restEndpointURL;this._token=token||this._token;try{await this._connectRESTServer(restEndpointURL);this.http=new HTTPGatewayAPI(restEndpointURL,this._token,this.logger);if(this._token){const ws=await this._connectSocketServer(`${this._socketEndpointURL}?authToken=${this._token}`);this._ws=ws;this.socket=new WebSocketGatewayAPI(this._ws,this.logger);this._keepAlive();}this._isConnected=true;this._isConnecting=false;}catch(error){this._isConnected=false;this._isConnecting=false;this.logger.error(`${this._socketEndpointURL}?authToken=${this._token}`);this.logger.error(error);}}reconnect(){const socketEndpointURL=this._socketEndpointURL;const restEndpointURL=this._restEndpointURL;const token=this._token;this.connect({socketEndpointURL,restEndpointURL,token});}disconnect(){this._cancelKeepAlive();if(this._ws){this._ws.close();}this._isConnected=false;return Promise.resolve();}async resetConnection(){await this.disconnect();return this.reconnect();}_keepAlive(){const interval=8000;if(this._ws&&this._ws.readyState===this._ws.OPEN){this.logger.debug('Sending empty request.');this._ws.send(JSON.stringify({type:'ping',interval}));}this._timerId=setTimeout(this._keepAlive.bind(this),interval);}_cancelKeepAlive(){if(this._timerId){clearTimeout(this._timerId);}}get logger(){return this._logger;}on(event,listener){let listeners=this._eventListeners.get(event);if(!listeners){listeners=[];this._eventListeners.set(event,listeners);}listeners.push(listener);}off(event,listener){const listeners=this._eventListeners.get(event);if(listeners){const index=listeners.indexOf(listener);if(index>-1){listeners.splice(index,1);}}}set eventHandler(eventHandler){this._eventHandler=eventHandler;}get eventHandler(){return this._eventHandler;}set closeHandler(closeHandler){this._closeHandler=closeHandler;}get closeHandler(){return this._closeHandler;}waitUntilAllServersAreConnected(timeout=5000){return new Promise((resolve,reject)=>{let machineServerConnected=false;let graphServerConnected=false;const checkIfAllServersAreConnected=listener=>{if(machineServerConnected&&graphServerConnected){resolve();this.off(GatewayMessagingProtocol.EVENTS.MACHINE_SERVER_CONNECTED_EVENT,listener);this.off(GatewayMessagingProtocol.EVENTS.MACHINE_SERVER_DISCONNECTED_EVENT,listener);this.off(GatewayMessagingProtocol.EVENTS.GRAPH_SERVER_CONNECTED_EVENT,listener);this.off(GatewayMessagingProtocol.EVENTS.GRAPH_SERVER_DISCONNECTED_EVENT,listener);}};const listener=event=>{switch(event.type){case GatewayMessagingProtocol.EVENTS.MACHINE_SERVER_CONNECTED_EVENT:machineServerConnected=true;checkIfAllServersAreConnected(listener);break;case GatewayMessagingProtocol.EVENTS.MACHINE_SERVER_DISCONNECTED_EVENT:machineServerConnected=false;checkIfAllServersAreConnected(listener);break;case GatewayMessagingProtocol.EVENTS.GRAPH_SERVER_CONNECTED_EVENT:graphServerConnected=true;checkIfAllServersAreConnected(listener);break;case GatewayMessagingProtocol.EVENTS.GRAPH_SERVER_DISCONNECTED_EVENT:graphServerConnected=false;checkIfAllServersAreConnected(listener);break;default:break;}};setTimeout(()=>{this.off(GatewayMessagingProtocol.EVENTS.MACHINE_SERVER_CONNECTED_EVENT,listener);this.off(GatewayMessagingProtocol.EVENTS.MACHINE_SERVER_DISCONNECTED_EVENT,listener);this.off(GatewayMessagingProtocol.EVENTS.GRAPH_SERVER_CONNECTED_EVENT,listener);this.off(GatewayMessagingProtocol.EVENTS.GRAPH_SERVER_DISCONNECTED_EVENT,listener);let error;if(!machineServerConnected&&!graphServerConnected){error=createError(ErrorCodes.MACHINE_SERVER_AND_GRAPH_SERVER_NOT_CONNECTED,'Machine server and graph server are not connected.');}else if(!machineServerConnected){error=createError(ErrorCodes.MACHINE_SERVER_NOT_CONNECTED,'Machine server is not connected.');}else if(!graphServerConnected){error=createError(ErrorCodes.GRAPH_SERVER_NOT_CONNECTED,'Graph server is not connected.');}this.logger.error(error);reject(error);},timeout);this.on(GatewayMessagingProtocol.EVENTS.MACHINE_SERVER_CONNECTED_EVENT,listener);this.on(GatewayMessagingProtocol.EVENTS.MACHINE_SERVER_DISCONNECTED_EVENT,listener);this.on(GatewayMessagingProtocol.EVENTS.GRAPH_SERVER_CONNECTED_EVENT,listener);this.on(GatewayMessagingProtocol.EVENTS.GRAPH_SERVER_DISCONNECTED_EVENT,listener);});}/**
	 * ******************************************************************************************
	 * High Level API
	 * ******************************************************************************************
	 */executeStreamCommand(scope,cmd){return this.socket.executeStreamCommand(scope,cmd);}graphql(query,variables,file){return this.http.graphql(query,variables,file);}/**
	 * *********************************************
	 * User Definition API
	 * *********************************************
	 */login(credentials){return this.socket.login(credentials).then(async res=>{this._token=res.response.token;this.http.token=res.response.token;await this.resetConnection();return res;});}authenticate(authRequest){return this.http.authenticate(authRequest).then(async res=>{this._token=res.token;this.http.token=res.token;await this.resetConnection();return res;});}logout(id){return this.socket.logout(id).then(async res=>{this._token=undefined;this.http.token=undefined;await this.resetConnection();return res;});}authEntityCreate(entity){return this.socket.authEntityCreate(entity);}authEntityGet(entity){return this.socket.authEntityGet(entity);}authEntityDelete(entity){return this.socket.authEntityDelete(entity);}authEntityUpdate(entity){return this.socket.authEntityUpdate(entity);}getUser(userId){return this.socket.getUser(userId);}saveUser(user){return this.socket.saveUser(user);}getUserSettings(userId){return this.socket.getUserSettings(userId);}saveUserSettings(userId,settings){return this.socket.saveUserSettings(userId,settings);}/**
	 * *********************************************
	 * Machine Definition API
	 * *********************************************
	 */async cloneMachine(machineId){const cloneMutation=`
			mutation CloneMachine($machineId: ID!) {
				scopedByMachine(machineId: $machineId) {
					cloneMachine(machineId: $machineId) {
						success
						clonedMachine {
							name
							id
							metadata {
								lastModified
								owner
							}
							previewImage
							titleImage
							streamsheets {
								name
								inbox {
									stream {
										name
									}
								}
							}
							state
						}
					}
				}
			}
		`;const result=await this.graphql(cloneMutation,{machineId});return result.scopedByMachine.cloneMachine;}backup(){return this.http.backup();}restore(file){return this.http.restore(file);}/**
	 * *********************************************
	 * Machine API
	 * *********************************************
	 */getMachine(machineId){return this.socket.getMachine(machineId);}getMachines(){return this.socket.getMachines();}deleteMachine(machineId,scope){return this.socket.deleteMachine(machineId,scope);}// async deleteMachines() {
// 	const machines = this.getMachines();
// 	for (let machine of machines) {
// 		await this.subscribeMachine(machine.id);
// 		await this.deleteMachine(machine.id);
// 		await this.unsubscribeMachine(machine.id);
// 	}
// }
deleteMachines(){return this.getMachines().then(response=>{const machines=response.machineserver.machines;const promises=machines.map(machine=>Promise.resolve().then(()=>this.subscribeMachine(machine.id)).then(()=>this.deleteMachine(machine.id))// .then(() => deletedMachineCallback(machine))
.then(()=>this.unsubscribeMachine(machine.id)));return Promise.all(promises);});}startAllMachines(singleMachineStartedCallback){return this._batch(this.startMachine.bind(this),singleMachineStartedCallback);}stopAllMachines(singleMachineStoppedCallback){return this._batch(this.stopMachine.bind(this),singleMachineStoppedCallback);}pauseAllMachines(singleMachinePausedCallback){return this._batch(this.pauseMachine.bind(this),singleMachinePausedCallback);}deleteAllMachines(singleMachineDeletedCallback){return this._batch(this.deleteMachine.bind(this),singleMachineDeletedCallback);}_batch(operation,singleOperationCallback){return this.getMachines().then(response=>{const machines=response.machineserver.machines;const promises=machines.map(machine=>Promise.resolve().then(()=>this.loadMachine(machine.id)).then(()=>this.subscribeMachine(machine.id)).then(()=>operation?operation(machine.id):null).then(()=>singleOperationCallback(machine)).then(()=>this.unsubscribeMachine(machine.id)));return Promise.all(promises);});}loadMachine(machineId,settings,scope){return this.socket.loadMachine(machineId,settings,scope);}unloadMachine(machineId){return this.socket.unloadMachine(machineId);}loadSubscribeMachine(machineId,settings,scope){return this.socket.loadSubscribeMachine(machineId,settings,scope);}openMachine(machineId){return this.socket.openMachine(machineId);}pauseMachine(machineId){return this.socket.pauseMachine(machineId);}updateMachineImage(machineId,previewImage){return this.socket.updateMachineImage(machineId,previewImage);}updateMachineTitleImage(machineId,titleImage){return this.socket.updateMachineTitleImage(machineId,titleImage);}renameMachine(machineId,newName){return this.socket.renameMachine(machineId,newName);}createStreamSheet(machineId,activeItemId,position,sheetType,scope){return this.socket.createStreamSheet(machineId,activeItemId,position,sheetType,scope);}deleteStreamSheet(machineId,streamsheetId,scope){return this.socket.deleteStreamSheet(machineId,streamsheetId,scope);}updateStreamSheetStreams(machineId,streamsheetId,streams){return this.socket.updateStreamSheetStreams(machineId,streamsheetId,streams);}confirmProcessedMachineStep(machineId){return this.socket.confirmProcessedMachineStep(machineId);}startMachine(machineId){return this.socket.startMachine(machineId);}stepMachine(machineId){return this.socket.stepMachine(machineId);}stopMachine(machineId){return this.socket.stopMachine(machineId);}startMachines(){return this.socket.startMachines();}stopMachines(){return this.socket.stopMachines();}subscribeMachine(machineId){return this.socket.subscribeMachine(machineId);}unsubscribeMachine(machineId){return this.socket.unsubscribeMachine(machineId);}async saveMachineAs(machineId,newName){const cloneMutation=`
			mutation CloneMachine($machineId: ID!, $newName: String!) {
				scopedByMachine(machineId: $machineId) {
					cloneMachine(machineId: $machineId, newName: $newName) {
						success
						clonedMachine {
							name
							id
							metadata {
								lastModified
								owner
							}
							previewImage
							titleImage
							streamsheets {
								name
								inbox {
									stream {
										name
									}
								}
							}
							state
						}
					}
				}
			}
		`;const result=await this.graphql(cloneMutation,{machineId,newName});return result.scopedByMachine.cloneMachine;}redo(machineId){return this.socket.redo(machineId);}undo(machineId){return this.socket.undo(machineId);}setCycleTime(machineId,cycleTime){return this.socket.setCycleTime(machineId,cycleTime);}setMachineLocale(machineId,locale){return this.socket.setMachineLocale(machineId,locale);}setStreamSheetStepInterval(machineId,streamsheetStepInterval){return this.socket.setStreamSheetStepInterval(machineId,streamsheetStepInterval);}updateMachineSettings(machineId,settings){return this.socket.updateMachineSettings(machineId,settings);}getCellRawValue(machineId,streamsheetId,reference){return this.socket.getCellRawValue(machineId,streamsheetId,reference);}/**
	 * *********************************************
	 * General API
	 * *********************************************
	 */getMetaInformation(scope){return this.http.getMetaInformation(scope);}/**
	 * *********************************************
	 * Graph API
	 * *********************************************
	 */ // TODO: deprecated
createGraph(){return this.socket.createGraph();}// TODO: deprecated
loadGraph(graphId){return this.socket.loadGraph(graphId);}// TODO: deprecated
subscribeGraph(graphId){return this.socket.subscribeGraph(graphId);}// TODO: deprecated
unsubscribeGraph(graphId){return this.socket.unsubscribeGraph(graphId);}sendSelection(){// TODO: implement
}sendCommand(machineId,graphId,command,undo=false,redo=false){return this.socket.sendCommand(machineId,graphId,command,undo,redo);}sendMachineAction(machineId,action){return this.socket.sendMachineAction(machineId,action);}updateNamedCells(machineId,streamsheetId,namedCells){return this.socket.updateNamedCells(machineId,streamsheetId,namedCells);}addInboxMessage(machineId,streamsheetId,message,metadata){return this.socket.addInboxMessage(machineId,streamsheetId,message,metadata);}/**
	 * *********************************************
	 * Administration API
	 * *********************************************
	 */saveDSConfiguration(scope,configuration){return this.socket.saveDSConfiguration(scope,configuration);}loadAllDSConfigurations(scope){return this.socket.loadAllDSConfigurations(scope);}deleteDSConfiguration(scope,configId){if(typeof configId==='undefined'){return Promise.resolve(null);}return this.socket.deleteDSConfiguration(scope,configId);}reloadStreams(scope,sources=[]){return this.socket.reloadStreams(scope,sources);}/**
	 * ******************************************************************************************
	 * Low Level API
	 * ******************************************************************************************
	 */sendRequest(request){this.logger.info(`Sending message: ${JSON.stringify(request)}.`);return this.http.sendRequest(request);}sendWebSocketRequest(request){this.logger.info(`Sending message: ${JSON.stringify(request)}.`);return this.socket.sendRequest(request);}/**
	 * ******************************************************************************************
	 * Private methods
	 * ******************************************************************************************
	 */_initDefaultEventListeners(defaultListener){Object.values(GatewayMessagingProtocol.EVENTS).forEach(eventType=>{this.on(eventType,event=>this.logger.debug('Got event',event));if(defaultListener){this.on(eventType,event=>defaultListener(event));}});}_connectSocketServer(){// There are different subclasses for usage in Node.js and in the browser
// and they handle connecting to a web socket server differently.
return Promise.reject(new Error('No implementation of abstract method _connectSocketServer() in subclass.'));}_connectRESTServer(){return Promise.resolve();}_handleSocketMessage(message){const parsedMessage=JSON.parse(message);if(parsedMessage.error==='NOT_AUTHENTICATED'){// console.log('redirect event');
this._handleEvent({type:'redirect',to:'/login'});return;}if(parsedMessage.type==='response'){if(this.socket){this.socket._handleSocketMessage(parsedMessage);}}else if(parsedMessage.type==='event'){this._handleEvent(parsedMessage.event);}}_handleEvent(event){const listeners=this._eventListeners.get(event.type);if(listeners){listeners.forEach(listener=>listener(event));}}_handleOpenedSocketConnection(){this.logger.info(`Client '${this.name}' connected`);return Promise.resolve(this);}_handleSocketClose(event){this.logger.info('Websocket closed');this.closeHandler(event);this._handleEvent({type:GatewayMessagingProtocol.EVENTS.GATEWAY_DISCONNECTED_EVENT});}_handleSocketError(event){this.logger.info('Websocket error',event);}};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/********************************************************************************
 * Copyright (c) 2020 Cedalo AG
 *
 * This program and the accompanying materials are made available under the 
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 ********************************************************************************/module.exports=class GatewayAPI{constructor(logger){this._logger=logger;}get logger(){return this._logger;}};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/********************************************************************************
 * Copyright (c) 2020 Cedalo AG
 *
 * This program and the accompanying materials are made available under the 
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 ********************************************************************************/ /* eslint-disable no-console */const fetch=__webpack_require__(11);const Request=__webpack_require__(1);class HTTPError{constructor({status,statusText,url,error}){this.status=status;this.statusText=statusText;this.url=url;this.error=error;}}module.exports=class HTTPRequest extends Request{constructor(baseEndpoint,token){super();this._baseEndpoint=baseEndpoint;this._token=token;}async send(){const response=await fetch(`${this._baseEndpoint}${this._getPath()}${this._getQueryString()}`,this._getConfig());const contentType=response.headers.get('content-type');if(response.status>=400){if(contentType&&contentType.indexOf('application/json')>=0){const body=await response.json();response.error=body.error?body.error:body;console.error('HttpRequest failed: ',response.error);}throw new HTTPError(response);}try{let data;if(contentType){if(contentType.indexOf('application/json')>=0){data=await response.json();}else if(contentType.indexOf('application/gzip')>=0){data=await response.blob();}}return this._handleResponse(data);}catch(error){console.error(error);throw new Error(error);}}_getPath(){throw new Error('Method _getPath() must be implemented by subclass.');}_getConfig(){throw new Error('Method _getConfig() must be implemented by subclass.');}_getQueryString(){return'';}_handleResponse(response){return response;}_createAuthHeader(optionalToken){const optionalAuthHeader={};if(optionalToken){optionalAuthHeader.Authorization=`JWT ${optionalToken}`;}return optionalAuthHeader;}_createGETConfig(optionalHeaders={},optionalAuthHeader){const headers=Object.assign({Accept:'application/json'},optionalHeaders,optionalAuthHeader);// TODO: enable
/*
		const headers = {
			Accept: 'application/json',
			...optionalHeaders,
			...optionalAuthHeader,
		}
		*/const result={method:'get',headers};return result;}_createPOSTConfig(optionalBodyObject,optionalHeaders={},optionalAuthHeader){const headers=Object.assign({Accept:'application/json'},optionalHeaders,optionalAuthHeader);return this._createPayloadConfig('post',optionalBodyObject,headers);}_createPayloadConfig(method,optionalBody,optionalHeaders={}){const optionalAuthHeader=this._createAuthHeader();const headers=Object.assign(this._getDefaultHeaders(),optionalHeaders,optionalAuthHeader);const payloadConfig={method,headers// TODO: enable
/*
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
				Accept: 'application/json',
				...optionalHeaders,
				...optionalAuthHeader,
			},
			*/};if(optionalBody){this._setBodyToPayloadConfig(payloadConfig,optionalBody);}return payloadConfig;}_getDefaultHeaders(){return{Accept:'application/json','Content-type':'application/json; charset=UTF-8'};}_setBodyToPayloadConfig(payloadConfig,body){payloadConfig.body=JSON.stringify(body);}_createDELETEConfig(optionalHeaders){const optionalAuthHeader=this._createAuthHeader();const headers=Object.assign({Accept:'application/json'},optionalHeaders,optionalAuthHeader);return{method:'delete',headers// TODO: enable
/*
			headers: {
				Accept: 'application/json',
				...optionalHeaders,
				...optionalAuthHeader,
			},
			*/};}_createPUTConfig(optionalBodyObject,headers){return this._createPayloadConfig('put',optionalBodyObject,headers);}};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/********************************************************************************
 * Copyright (c) 2020 Cedalo AG
 *
 * This program and the accompanying materials are made available under the 
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 ********************************************************************************/const uuid=__webpack_require__(15);const Request=__webpack_require__(1);module.exports=class WebSocketRequest extends Request{constructor(ws,type){super();this._ws=ws;this._id=uuid();this._type=type;}get id(){return this._id;}send(){return new Promise((resolve/* , reject */)=>{this._ws.send(JSON.stringify(this.toJSON()));resolve();});}_getConfig(){return{};}toJSON(){return Object.assign({type:this._type,requestId:this._id},this._getConfig());}};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/********************************************************************************
 * Copyright (c) 2020 Cedalo AG
 *
 * This program and the accompanying materials are made available under the 
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 ********************************************************************************/const _require=__webpack_require__(8),WebGatewayClient=_require.WebGatewayClient;const defaultListener=event=>{const eventMessage={type:'event',event};postMessage(eventMessage);};const gatewayClient=new WebGatewayClient({name:'Web Worker Gateway Client',defaultListener});// eslint-disable-next-line
onmessage=async event=>{const _event$data=event.data,method=_event$data.method,_event$data$args=_event$data.args,args=_event$data$args===void 0?[]:_event$data$args,requestId=_event$data.requestId;let response=null;try{const result=await gatewayClient[method](...args);response={type:'response',requestId,result};}catch(error){response={type:'error',requestId,error};}postMessage(response);};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/********************************************************************************
 * Copyright (c) 2020 Cedalo AG
 *
 * This program and the accompanying materials are made available under the 
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 ********************************************************************************/const Request=__webpack_require__(1);const BaseGatewayClient=__webpack_require__(3);const HTTPRequest=__webpack_require__(5);const WebSocketRequest=__webpack_require__(6);const WebGatewayClient=__webpack_require__(23);module.exports={BaseGatewayClient,HTTPRequest,Request,WebGatewayClient,WebSocketRequest};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/********************************************************************************
 * Copyright (c) 2020 Cedalo AG
 *
 * This program and the accompanying materials are made available under the 
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 ********************************************************************************/function _instanceof(left,right){if(right!=null&&typeof Symbol!=="undefined"&&right[Symbol.hasInstance]){return!!right[Symbol.hasInstance](left);}else{return left instanceof right;}}const GatewayAPI=__webpack_require__(4);const _require=__webpack_require__(10),BackupHTTPRequest=_require.BackupHTTPRequest,GetMetaInformationHTTPRequest=_require.GetMetaInformationHTTPRequest,GraphQLHTTPRequest=_require.GraphQLHTTPRequest,GraphQLWithFileHTTPRequest=_require.GraphQLWithFileHTTPRequest,ImportMachineHTTPRequest=_require.ImportMachineHTTPRequest,RestoreHTTPRequest=_require.RestoreHTTPRequest,AuthenticateHTTPRequest=_require.AuthenticateHTTPRequest,AuthenticatePathHTTPRequest=_require.AuthenticatePathHTTPRequest;module.exports=class HTTPGatewayAPI extends GatewayAPI{constructor(restEndpointURL,token,logger){super(logger);this._restEndpointURL=restEndpointURL;this._token=token;}set token(token){this._token=token;}/**
	 * ******************************************************************************************
	 * High Level API: REST API
	 * ******************************************************************************************
	 */authenticate(authRequest){const Request=authRequest.pathname!=null?AuthenticatePathHTTPRequest:AuthenticateHTTPRequest;return this.sendRequest(new Request(this._restEndpointURL,authRequest));}getMetaInformation(scope){return this.sendRequest(new GetMetaInformationHTTPRequest(this._restEndpointURL,this._token,scope));}graphql(query,variables,file){if(file){return this.sendRequest(new GraphQLWithFileHTTPRequest(this._restEndpointURL,this._token,query,variables,file));}return this.sendRequest(new GraphQLHTTPRequest(this._restEndpointURL,this._token,query,variables));}importMachine(importData,importAsNew){return this.sendRequest(new ImportMachineHTTPRequest(this._restEndpointURL,this._token,importData,importAsNew));}backup(){return this.sendRequest(new BackupHTTPRequest(this._restEndpointURL,this._token));}restore(file){return this.sendRequest(new RestoreHTTPRequest(this._restEndpointURL,this._token,file));}/**
	 * ******************************************************************************************
	 * Low Level API
	 * ******************************************************************************************
	 */sendRequest(request){/* eslint-disable */this.logger.debug('Sending request to Gateway',request);return request.send().then(response=>{this.logger.debug('Got response from Gateway',response);if(_instanceof(request,GraphQLHTTPRequest)){if(response.errors){const error={message:'GraphQL Error',errors:response.errors};throw error;}return response.data;}return response;}).catch(error=>{this.logger.error('Sending request to Gateway',request._getPath());this.logger.error('Sending request to Gateway',request._getConfig());this.logger.error(`Error while communicating with Gateway while executing request '${request.constructor.name}'`,error);throw error;});/* eslint-enable */}};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/********************************************************************************
 * Copyright (c) 2020 Cedalo AG
 *
 * This program and the accompanying materials are made available under the 
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 ********************************************************************************/ /* global FormData */ /* eslint-disable no-console */function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}const HTTPRequest=__webpack_require__(5);class AuthenticateHTTPRequest extends HTTPRequest{constructor(baseEndpoint,params){super(baseEndpoint);this._params=params;}_getPath(){return'/login';}_getConfig(){return this._createPOSTConfig(_objectSpread({},this._params),{});}}class AuthenticatePathHTTPRequest extends AuthenticateHTTPRequest{_getPath(){return'/pathlogin';}}class GetMetaInformationHTTPRequest extends HTTPRequest{constructor(baseEndpoint,token,scope){super(baseEndpoint,token);this._scopeId=scope?scope.id:undefined;}_getPath(){return'/meta';}_getConfig(){return this._createGETConfig({scope:this._scopeId},this._createAuthHeader(this._token));}}class GraphQLHTTPRequest extends HTTPRequest{constructor(baseEndpoint,token,query,variables){super(baseEndpoint,token);this._query=query;this._variables=variables;}_getPath(){return'/graphql';}_getConfig(){return this._createPOSTConfig({query:this._query,variables:this._variables},{},this._createAuthHeader(this._token));}}class GraphQLWithFileHTTPRequest extends HTTPRequest{constructor(baseEndpoint,token,query,variables,file){super(baseEndpoint,token);this.formData=new FormData();this.formData.append('operations',JSON.stringify({query,variables}));this.formData.append('map',JSON.stringify({"0":["variables.file"]}));this.formData.append('0',file);}_getPath(){return'/graphql';}_getConfig(){return this._createPOSTConfig(this.formData,{},this._createAuthHeader(this._token));}_getDefaultHeaders(){return{Accept:'application/json'};}_setBodyToPayloadConfig(payloadConfig,body){// don't serialize to JSON because it is form data
payloadConfig.body=body;}}class ImportMachineHTTPRequest extends HTTPRequest{constructor(baseEndpoint,token,importData,importAsNew){super(baseEndpoint,token);this._importData=importData;this._importData.importAsNew=importAsNew;}_getPath(){return'/import';}_getConfig(){return this._createPOSTConfig(this._importData,{},this._createAuthHeader(this._token));}}class BackupHTTPRequest extends HTTPRequest{_getPath(){return'/backup';}_getConfig(){return this._createGETConfig({responseType:'blob'},this._createAuthHeader(this._token));}}class RestoreHTTPRequest extends HTTPRequest{constructor(baseEndpoint,token,file){super(baseEndpoint,token);this.formData=new FormData();this.formData.append('restoreData',file);console.log(this.formData.get('restoreData'));}_getPath(){return'/restore';}_getConfig(){return this._createPOSTConfig(this.formData,{},this._createAuthHeader(this._token));}_getDefaultHeaders(){return{Accept:'application/json'};}_setBodyToPayloadConfig(payloadConfig,body){// don't serialize to JSON because it is form data
payloadConfig.body=body;}}module.exports={BackupHTTPRequest,AuthenticateHTTPRequest,AuthenticatePathHTTPRequest,GetMetaInformationHTTPRequest,GraphQLHTTPRequest,GraphQLWithFileHTTPRequest,ImportMachineHTTPRequest,RestoreHTTPRequest};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(12);
module.exports = self.fetch.bind(self);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["Headers"] = Headers;
/* harmony export (immutable) */ __webpack_exports__["Request"] = Request;
/* harmony export (immutable) */ __webpack_exports__["Response"] = Response;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (immutable) */ __webpack_exports__["fetch"] = fetch;
var support = {
  searchParams: 'URLSearchParams' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
  blob:
    'FileReader' in self &&
    'Blob' in self &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in self,
  arrayBuffer: 'ArrayBuffer' in self
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
    var parts = line.split(':')
    var key = parts.shift().trim()
    if (key) {
      var value = parts.join(':').trim()
      headers.append(key, value)
    }
  })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in options ? options.statusText : 'OK'
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = self.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      resolve(new Response(body, options))
    }

    xhr.onerror = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.ontimeout = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.onabort = function() {
      reject(new DOMException('Aborted', 'AbortError'))
    }

    xhr.open(request.method, request.url, true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob'
    }

    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value)
    })

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!self.fetch) {
  self.fetch = fetch
  self.Headers = Headers
  self.Request = Request
  self.Response = Response
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/********************************************************************************
 * Copyright (c) 2020 Cedalo AG
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 ********************************************************************************/const GatewayAPI=__webpack_require__(4);const _require=__webpack_require__(14),CreateGraphWebSocketRequest=_require.CreateGraphWebSocketRequest,LoadGraphWebSocketRequest=_require.LoadGraphWebSocketRequest,SubscribeGraphWebSocketRequest=_require.SubscribeGraphWebSocketRequest,UnsubscribeGraphWebSocketRequest=_require.UnsubscribeGraphWebSocketRequest,AddInboxMessageWebSocketRequest=_require.AddInboxMessageWebSocketRequest,CreateStreamSheetWebSocketRequest=_require.CreateStreamSheetWebSocketRequest,DeleteMachineWebSocketRequest=_require.DeleteMachineWebSocketRequest,DeleteStreamSheetWebSocketRequest=_require.DeleteStreamSheetWebSocketRequest,GetMachineWebSocketRequest=_require.GetMachineWebSocketRequest,GetMachinesWebSocketRequest=_require.GetMachinesWebSocketRequest,GetCellRawValueWebSocketRequest=_require.GetCellRawValueWebSocketRequest,LoadMachineWebSocketRequest=_require.LoadMachineWebSocketRequest,LoadSubscribeMachineWebSocketRequest=_require.LoadSubscribeMachineWebSocketRequest,OpenMachineWebSocketRequest=_require.OpenMachineWebSocketRequest,PauseMachineWebSocketRequest=_require.PauseMachineWebSocketRequest,RenameMachineWebSocketRequest=_require.RenameMachineWebSocketRequest,UpdateMachineImageWebSocketRequest=_require.UpdateMachineImageWebSocketRequest,UpdateMachineTitleImageWebSocketRequest=_require.UpdateMachineTitleImageWebSocketRequest,UpdateStreamSheetStreamsWebSocketRequest=_require.UpdateStreamSheetStreamsWebSocketRequest,SaveMachineAsWebSocketRequest=_require.SaveMachineAsWebSocketRequest,SetCycleTimeWebSocketRequest=_require.SetCycleTimeWebSocketRequest,SetMachineLocaleWebSocketRequest=_require.SetMachineLocaleWebSocketRequest,SetNamedCellsWebSocketRequest=_require.SetNamedCellsWebSocketRequest,SetStreamSheetStepIntervalWebSocketRequest=_require.SetStreamSheetStepIntervalWebSocketRequest,ConfirmProcessedMachineStepRequest=_require.ConfirmProcessedMachineStepRequest,StartMachineWebSocketRequest=_require.StartMachineWebSocketRequest,StartMachinesWebSocketRequest=_require.StartMachinesWebSocketRequest,StepMachineWebSocketRequest=_require.StepMachineWebSocketRequest,StopMachineWebSocketRequest=_require.StopMachineWebSocketRequest,StopMachinesWebSocketRequest=_require.StopMachinesWebSocketRequest,SubscribeMachineWebSocketRequest=_require.SubscribeMachineWebSocketRequest,RedoWebSocketRequest=_require.RedoWebSocketRequest,UndoWebSocketRequest=_require.UndoWebSocketRequest,UnsubscribeMachineWebSocketRequest=_require.UnsubscribeMachineWebSocketRequest,UpdateMachineSettingsWebSocketRequest=_require.UpdateMachineSettingsWebSocketRequest,CommandWebSocketRequest=_require.CommandWebSocketRequest,MachineActionWebSocketRequest=_require.MachineActionWebSocketRequest,UserGetSocketRequest=_require.UserGetSocketRequest,UserSaveSocketRequest=_require.UserSaveSocketRequest,UserSettingGetSocketRequest=_require.UserSettingGetSocketRequest,UserSettingsSaveSocketRequest=_require.UserSettingsSaveSocketRequest,DSConfigurationSaveSocketRequest=_require.DSConfigurationSaveSocketRequest,DSConfigurationLoadAllSocketRequest=_require.DSConfigurationLoadAllSocketRequest,DSConfigurationDeleteSocketRequest=_require.DSConfigurationDeleteSocketRequest,DSReloadSocketRequest=_require.DSReloadSocketRequest,UserLoginSocketRequest=_require.UserLoginSocketRequest,UserLogoutSocketRequest=_require.UserLogoutSocketRequest,UnloadMachineWebSocketRequest=_require.UnloadMachineWebSocketRequest,AuthEntityCreateSocketRequest=_require.AuthEntityCreateSocketRequest,AuthEntityDeleteSocketRequest=_require.AuthEntityDeleteSocketRequest,AuthEntityUpdateSocketRequest=_require.AuthEntityUpdateSocketRequest,AuthEntityGetSocketRequest=_require.AuthEntityGetSocketRequest,StreamCommandSocketRequest=_require.StreamCommandSocketRequest;const deletePendingRequest=(requestId,requests)=>{const request=requests.get(requestId);if(request){clearTimeout(request.timeoutId);requests.delete(requestId);}return request;};const timeoutHandler=(requestId,requests)=>{const _deletePendingRequest=deletePendingRequest(requestId,requests),reject=_deletePendingRequest.reject;reject({message:'Timeout',requestId});};module.exports=class WebSocketGatewayAPI extends GatewayAPI{constructor(ws,logger){super(logger);this._ws=ws;this._requests=new Map();// TODO: make timeout configurable
// request timeout in ms:
this._timeout=20000;}/**
	 * ******************************************************************************************
	 * High Level API: Web Socket API
	 * ******************************************************************************************
	 */executeStreamCommand(scope,cmd){return this.sendRequest(new StreamCommandSocketRequest(this._ws,scope,cmd));}saveDSConfiguration(scope,configuration){return this.sendRequest(new DSConfigurationSaveSocketRequest(this._ws,scope,configuration));}loadAllDSConfigurations(scope){return this.sendRequest(new DSConfigurationLoadAllSocketRequest(this._ws,scope));}deleteDSConfiguration(scope,configId){return this.sendRequest(new DSConfigurationDeleteSocketRequest(this._ws,scope,configId));}reloadStreams(scope,sources=[]){return this.sendRequest(new DSReloadSocketRequest(this._ws,scope,sources));}login(credentials){return this.sendRequest(new UserLoginSocketRequest(this._ws,credentials));}logout(id){return this.sendRequest(new UserLogoutSocketRequest(this._ws,id));}authEntityGet(entity){return this.sendRequest(new AuthEntityGetSocketRequest(this._ws,entity));}authEntityCreate(entity){return this.sendRequest(new AuthEntityCreateSocketRequest(this._ws,entity));}authEntityDelete(entity){return this.sendRequest(new AuthEntityDeleteSocketRequest(this._ws,entity));}authEntityUpdate(entity){return this.sendRequest(new AuthEntityUpdateSocketRequest(this._ws,entity));}getUserSettings(userId){return this.sendRequest(new UserSettingGetSocketRequest(this._ws,userId));}saveUserSettings(userId,settings){return this.sendRequest(new UserSettingsSaveSocketRequest(this._ws,userId,settings));}getUser(userId){return this.sendRequest(new UserGetSocketRequest(this._ws,userId));}saveUser(user){return this.sendRequest(new UserSaveSocketRequest(this._ws,user));}getMachine(machineId){return this.sendRequest(new GetMachineWebSocketRequest(this._ws,machineId));}getMachines(){return this.sendRequest(new GetMachinesWebSocketRequest(this._ws));}deleteMachine(machineId,scope){return this.sendRequest(new DeleteMachineWebSocketRequest(this._ws,machineId,scope));}createGraph(){return this.sendRequest(new CreateGraphWebSocketRequest(this._ws));}loadGraph(graphId){return this.sendRequest(new LoadGraphWebSocketRequest(this._ws,graphId));}subscribeGraph(graphId){return this.sendRequest(new SubscribeGraphWebSocketRequest(this._ws,graphId));}unsubscribeGraph(graphId){return this.sendRequest(new UnsubscribeGraphWebSocketRequest(this._ws,graphId));}sendSelection()/* selection */{// TODO: implement
}loadMachine(machineId,settings,scope){return this.sendRequest(new LoadMachineWebSocketRequest(this._ws,machineId,settings,scope),180000);}unloadMachine(machineId){return this.sendRequest(new UnloadMachineWebSocketRequest(this._ws,machineId));}loadSubscribeMachine(machineId,settings,scope){return this.sendRequest(new LoadSubscribeMachineWebSocketRequest(this._ws,machineId,settings,scope),180000);}openMachine(machineId){return this.sendRequest(new OpenMachineWebSocketRequest(this._ws,machineId));}pauseMachine(machineId){return this.sendRequest(new PauseMachineWebSocketRequest(this._ws,machineId));}updateMachineImage(machineId,previewImage){return this.sendRequest(new UpdateMachineImageWebSocketRequest(this._ws,machineId,previewImage));}updateMachineTitleImage(machineId,titleImage){return this.sendRequest(new UpdateMachineTitleImageWebSocketRequest(this._ws,machineId,titleImage));}renameMachine(machineId,newName){return this.sendRequest(new RenameMachineWebSocketRequest(this._ws,machineId,newName));}updateNamedCells(machineId,streamsheetId,namedCells){return this.sendRequest(new SetNamedCellsWebSocketRequest(this._ws,machineId,streamsheetId,namedCells));}addInboxMessage(machineId,streamsheetId,message,metadata){return this.sendRequest(new AddInboxMessageWebSocketRequest(this._ws,machineId,streamsheetId,message,metadata));}createStreamSheet(machineId,activeItemId,position,sheetType,scope){return this.sendRequest(new CreateStreamSheetWebSocketRequest(this._ws,machineId,activeItemId,position,sheetType,scope));}deleteStreamSheet(machineId,streamsheetId,scope){return this.sendRequest(new DeleteStreamSheetWebSocketRequest(this._ws,machineId,streamsheetId,scope));}updateStreamSheetStreams(machineId,streamsheetId,streams){return this.sendRequest(new UpdateStreamSheetStreamsWebSocketRequest(this._ws,machineId,streamsheetId,streams));}setCycleTime(machineId,cycleTime){return this.sendRequest(new SetCycleTimeWebSocketRequest(this._ws,machineId,cycleTime));}setMachineLocale(machineId,locale){return this.sendRequest(new SetMachineLocaleWebSocketRequest(this._ws,machineId,locale));}setStreamSheetStepInterval(machineId,streamsheetStepInterval){return this.sendRequest(new SetStreamSheetStepIntervalWebSocketRequest(this._ws,machineId,streamsheetStepInterval));}confirmProcessedMachineStep(machineId){return this.sendRequest(new ConfirmProcessedMachineStepRequest(this._ws,machineId));}startMachine(machineId){return this.sendRequest(new StartMachineWebSocketRequest(this._ws,machineId));}startMachines(){return this.sendRequest(new StartMachinesWebSocketRequest(this._ws));}stepMachine(machineId){return this.sendRequest(new StepMachineWebSocketRequest(this._ws,machineId));}stopMachine(machineId){return this.sendRequest(new StopMachineWebSocketRequest(this._ws,machineId));}stopMachines(){return this.sendRequest(new StopMachinesWebSocketRequest(this._ws));}subscribeMachine(machineId){return this.sendRequest(new SubscribeMachineWebSocketRequest(this._ws,machineId),180000);}redo(machineId){return this.sendRequest(new RedoWebSocketRequest(this._ws,machineId));}undo(machineId){return this.sendRequest(new UndoWebSocketRequest(this._ws,machineId));}unsubscribeMachine(machineId){return this.sendRequest(new UnsubscribeMachineWebSocketRequest(this._ws,machineId));}updateMachineSettings(machineId,settings){return this.sendRequest(new UpdateMachineSettingsWebSocketRequest(this._ws,machineId,settings));}saveMachineAs(originalMachineId,newName){return this.sendRequest(new SaveMachineAsWebSocketRequest(this._ws,originalMachineId,newName));}sendCommand(machineId,graphId,command,undo=false,redo=false){return this.sendRequest(new CommandWebSocketRequest(this._ws,machineId,graphId,command,undo,redo));}sendMachineAction(machineId,action){return this.sendRequest(new MachineActionWebSocketRequest(this._ws,machineId,action));}getCellRawValue(machineId,streamsheetId,reference){return this.sendRequest(new GetCellRawValueWebSocketRequest(this._ws,machineId,streamsheetId,reference));}/**
	 * ******************************************************************************************
	 * Low Level API
	 * ******************************************************************************************
	 */sendRequest(request,timeout=this._timeout){/* eslint-disable */this.logger.debug('Sending request to Gateway',request);return new Promise((resolve,reject)=>{const timeoutId=setTimeout(()=>timeoutHandler(request.id,this._requests),timeout);this._requests.set(request.id,{resolve,reject,timeoutId,request});return request.send().catch(error=>{this.logger.error('Sending request to Gateway',request._getConfig());this.logger.error(`Error while communicating with Gateway while executing request '${request.constructor.name}'`,error);throw error;});});/* eslint-enable */}_handleSocketMessage(message){/* eslint-disable */const request=deletePendingRequest(message.requestId,this._requests);if(request){if(message.type==='response'){this.logger.debug('Got response from Gateway',message);return request.resolve(message);}else{return request.reject(message);}}return null;/* eslint-enable */}};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/********************************************************************************
 * Copyright (c) 2020 Cedalo AG
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 ********************************************************************************/const WebSocketRequest=__webpack_require__(6);const _require$GatewayMessa=__webpack_require__(0).GatewayMessagingProtocol.MESSAGE_TYPES,LOAD_GRAPH_MESSAGE_TYPE=_require$GatewayMessa.LOAD_GRAPH_MESSAGE_TYPE,SUBSCRIBE_GRAPH_MESSAGE_TYPE=_require$GatewayMessa.SUBSCRIBE_GRAPH_MESSAGE_TYPE,UNSUBSCRIBE_GRAPH_MESSAGE_TYPE=_require$GatewayMessa.UNSUBSCRIBE_GRAPH_MESSAGE_TYPE,ADD_INBOX_MESSAGE=_require$GatewayMessa.ADD_INBOX_MESSAGE,CREATE_STREAMSHEET_MESSAGE_TYPE=_require$GatewayMessa.CREATE_STREAMSHEET_MESSAGE_TYPE,DELETE_MACHINE_MESSAGE_TYPE=_require$GatewayMessa.DELETE_MACHINE_MESSAGE_TYPE,DELETE_STREAMSHEET_MESSAGE_TYPE=_require$GatewayMessa.DELETE_STREAMSHEET_MESSAGE_TYPE,GET_MACHINE_MESSAGE_TYPE=_require$GatewayMessa.GET_MACHINE_MESSAGE_TYPE,GET_MACHINES_MESSAGE_TYPE=_require$GatewayMessa.GET_MACHINES_MESSAGE_TYPE,GET_CELL_RAW_VALUE=_require$GatewayMessa.GET_CELL_RAW_VALUE,LOAD_MACHINE_MESSAGE_TYPE=_require$GatewayMessa.LOAD_MACHINE_MESSAGE_TYPE,UNLOAD_MACHINE_MESSAGE_TYPE=_require$GatewayMessa.UNLOAD_MACHINE_MESSAGE_TYPE,LOAD_SUBSCRIBE_MACHINE_MESSAGE_TYPE=_require$GatewayMessa.LOAD_SUBSCRIBE_MACHINE_MESSAGE_TYPE,MACHINE_UPDATE_SETTINGS_MESSAGE_TYPE=_require$GatewayMessa.MACHINE_UPDATE_SETTINGS_MESSAGE_TYPE,OPEN_MACHINE_MESSAGE_TYPE=_require$GatewayMessa.OPEN_MACHINE_MESSAGE_TYPE,PAUSE_MACHINE_MESSAGE_TYPE=_require$GatewayMessa.PAUSE_MACHINE_MESSAGE_TYPE,RENAME_MACHINE_MESSAGE_TYPE=_require$GatewayMessa.RENAME_MACHINE_MESSAGE_TYPE,STREAMSHEET_STREAM_UPDATE_TYPE=_require$GatewayMessa.STREAMSHEET_STREAM_UPDATE_TYPE,UPDATE_MACHINE_IMAGE_MESSAGE_TYPE=_require$GatewayMessa.UPDATE_MACHINE_IMAGE_MESSAGE_TYPE,UPDATE_MACHINE_TITLE_IMAGE_MESSAGE_TYPE=_require$GatewayMessa.UPDATE_MACHINE_TITLE_IMAGE_MESSAGE_TYPE,SAVE_MACHINE_AS_MESSAGE_TYPE=_require$GatewayMessa.SAVE_MACHINE_AS_MESSAGE_TYPE,SET_MACHINE_CYCLE_TIME_MESSAGE_TYPE=_require$GatewayMessa.SET_MACHINE_CYCLE_TIME_MESSAGE_TYPE,SET_MACHINE_LOCALE_MESSAGE_TYPE=_require$GatewayMessa.SET_MACHINE_LOCALE_MESSAGE_TYPE,SET_MACHINE_UPDATE_INTERVAL_MESSAGE_TYPE=_require$GatewayMessa.SET_MACHINE_UPDATE_INTERVAL_MESSAGE_TYPE,CONFIRM_PROCESSED_MACHINE_STEP=_require$GatewayMessa.CONFIRM_PROCESSED_MACHINE_STEP,SET_NAMED_CELLS=_require$GatewayMessa.SET_NAMED_CELLS,SET_GRAPH_CELLS=_require$GatewayMessa.SET_GRAPH_CELLS,START_MACHINE_MESSAGE_TYPE=_require$GatewayMessa.START_MACHINE_MESSAGE_TYPE,START_MACHINES_MESSAGE_TYPE=_require$GatewayMessa.START_MACHINES_MESSAGE_TYPE,STEP_MACHINE_MESSAGE_TYPE=_require$GatewayMessa.STEP_MACHINE_MESSAGE_TYPE,STOP_MACHINE_MESSAGE_TYPE=_require$GatewayMessa.STOP_MACHINE_MESSAGE_TYPE,STOP_MACHINES_MESSAGE_TYPE=_require$GatewayMessa.STOP_MACHINES_MESSAGE_TYPE,SUBSCRIBE_MACHINE_MESSAGE_TYPE=_require$GatewayMessa.SUBSCRIBE_MACHINE_MESSAGE_TYPE,REDO_MESSAGE_TYPE=_require$GatewayMessa.REDO_MESSAGE_TYPE,UNDO_MESSAGE_TYPE=_require$GatewayMessa.UNDO_MESSAGE_TYPE,UNSUBSCRIBE_MACHINE_MESSAGE_TYPE=_require$GatewayMessa.UNSUBSCRIBE_MACHINE_MESSAGE_TYPE,COMMAND_MESSAGE_TYPE=_require$GatewayMessa.COMMAND_MESSAGE_TYPE,MACHINE_ACTION_MESSAGE_TYPE=_require$GatewayMessa.MACHINE_ACTION_MESSAGE_TYPE,USER_GET_MESSAGE_TYPE=_require$GatewayMessa.USER_GET_MESSAGE_TYPE,USER_SAVE_MESSAGE_TYPE=_require$GatewayMessa.USER_SAVE_MESSAGE_TYPE,USER_SETTINGS_GET_MESSAGE_TYPE=_require$GatewayMessa.USER_SETTINGS_GET_MESSAGE_TYPE,USER_SETTINGS_SAVE_MESSAGE_TYPE=_require$GatewayMessa.USER_SETTINGS_SAVE_MESSAGE_TYPE,USER_LOGIN_MESSAGE_TYPE=_require$GatewayMessa.USER_LOGIN_MESSAGE_TYPE,USER_LOGOUT_MESSAGE_TYPE=_require$GatewayMessa.USER_LOGOUT_MESSAGE_TYPE,AUTH_ENTITY_CREATE_MESSAGE_TYPE=_require$GatewayMessa.AUTH_ENTITY_CREATE_MESSAGE_TYPE,AUTH_ENTITY_GET_MESSAGE_TYPE=_require$GatewayMessa.AUTH_ENTITY_GET_MESSAGE_TYPE,AUTH_ENTITY_DELETE_MESSAGE_TYPE=_require$GatewayMessa.AUTH_ENTITY_DELETE_MESSAGE_TYPE,AUTH_ENTITY_UPDATE_MESSAGE_TYPE=_require$GatewayMessa.AUTH_ENTITY_UPDATE_MESSAGE_TYPE;const _require$StreamsMessa=__webpack_require__(0).StreamsMessagingProtocol.MESSAGE_TYPES,STREAM_CONFIG_SAVE=_require$StreamsMessa.STREAM_CONFIG_SAVE,STREAMS_CONFIG_LOAD_ALL=_require$StreamsMessa.STREAMS_CONFIG_LOAD_ALL,STREAM_CONFIG_DELETE=_require$StreamsMessa.STREAM_CONFIG_DELETE,STREAM_RELOAD=_require$StreamsMessa.STREAM_RELOAD,STREAM_COMMAND_MESSAGE_TYPE=_require$StreamsMessa.STREAM_COMMAND_MESSAGE_TYPE;const _require$Topics=__webpack_require__(0).Topics,SERVICES_STREAMS_INPUT=_require$Topics.SERVICES_STREAMS_INPUT,SERVICES_PERSISTENCE_INPUT=_require$Topics.SERVICES_PERSISTENCE_INPUT,SERVICES_AUTH_INPUT=_require$Topics.SERVICES_AUTH_INPUT;class StreamCommandSocketRequest extends WebSocketRequest{constructor(ws,scope,cmd){super(ws,STREAM_COMMAND_MESSAGE_TYPE);this._topic=SERVICES_STREAMS_INPUT;this._cmd=cmd;this._scope=scope;}_getConfig(){return{cmd:this._cmd,topic:this._topic,scope:this._scope};}}/**
 * ******************************************************************************************
 * DS Configurations requests
 * ******************************************************************************************
 */class DSConfigurationSaveSocketRequest extends WebSocketRequest{constructor(ws,scope,configuration){super(ws,STREAM_CONFIG_SAVE);this._topic=SERVICES_STREAMS_INPUT;this._configuration=configuration;this._scope=scope;}_getConfig(){return{configuration:this._configuration,topic:this._topic,scope:this._scope};}}class DSConfigurationLoadAllSocketRequest extends WebSocketRequest{constructor(ws,scope){super(ws,STREAMS_CONFIG_LOAD_ALL);this._topic=SERVICES_STREAMS_INPUT;this._scope=scope;}_getConfig(){return{topic:this._topic,scope:this._scope};}}class DSConfigurationDeleteSocketRequest extends WebSocketRequest{constructor(ws,scope,configId){super(ws,STREAM_CONFIG_DELETE);this._topic=SERVICES_STREAMS_INPUT;this._configId=configId;this._scope=scope;}_getConfig(){return{topic:this._topic,configId:this._configId,scope:this._scope};}}class DSReloadSocketRequest extends WebSocketRequest{constructor(ws,scope,sources){super(ws,STREAM_RELOAD);this._topic=SERVICES_STREAMS_INPUT;this._sources=sources;this._scope=scope;}_getConfig(){return{topic:this._topic,sources:this._sources,scope:this._scope};}}/**
 * ******************************************************************************************
 * User requests
 * ******************************************************************************************
 */class UserLoginSocketRequest extends WebSocketRequest{constructor(ws,credentials){super(ws,USER_LOGIN_MESSAGE_TYPE);this._topic=SERVICES_AUTH_INPUT;this._credentials=credentials;}_getConfig(){return{topic:this._topic,credentials:this._credentials};}}class UserLogoutSocketRequest extends WebSocketRequest{constructor(ws,id){super(ws,USER_LOGOUT_MESSAGE_TYPE);this._topic=SERVICES_AUTH_INPUT;this._id=id;}_getConfig(){return{topic:this._topic,id:this._id};}}class AuthEntityGetSocketRequest extends WebSocketRequest{constructor(ws,entity){super(ws,AUTH_ENTITY_GET_MESSAGE_TYPE);this._topic=SERVICES_AUTH_INPUT;this._entity=entity;}_getConfig(){return{topic:this._topic,entity:this._entity};}}class AuthEntityCreateSocketRequest extends WebSocketRequest{constructor(ws,entity){super(ws,AUTH_ENTITY_CREATE_MESSAGE_TYPE);this._topic=SERVICES_AUTH_INPUT;this._entity=entity;}_getConfig(){return{topic:this._topic,entity:this._entity};}}class AuthEntityDeleteSocketRequest extends WebSocketRequest{constructor(ws,entity){super(ws,AUTH_ENTITY_DELETE_MESSAGE_TYPE);this._topic=SERVICES_AUTH_INPUT;this._entity=entity;}_getConfig(){return{topic:this._topic,entity:this._entity};}}class AuthEntityUpdateSocketRequest extends WebSocketRequest{constructor(ws,entity){super(ws,AUTH_ENTITY_UPDATE_MESSAGE_TYPE);this._entity=entity;this._topic=SERVICES_AUTH_INPUT;}_getConfig(){return{topic:this._topic,entity:this._entity};}}class UserSettingGetSocketRequest extends WebSocketRequest{constructor(ws,userId){super(ws,USER_SETTINGS_GET_MESSAGE_TYPE);this._topic=SERVICES_AUTH_INPUT;this._userId=userId;}_getConfig(){return{topic:this._topic,userId:this._userId};}}class UserSettingsSaveSocketRequest extends WebSocketRequest{constructor(ws,userId,settings){super(ws,USER_SETTINGS_SAVE_MESSAGE_TYPE);this._topic=SERVICES_AUTH_INPUT;this._userId=userId;this._settings=settings;}_getConfig(){return{topic:this._topic,userId:this._userId,settings:this._settings};}}class UserGetSocketRequest extends WebSocketRequest{constructor(ws,userId){super(ws,USER_GET_MESSAGE_TYPE);this._userId=userId;}_getConfig(){return{userId:this._userId};}}class UserSaveSocketRequest extends WebSocketRequest{constructor(ws,user){super(ws,USER_SAVE_MESSAGE_TYPE);this._user=user;}_getConfig(){return{user:this._user};}}/**
 * ******************************************************************************************
 * Graph requests
 * ******************************************************************************************
 */class LoadGraphWebSocketRequest extends WebSocketRequest{constructor(ws,graphId){super(ws,LOAD_GRAPH_MESSAGE_TYPE);this._graphId=graphId;}_getConfig(){return{graphId:this._graphId};}}class SubscribeGraphWebSocketRequest extends WebSocketRequest{constructor(ws,graphId){super(ws,SUBSCRIBE_GRAPH_MESSAGE_TYPE);this._graphId=graphId;}_getConfig(){return{graphId:this._graphId};}}class UnsubscribeGraphWebSocketRequest extends WebSocketRequest{constructor(ws,graphId){super(ws,UNSUBSCRIBE_GRAPH_MESSAGE_TYPE);this._graphId=graphId;}_getConfig(){return{graphId:this._graphId};}}/**
 * ******************************************************************************************
 * Machine requests
 * ******************************************************************************************
 */class CreateStreamSheetWebSocketRequest extends WebSocketRequest{constructor(ws,machineId,activeItemId,position,sheetType,scope){super(ws,CREATE_STREAMSHEET_MESSAGE_TYPE);this._machineId=machineId;this._activeItemId=activeItemId;this._position=position;this._sheetType=sheetType;this._scope=scope;}_getConfig(){return{machineId:this._machineId,activeItemId:this._activeItemId,position:this._position,sheetType:this._sheetType,scope:this._scope};}}class DeleteMachineWebSocketRequest extends WebSocketRequest{constructor(ws,machineId,scope){super(ws,DELETE_MACHINE_MESSAGE_TYPE);this._machineId=machineId;this._scope=scope;}_getConfig(){return{machineId:this._machineId,scope:this._scope};}}class UnloadMachineWebSocketRequest extends WebSocketRequest{constructor(ws,machineId){super(ws,UNLOAD_MACHINE_MESSAGE_TYPE);this._machineId=machineId;}_getConfig(){return{machineId:this._machineId};}}class DeleteStreamSheetWebSocketRequest extends WebSocketRequest{constructor(ws,machineId,streamsheetId,scope){super(ws,DELETE_STREAMSHEET_MESSAGE_TYPE);this._machineId=machineId;this._streamsheetId=streamsheetId;this._scope=scope;}_getConfig(){return{machineId:this._machineId,streamsheetId:this._streamsheetId,scope:this._scope};}}class GetMachineWebSocketRequest extends WebSocketRequest{constructor(ws,machineId){super(ws,GET_MACHINE_MESSAGE_TYPE);this._machineId=machineId;}_getConfig(){return{machineId:this._machineId};}}class GetMachinesWebSocketRequest extends WebSocketRequest{constructor(ws){super(ws,GET_MACHINES_MESSAGE_TYPE);}_getConfig(){return{};}}class LoadMachineWebSocketRequest extends WebSocketRequest{constructor(ws,machineId,settings,scope){super(ws,LOAD_MACHINE_MESSAGE_TYPE);this._machineId=machineId;this._settings=settings;this._scope=scope;}_getConfig(){return{machineId:this._machineId,settings:this._settings,scope:this._scope};}}class LoadSubscribeMachineWebSocketRequest extends WebSocketRequest{constructor(ws,machineId,settings,scope){super(ws,LOAD_SUBSCRIBE_MACHINE_MESSAGE_TYPE);this._machineId=machineId;this._settings=settings;this._scope=scope;}_getConfig(){return{machineId:this._machineId,settings:this._settings,scope:this._scope};}}class OpenMachineWebSocketRequest extends WebSocketRequest{constructor(ws,machineId){super(ws,OPEN_MACHINE_MESSAGE_TYPE);this._machineId=machineId;}_getConfig(){return{machineId:this._machineId};}}class PauseMachineWebSocketRequest extends WebSocketRequest{constructor(ws,machineId){super(ws,PAUSE_MACHINE_MESSAGE_TYPE);this._machineId=machineId;}_getConfig(){return{machineId:this._machineId};}}class UpdateMachineImageWebSocketRequest extends WebSocketRequest{constructor(ws,machineId,previewImage){super(ws,UPDATE_MACHINE_IMAGE_MESSAGE_TYPE);this._topic=SERVICES_PERSISTENCE_INPUT;this._machineId=machineId;this._previewImage=previewImage;}_getConfig(){return{topic:this._topic,machineId:this._machineId,previewImage:this._previewImage};}}class UpdateMachineTitleImageWebSocketRequest extends WebSocketRequest{constructor(ws,machineId,titleImage){super(ws,UPDATE_MACHINE_TITLE_IMAGE_MESSAGE_TYPE);this._topic=SERVICES_PERSISTENCE_INPUT;this._machineId=machineId;this._titleImage=titleImage;}_getConfig(){return{topic:this._topic,machineId:this._machineId,titleImage:this._titleImage};}}class UpdateStreamSheetStreamsWebSocketRequest extends WebSocketRequest{constructor(ws,machineId,streamsheetId,streams){super(ws,STREAMSHEET_STREAM_UPDATE_TYPE);this._machineId=machineId;this._streamsheetId=streamsheetId;this._streams=streams;}_getConfig(){return{machineId:this._machineId,streamsheetId:this._streamsheetId,streams:this._streams};}}class RenameMachineWebSocketRequest extends WebSocketRequest{constructor(ws,machineId,newName){super(ws,RENAME_MACHINE_MESSAGE_TYPE);this._machineId=machineId;this._newName=newName;}_getConfig(){return{machineId:this._machineId,newName:this._newName};}}class SetNamedCellsWebSocketRequest extends WebSocketRequest{constructor(ws,machineId,streamsheetId,namedCells){super(ws,SET_NAMED_CELLS);this._machineId=machineId;this._streamsheetId=streamsheetId;this._namedCells=namedCells;}_getConfig(){return{machineId:this._machineId,streamsheetId:this._streamsheetId,namedCells:this._namedCells};}}class AddInboxMessageWebSocketRequest extends WebSocketRequest{constructor(ws,machineId,streamsheetId,message,metadata){super(ws,ADD_INBOX_MESSAGE);this._machineId=machineId;this._streamsheetId=streamsheetId;this._message=message;this._metadata=metadata;}_getConfig(){return{machineId:this._machineId,streamsheetId:this._streamsheetId,message:this._message,metadata:this._metadata};}}class SaveMachineAsWebSocketRequest extends WebSocketRequest{constructor(ws,originalMachineId,newName){super(ws,SAVE_MACHINE_AS_MESSAGE_TYPE);this._originalMachineId=originalMachineId;this._newName=newName;}_getConfig(){return{originalMachineId:this._originalMachineId,newName:this._newName};}}class ConfirmProcessedMachineStepRequest extends WebSocketRequest{constructor(ws,machineId){super(ws,CONFIRM_PROCESSED_MACHINE_STEP);this._machineId=machineId;}_getConfig(){return{machineId:this._machineId};}}class StartMachineWebSocketRequest extends WebSocketRequest{constructor(ws,machineId){super(ws,START_MACHINE_MESSAGE_TYPE);this._machineId=machineId;}_getConfig(){return{machineId:this._machineId};}}class StartMachinesWebSocketRequest extends WebSocketRequest{constructor(ws){super(ws,START_MACHINES_MESSAGE_TYPE);}_getConfig(){return{};}}class SetCycleTimeWebSocketRequest extends WebSocketRequest{constructor(ws,machineId,cycleTime){super(ws,SET_MACHINE_CYCLE_TIME_MESSAGE_TYPE);this._machineId=machineId;this._cycleTime=cycleTime;}_getConfig(){return{machineId:this._machineId,cycleTime:this._cycleTime};}}class SetMachineLocaleWebSocketRequest extends WebSocketRequest{constructor(ws,machineId,locale){super(ws,SET_MACHINE_LOCALE_MESSAGE_TYPE);this._machineId=machineId;this._locale=locale;}_getConfig(){return{machineId:this._machineId,locale:this._locale};}}class SetStreamSheetStepIntervalWebSocketRequest extends WebSocketRequest{constructor(ws,machineId,streamsheetStepInterval){super(ws,SET_MACHINE_UPDATE_INTERVAL_MESSAGE_TYPE);this._machineId=machineId;this._streamsheetStepInterval=streamsheetStepInterval;}_getConfig(){return{machineId:this._machineId,streamsheetStepInterval:this._streamsheetStepInterval};}}class StepMachineWebSocketRequest extends WebSocketRequest{constructor(ws,machineId){super(ws,STEP_MACHINE_MESSAGE_TYPE);this._machineId=machineId;}_getConfig(){return{machineId:this._machineId};}}class StopMachineWebSocketRequest extends WebSocketRequest{constructor(ws,machineId){super(ws,STOP_MACHINE_MESSAGE_TYPE);this._machineId=machineId;}_getConfig(){return{machineId:this._machineId};}}class StopMachinesWebSocketRequest extends WebSocketRequest{constructor(ws){super(ws,STOP_MACHINES_MESSAGE_TYPE);}_getConfig(){return{};}}class SubscribeMachineWebSocketRequest extends WebSocketRequest{constructor(ws,machineId){super(ws,SUBSCRIBE_MACHINE_MESSAGE_TYPE);this._machineId=machineId;}_getConfig(){return{machineId:this._machineId};}}class RedoWebSocketRequest extends WebSocketRequest{constructor(ws,machineId){super(ws,REDO_MESSAGE_TYPE);this._machineId=machineId;}_getConfig(){return{machineId:this._machineId};}}class UndoWebSocketRequest extends WebSocketRequest{constructor(ws,machineId){super(ws,UNDO_MESSAGE_TYPE);this._machineId=machineId;}_getConfig(){return{machineId:this._machineId};}}class UnsubscribeMachineWebSocketRequest extends WebSocketRequest{constructor(ws,machineId){super(ws,UNSUBSCRIBE_MACHINE_MESSAGE_TYPE);this._machineId=machineId;}_getConfig(){return{machineId:this._machineId};}}class UpdateMachineSettingsWebSocketRequest extends WebSocketRequest{constructor(ws,machineId,settings){super(ws,MACHINE_UPDATE_SETTINGS_MESSAGE_TYPE);this._machineId=machineId;this._settings=settings;}_getConfig(){return{machineId:this._machineId,settings:this._settings};}}class GetCellRawValueWebSocketRequest extends WebSocketRequest{constructor(ws,machineId,streamsheetId,reference){super(ws,GET_CELL_RAW_VALUE);this._machineId=machineId;this._streamsheetId=streamsheetId;this._reference=reference;}_getConfig(){return{machineId:this._machineId,streamsheetId:this._streamsheetId,reference:this._reference};}}/**
 * ******************************************************************************************
 * General requests
 * ******************************************************************************************
 */class CommandWebSocketRequest extends WebSocketRequest{constructor(ws,machineId,graphId,command,undo=false,redo=false){super(ws,COMMAND_MESSAGE_TYPE);this._machineId=machineId;this._graphId=graphId;this._command=command;this._undo=undo;this._redo=redo;}_getConfig(){return{machineId:this._machineId,graphId:this._graphId,command:this._command,undo:this._undo,redo:this._redo};}}class MachineActionWebSocketRequest extends WebSocketRequest{constructor(ws,machineId,action){super(ws,MACHINE_ACTION_MESSAGE_TYPE);this._machineId=machineId;this._action=action;}_getConfig(){return{machineId:this._machineId,action:this._action};}}module.exports={// Graph requests
LoadGraphWebSocketRequest,SubscribeGraphWebSocketRequest,UnsubscribeGraphWebSocketRequest,// Machine requests
AddInboxMessageWebSocketRequest,CreateStreamSheetWebSocketRequest,DeleteMachineWebSocketRequest,DeleteStreamSheetWebSocketRequest,GetMachineWebSocketRequest,GetMachinesWebSocketRequest,LoadMachineWebSocketRequest,LoadSubscribeMachineWebSocketRequest,OpenMachineWebSocketRequest,PauseMachineWebSocketRequest,RenameMachineWebSocketRequest,UpdateMachineImageWebSocketRequest,UpdateMachineTitleImageWebSocketRequest,UpdateMachineSettingsWebSocketRequest,UpdateStreamSheetStreamsWebSocketRequest,SaveMachineAsWebSocketRequest,SetCycleTimeWebSocketRequest,SetMachineLocaleWebSocketRequest,SetStreamSheetStepIntervalWebSocketRequest,ConfirmProcessedMachineStepRequest,SetNamedCellsWebSocketRequest,StartMachineWebSocketRequest,StartMachinesWebSocketRequest,StepMachineWebSocketRequest,StopMachineWebSocketRequest,StopMachinesWebSocketRequest,SubscribeMachineWebSocketRequest,RedoWebSocketRequest,UndoWebSocketRequest,UnloadMachineWebSocketRequest,UnsubscribeMachineWebSocketRequest,GetCellRawValueWebSocketRequest,// General requests
CommandWebSocketRequest,MachineActionWebSocketRequest,UserGetSocketRequest,UserSaveSocketRequest,UserSettingGetSocketRequest,UserSettingsSaveSocketRequest,DSConfigurationSaveSocketRequest,DSConfigurationLoadAllSocketRequest,DSConfigurationDeleteSocketRequest,DSReloadSocketRequest,UserLoginSocketRequest,UserLogoutSocketRequest,AuthEntityCreateSocketRequest,AuthEntityDeleteSocketRequest,AuthEntityUpdateSocketRequest,AuthEntityGetSocketRequest,StreamCommandSocketRequest};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(16);
var bytesToUuid = __webpack_require__(17);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/********************************************************************************
 * Copyright (c) 2020 Cedalo AG
 *
 * This program and the accompanying materials are made available under the 
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 ********************************************************************************/const MachineServerEvents=__webpack_require__(2).EVENTS;const MachineServerMessageTypes=__webpack_require__(2).MESSAGE_TYPES;/**
 * ******************************************************************************************
 * Machine request types
 * ******************************************************************************************
 */const ADD_INBOX_MESSAGE='add_inbox_message';const CREATE_STREAMSHEET_MESSAGE_TYPE='streamsheet_create';const GET_MACHINE_MESSAGE_TYPE='machine_get';const GET_MACHINES_MESSAGE_TYPE='machineserver_machines';const DELETE_MACHINE_MESSAGE_TYPE='machine_delete';const DELETE_STREAMSHEET_MESSAGE_TYPE='streamsheet_delete';const LOAD_MACHINE_MESSAGE_TYPE='machine_load';const UNLOAD_MACHINE_MESSAGE_TYPE='machine_unload';const META_INFORMATION_MESSAGE_TYPE='meta_information';const RENAME_MACHINE_MESSAGE_TYPE='machine_rename';const PAUSE_MACHINE_MESSAGE_TYPE='machine_pause';const PING_MACHINESOCKETSERVER_MESSAGE_TYPE='ping_machinesocketserver';const SAVE_MACHINE_AS_MESSAGE_TYPE='machine_save_as';const SAVE_MACHINE_COPY_MESSAGE_TYPE='machine_save_copy';const SET_MACHINE_CYCLE_TIME_MESSAGE_TYPE='machine_set_cycle_time';const SET_MACHINE_LOCALE_MESSAGE_TYPE=MachineServerMessageTypes.SET_MACHINE_LOCALE_MESSAGE_TYPE;const SET_MACHINE_UPDATE_INTERVAL_MESSAGE_TYPE='machine_set_update_interval';const SET_NAMED_CELLS='set_named_cells';const SET_GRAPH_CELLS='set_graph_cells';const SET_SHEET_CELLS='set_sheet_cells';const START_CONTROL_MODE_MESSAGE_TYPE='machine_start_control_mode';const CONFIRM_PROCESSED_MACHINE_STEP='confirm_processed_machine_step';const START_MACHINE_MESSAGE_TYPE='machine_start';const START_MACHINES_MESSAGE_TYPE='machines_start';const STEP_MACHINE_MESSAGE_TYPE='machine_step';const STOP_CONTROL_MODE_MESSAGE_TYPE='machine_stop_control_mode';const STOP_MACHINE_MESSAGE_TYPE='machine_stop';const STOP_MACHINES_MESSAGE_TYPE='machines_stop';const SUBSCRIBE_GRAPH_MESSAGE_TYPE='graph_subscribe';const SUBSCRIBE_MACHINE_MESSAGE_TYPE='machine_subscribe';const REDO_MESSAGE_TYPE='redo';const UNDO_MESSAGE_TYPE='undo';const UPDATE_MACHINE_IMAGE_MESSAGE_TYPE='update_machine_image';const UPDATE_MACHINE_TITLE_IMAGE_MESSAGE_TYPE='update_machine_title_image';const UPDATE_PROCESS_SHEET_MESSAGE_TYPE='update_process_sheets';const UNSUBSCRIBE_GRAPH_MESSAGE_TYPE='graph_unsubscribe';const UNSUBSCRIBE_MACHINE_MESSAGE_TYPE='machine_unsubscribe';const LOAD_SUBSCRIBE_MACHINE_MESSAGE_TYPE='machine_load_subscribe';const LOAD_SUBSCRIBE_GRAPH_MESSAGE_TYPE='graph_load_subscribe';/**
 * ******************************************************************************************
 * Graph request types
 * ******************************************************************************************
 */const PING_GRAPHSOCKETSERVER_MESSAGE_TYPE='ping_graphsocketserver';/**
 * ******************************************************************************************
 * General request types
 * ******************************************************************************************
 */const COMMAND_MESSAGE_TYPE='command';const SELECTION_MESSAGE_TYPE='selection';/**
 * ******************************************************************************************
 * Events
 * ******************************************************************************************
 */const COMMAND_EVENT='command';const GATEWAY_DISCONNECTED_EVENT='gateway_disconnected';const GRAPH_SERVER_CONNECTED_EVENT='graphserver_connected';const GRAPH_SERVER_DISCONNECTED_EVENT='graphserver_disconnected';const SESSION_INIT_EVENT='session_init';const LICENSE_INFO_EVENT='license_information';const MACHINE_CYCLETIME_EVENT='machine_cycletime';const MACHINE_RENAME_EVENT='machine_rename';const MACHINE_VIEW_SETTINGS_EVENT='machine_view_settings';const MACHINE_FUNCTIONS_EVENT='machine_functions';const MACHINE_SERVER_CONNECTED_EVENT='machineserver_connected';const MACHINE_SERVER_DISCONNECTED_EVENT='machineserver_disconnected';const MACHINE_STATE_EVENT='machine_state';const MACHINE_STEP_EVENT='machine_step';const MESSAGE_ADD_EVENT='message_add';const RESPOND_EVENT='respond';const SHEET_STEP_EVENT='sheet_step';const SHEET_UPDATE_EVENT='sheet_update';const SELECTION_EVENT='selection';const MESSAGE_BOX_CLEAR='message_box_clear';const MESSAGE_PUT='message_put';const MESSAGE_POP='message_pop';const MESSAGE_CHANGED='message_changed';const SERVICE_EVENT='service';const SERVICE_CONNECTED_EVENT='service_connected';const SERVICE_DISCONNECTED_EVENT='service_disconnected';const STREAMSHEET_MESSAGE_ATTACHED='streamsheet_message_attached';const STREAMSHEET_MESSAGE_DETACHED='streamsheet_message_detached';const STREAMSHEET_STEP_EVENT='streamsheet_step';const STREAMSHEET_STREAM_UPDATE_TYPE='streamsheet_stream_update';const STREAMSHEET_STREAM_UPDATED='streamsheet_stream_updated';const USER_JOINED_EVENT='user_joined';const USER_LEFT_EVENT='user_left';const STREAMS_RELOAD_EVENT='stream_reload';const USER_GET_MESSAGE_TYPE='user_get';const AUTH_DATA_MESSAGE_TYPE='auth_data';const USER_SAVE_MESSAGE_TYPE='user_save';const USER_SETTINGS_GET_MESSAGE_TYPE='user_settings_get';const USER_LOGIN_MESSAGE_TYPE='user_login';const USER_LOGOUT_MESSAGE_TYPE='user_logout';const USER_SETTINGS_SAVE_MESSAGE_TYPE='user__settings_save';const AUTH_ENTITY_GET_MESSAGE_TYPE='auth_entity_get';const AUTH_ENTITY_CREATE_MESSAGE_TYPE='auth_entity_create';const AUTH_ENTITY_DELETE_MESSAGE_TYPE='auth_entity_delete';const AUTH_ENTITY_UPDATE_MESSAGE_TYPE='auth_entity_update';const STREAM_CONTROL_EVENT='stream_control_event';const REDIRECT='redirect';module.exports={MESSAGE_TYPES:{// Machine request types
ADD_INBOX_MESSAGE,AUTH_DATA_MESSAGE_TYPE,CREATE_STREAMSHEET_MESSAGE_TYPE,DELETE_MACHINE_MESSAGE_TYPE,DELETE_STREAMSHEET_MESSAGE_TYPE,GET_MACHINE_MESSAGE_TYPE,GET_MACHINES_MESSAGE_TYPE,GET_CELL_RAW_VALUE:MachineServerMessageTypes.GET_CELL_RAW_VALUE,LOAD_MACHINE_MESSAGE_TYPE,UNLOAD_MACHINE_MESSAGE_TYPE,LOAD_SUBSCRIBE_MACHINE_MESSAGE_TYPE,MACHINE_UPDATE_SETTINGS_MESSAGE_TYPE:MachineServerMessageTypes.MACHINE_UPDATE_SETTINGS,META_INFORMATION_MESSAGE_TYPE,OPEN_MACHINE_MESSAGE_TYPE:MachineServerMessageTypes.OPEN_MACHINE_MESSAGE_TYPE,PAUSE_MACHINE_MESSAGE_TYPE,RENAME_MACHINE_MESSAGE_TYPE,STREAMSHEET_STREAM_UPDATE_TYPE,PING_MACHINESOCKETSERVER_MESSAGE_TYPE,SAVE_MACHINE_AS_MESSAGE_TYPE,SAVE_MACHINE_COPY_MESSAGE_TYPE,SET_MACHINE_CYCLE_TIME_MESSAGE_TYPE,SET_MACHINE_LOCALE_MESSAGE_TYPE,SET_MACHINE_UPDATE_INTERVAL_MESSAGE_TYPE,SET_NAMED_CELLS,SET_GRAPH_CELLS,SET_SHEET_CELLS,SET_SHEET_CELLS_MESSAGE_TYPE:MachineServerMessageTypes.SET_SHEET_CELLS,START_CONTROL_MODE_MESSAGE_TYPE,CONFIRM_PROCESSED_MACHINE_STEP,START_MACHINE_MESSAGE_TYPE,START_MACHINES_MESSAGE_TYPE,STEP_MACHINE_MESSAGE_TYPE,STOP_CONTROL_MODE_MESSAGE_TYPE,STOP_MACHINE_MESSAGE_TYPE,STOP_MACHINES_MESSAGE_TYPE,SUBSCRIBE_GRAPH_MESSAGE_TYPE,LOAD_SUBSCRIBE_GRAPH_MESSAGE_TYPE,SUBSCRIBE_MACHINE_MESSAGE_TYPE,REDO_MESSAGE_TYPE,UNDO_MESSAGE_TYPE,UNSUBSCRIBE_GRAPH_MESSAGE_TYPE,UNSUBSCRIBE_MACHINE_MESSAGE_TYPE,UPDATE_MACHINE_IMAGE_MESSAGE_TYPE,UPDATE_MACHINE_TITLE_IMAGE_MESSAGE_TYPE,UPDATE_PROCESS_SHEET_MESSAGE_TYPE,// Graph request types
PING_GRAPHSOCKETSERVER_MESSAGE_TYPE,// General request types
COMMAND_MESSAGE_TYPE,MACHINE_ACTION_MESSAGE_TYPE:MachineServerMessageTypes.MACHINE_ACTION_MESSAGE_TYPE,SELECTION_MESSAGE_TYPE,USER_GET_MESSAGE_TYPE,USER_SAVE_MESSAGE_TYPE,USER_SETTINGS_GET_MESSAGE_TYPE,USER_SETTINGS_SAVE_MESSAGE_TYPE,USER_LOGIN_MESSAGE_TYPE,USER_LOGOUT_MESSAGE_TYPE,AUTH_ENTITY_CREATE_MESSAGE_TYPE,AUTH_ENTITY_DELETE_MESSAGE_TYPE,AUTH_ENTITY_UPDATE_MESSAGE_TYPE,AUTH_ENTITY_GET_MESSAGE_TYPE},EVENTS:{// Events
COMMAND_EVENT,SESSION_INIT_EVENT,GATEWAY_DISCONNECTED_EVENT,GRAPH_SERVER_CONNECTED_EVENT,GRAPH_SERVER_DISCONNECTED_EVENT,LICENSE_INFO_EVENT,MACHINE_LOCALE_EVENT:MachineServerEvents.MACHINE_LOCALE_EVENT,MACHINE_RENAME_EVENT,MACHINE_VIEW_SETTINGS_EVENT,MACHINE_FUNCTIONS_EVENT,MACHINE_SERVER_CONNECTED_EVENT,STREAMSHEET_STREAM_UPDATED,MACHINE_CYCLETIME_EVENT,MACHINE_CYCLEREGULATED_EVENT:MachineServerEvents.MACHINE_CYCLEREGULATED_EVENT,MACHINE_SERVER_DISCONNECTED_EVENT,MACHINE_STATE_EVENT,MACHINE_STEP_EVENT,MESSAGE_ADD_EVENT,RESPOND_EVENT,SHEET_STEP_EVENT,SHEET_UPDATE_EVENT,SELECTION_EVENT,SERVICE_EVENT,MESSAGE_BOX_CLEAR,MESSAGE_PUT,MESSAGE_POP,MESSAGE_CHANGED,SERVICE_CONNECTED_EVENT,SERVICE_DISCONNECTED_EVENT,STREAMSHEET_MESSAGE_ATTACHED,STREAMSHEET_MESSAGE_DETACHED,STREAMSHEET_STEP_EVENT,USER_JOINED_EVENT,USER_LEFT_EVENT,STREAMS_RELOAD_EVENT,STREAM_CONTROL_EVENT,REDIRECT}};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/********************************************************************************
 * Copyright (c) 2020 Cedalo AG
 *
 * This program and the accompanying materials are made available under the 
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 ********************************************************************************//**
 * ******************************************************************************************
 * Graph request types
 * ******************************************************************************************
 */const ADD_MESSAGE_MESSAGE_TYPE='message_add';const COMMAND_MESSAGE_TYPE='command';const CREATE_GRAPH_MESSAGE_TYPE='graph_create';const CREATE_STREAMSHEET_MESSAGE_TYPE='streamsheet_create';const DELETE_GRAPH_MESSAGE_TYPE='graph_delete';const DELETE_STREAMSHEET_MESSAGE_TYPE='streamsheet_delete';const GET_GRAPH_MESSAGE_TYPE='graph_get';const LOAD_GRAPH_MESSAGE_TYPE='graph_load';const LOAD_SUBSCRIBE_GRAPH_MESSAGE_TYPE='graph_load_subscribe';const META_INFORMATION_MESSAGE_TYPE='meta_information';const PING_GRAPHSOCKETSERVER_MESSAGE_TYPE='ping_graphsocketserver';const SELECTION_MESSAGE_TYPE='selection';const SUBSCRIBE_GRAPH_MESSAGE_TYPE='graph_subscribe';const REDO_MESSAGE_TYPE='redo';const UNDO_MESSAGE_TYPE='undo';const UNSUBSCRIBE_GRAPH_MESSAGE_TYPE='graph_unsubscribe';const UPDATE_PROCESS_SHEET_MESSAGE_TYPE='update_process_sheets';/**
 * ******************************************************************************************
 * Process sheet specific request types
 * ******************************************************************************************
 */const MESSAGE_PUT='message_put';const MESSAGE_POP='message_pop';const STREAMSHEET_STEP='streamsheet_step';/**
 * ******************************************************************************************
 * Events
 * ******************************************************************************************
 */const COMMAND_EVENT='command';const SELECTION_EVENT='selection';module.exports={MESSAGE_TYPES:{ADD_MESSAGE_MESSAGE_TYPE,COMMAND_MESSAGE_TYPE,CREATE_GRAPH_MESSAGE_TYPE,CREATE_STREAMSHEET_MESSAGE_TYPE,DELETE_GRAPH_MESSAGE_TYPE,DELETE_STREAMSHEET_MESSAGE_TYPE,GET_GRAPH_MESSAGE_TYPE,LOAD_GRAPH_MESSAGE_TYPE,LOAD_SUBSCRIBE_GRAPH_MESSAGE_TYPE,META_INFORMATION_MESSAGE_TYPE,PING_GRAPHSOCKETSERVER_MESSAGE_TYPE,MESSAGE_PUT,MESSAGE_POP,SELECTION_MESSAGE_TYPE,SUBSCRIBE_GRAPH_MESSAGE_TYPE,STREAMSHEET_STEP,REDO_MESSAGE_TYPE,UNDO_MESSAGE_TYPE,UNSUBSCRIBE_GRAPH_MESSAGE_TYPE,UPDATE_PROCESS_SHEET_MESSAGE_TYPE},EVENTS:{COMMAND_EVENT,SELECTION_EVENT}};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/********************************************************************************
 * Copyright (c) 2020 Cedalo AG
 *
 * This program and the accompanying materials are made available under the 
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 ********************************************************************************//**
 * ******************************************************************************************
 * Streams request types
 * ******************************************************************************************
 */const STREAM_CONFIG_SAVE='stream_config_save';const STREAM_CONFIG_DELETE='stream_config_delete';const STREAM_CONFIG_LOAD='stream_config_load';const STREAM_CONFIG_LOAD_BY_NAME='stream_config_load_by_name';const STREAMS_CONFIG_LOAD_ALL='stream_config_load_all';const STREAM_CONFIG_VALIDATE='stream_config_validate';const STREAM_GET_PROVIDERS='stream_get_providers';const STREAM_UPDATE='stream_update';const STREAM_LIST='stream_list';const STREAM_RELOAD='stream_reload';const STREAM_RELOAD_ALL='stream_reload_all';const STREAM_COMMAND_MESSAGE_TYPE='stream_command';const STREAM_LOOKUP_REQUEST='stream_lookup_request';const META_INFORMATION_MESSAGE_TYPE='meta_information';/**
 * ******************************************************************************************
 * Events
 * ******************************************************************************************
 */const STREAM_ERROR='stream_error';const STREAM_UPDATED='stream_updated';const STREAM_LOG='stream_log';const STREAM_RELOADED='stream_reloaded';const STREAM_RELOADED_ALL='stream_reloaded_all';const STREAM_LOOKUP_RESPONSE='stream_lookup_response';module.exports={MESSAGE_TYPES:{STREAM_CONFIG_SAVE,STREAM_CONFIG_DELETE,STREAM_CONFIG_LOAD,STREAM_GET_PROVIDERS,STREAM_CONFIG_LOAD_BY_NAME,STREAMS_CONFIG_LOAD_ALL,STREAM_CONFIG_VALIDATE,STREAM_UPDATE,STREAM_LIST,STREAM_RELOAD,STREAM_RELOAD_ALL,STREAM_LOOKUP_REQUEST,META_INFORMATION_MESSAGE_TYPE,STREAM_COMMAND_MESSAGE_TYPE},EVENTS:{STREAM_UPDATED,STREAM_RELOADED,STREAM_RELOADED_ALL,STREAM_ERROR,STREAM_LOOKUP_RESPONSE,STREAM_LOG}};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/********************************************************************************
 * Copyright (c) 2020 Cedalo AG
 *
 * This program and the accompanying materials are made available under the 
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 ********************************************************************************//**
 * ******************************************************************************************
 * Topics
 * ******************************************************************************************
 */const BASE_TOPIC='api/v1.1/digitalmachine';// Topics for the migrated system
const ERRORS_GLOBAL=`${BASE_TOPIC}/errors`;const LICENSE_INFO=`${BASE_TOPIC}/license/info`;const SERVICES_STATUS=`${BASE_TOPIC}/services/status`;const SERVICES_STREAMS_INPUT=`${BASE_TOPIC}/services/streams/input`;const SERVICES_STREAMS_EVENTS=`${BASE_TOPIC}/services/streams/events`;const SERVICES_GRAPHS_INPUT=`${BASE_TOPIC}/services/graphs/input`;const SERVICES_GRAPHS_OUTPUT=`${BASE_TOPIC}/services/graphs/output`;const SERVICES_GRAPHS_EVENTS=`${BASE_TOPIC}/services/graphs/events`;const SERVICES_OPCUA_EVENTS=`${BASE_TOPIC}/services/opcua/events`;const SERVICES_MACHINES_INPUT=`${BASE_TOPIC}/services/machines/input`;const SERVICES_MACHINES_OUTPUT=`${BASE_TOPIC}/services/machines/output`;const SERVICES_MACHINES_EVENTS=`${BASE_TOPIC}/services/machines/events`;const SERVICES_MACHINES_MONITORING=`${BASE_TOPIC}/services/machines/monitoring`;const SERVICES_MESSAGEBUFFER_INPUT=`${BASE_TOPIC}/services/messagebuffer/input`;const SERVICES_MESSAGEBUFFER_OUTPUT=`${BASE_TOPIC}/services/messagebuffer/output`;const SERVICES_MESSAGEBUFFER_EVENTS=`${BASE_TOPIC}/services/messagebuffer/events`;const SERVICES_PERSISTENCE_EVENTS=`${BASE_TOPIC}/services/persistence/events`;const SERVICES_PERSISTENCE_INPUT=`${BASE_TOPIC}/services/persistence/input`;const SERVICES_AUTH_EVENTS=`${BASE_TOPIC}/services/auth/events`;const SERVICES_AUTH_INPUT=`${BASE_TOPIC}/services/auth/input`;const SERVICES_AUTH_DATA=`${BASE_TOPIC}/services/auth/data`;const CONFIG_JWT=`${BASE_TOPIC}/config/jwt`;// Unused topics
const SERVICES_GATEWAY_EVENTS=`${BASE_TOPIC}/services/gateway/events`;const SERVICES_MIGRATION_OUTPUT=`${BASE_TOPIC}/services/migration/output`;module.exports={BASE_TOPIC,ERRORS_GLOBAL,LICENSE_INFO,SERVICES_STATUS,SERVICES_AUTH_INPUT,SERVICES_AUTH_EVENTS,SERVICES_AUTH_DATA,CONFIG_JWT,SERVICES_STREAMS_INPUT,SERVICES_STREAMS_EVENTS,SERVICES_GATEWAY_EVENTS,SERVICES_GRAPHS_EVENTS,SERVICES_GRAPHS_INPUT,SERVICES_GRAPHS_OUTPUT,SERVICES_MACHINES_EVENTS,SERVICES_MACHINES_MONITORING,SERVICES_MACHINES_INPUT,SERVICES_MACHINES_OUTPUT,SERVICES_MESSAGEBUFFER_EVENTS,SERVICES_MESSAGEBUFFER_INPUT,SERVICES_MESSAGEBUFFER_OUTPUT,SERVICES_MIGRATION_OUTPUT,SERVICES_OPCUA_EVENTS,SERVICES_PERSISTENCE_EVENTS,SERVICES_PERSISTENCE_INPUT};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

/********************************************************************************
 * Copyright (c) 2020 Cedalo AG
 *
 * This program and the accompanying materials are made available under the 
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 ********************************************************************************/const ErrorCodes={MACHINE_SERVER_NOT_CONNECTED:'MACHINE_SERVER_NOT_CONNECTED',GRAPH_SERVER_NOT_CONNECTED:'GRAPH_SERVER_NOT_CONNECTED',MACHINE_SERVER_AND_GRAPH_SERVER_NOT_CONNECTED:'MACHINE_SERVER_AND_GRAPH_SERVER_NOT_CONNECTED'};module.exports=ErrorCodes;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/********************************************************************************
 * Copyright (c) 2020 Cedalo AG
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 ********************************************************************************/ /* global WebSocket */function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}const BaseGatewayClient=__webpack_require__(3);const logger=_objectSpread(_objectSpread({},console),{},{debug:()=>{}});module.exports=class WebGatewayClient extends BaseGatewayClient{constructor({name='Web Gateway Client',defaultListener}={}){super({name,logger,defaultListener});}_connectSocketServer(url){return new Promise((resolve,reject)=>{const ws=new WebSocket(url);ws.onopen=()=>this._handleOpenedSocketConnection().then(()=>resolve(ws));ws.onmessage=event=>this._handleSocketMessage(event.data);ws.onerror=event=>{this._handleSocketError(event);reject(event);};ws.onclose=event=>this._handleSocketClose(event);}).catch(error=>this._handleSocketError(error));}};

/***/ })
/******/ ]);
//# sourceMappingURL=01a7c0e269662defbed6.worker.js.map
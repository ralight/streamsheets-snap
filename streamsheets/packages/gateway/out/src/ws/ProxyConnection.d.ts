/// <reference types="node" />
import * as http from 'http';
import WebSocket from 'ws';
import { EventData, RequestContext, Session, WSRequest } from '../streamsheets';
import { User } from '../user';
import { SocketServer } from './SocketServer';
export interface MessageContext extends RequestContext {
    message: WSRequest;
    connection: ProxyConnection;
    graphserver?: any;
    machineserver?: any;
}
export interface Interceptor {
    beforeSendToClient(context: MessageContext): Promise<MessageContext>;
    beforeSendToServer(context: MessageContext): Promise<MessageContext>;
}
export default class ProxyConnection {
    id: string;
    user: User;
    private request;
    private clientsocket;
    private socketserver;
    private messagingClient;
    private graphserver;
    private machineserver;
    private interceptor;
    private machineId;
    static get openConnections(): Set<ProxyConnection>;
    static create(ws: WebSocket, request: http.IncomingMessage, user: User, socketserver: SocketServer): ProxyConnection;
    constructor(ws: WebSocket, request: http.IncomingMessage, user: User, socketserver: SocketServer);
    setUser(user: User): void;
    get session(): Session;
    updateConnectionState(ws: WebSocket): Promise<void>;
    sendSessionToClient(): void;
    sendServicesStatusToClient(): void;
    onServerEvent(event: any): void;
    connectGraphServer(): Promise<void>;
    connectMachineServer(): Promise<void>;
    createMessageContext(message: any): Promise<MessageContext>;
    sendToServer(message: WSRequest): Promise<import("../streamsheets").IWSResponse>;
    _beforeSendToServer(context: MessageContext): Promise<MessageContext>;
    _sendToGraphServer(context: MessageContext): Promise<import("../streamsheets").SubscribeMachineResponse | import("../streamsheets").SubscribeGraphResponse | import("../streamsheets").LoadSubscribeMachineResponse | import("../streamsheets").LoadSubscribeGraphResponse | import("../streamsheets").CommandResponse | null>;
    _sendToMachineServer(context: MessageContext): Promise<void> | Promise<import("../streamsheets").ServiceResponse>;
    sendStepToClient(stepMessage: EventData): Promise<void>;
    sendToClient(message: any): Promise<void>;
    _beforeSendToClient(context: MessageContext): Promise<MessageContext>;
    close(): void;
}

/// <reference types="node" />
import http from 'http';
import WebSocket from 'ws';
import { GlobalContext, Session } from '../streamsheets';
import { User } from '../user';
import ProxyConnection from './ProxyConnection';
export declare const TOKENKEY = "authToken";
export declare class SocketServer {
    private wss;
    private wssConfig;
    private interceptorchain;
    private _gatewayService;
    globalContext: GlobalContext;
    constructor(gatewayService: any, httpServer: http.Server);
    get gatewayService(): any;
    start(): void;
    handleConnection(ws: WebSocket, request: http.IncomingMessage): Promise<void>;
    handleUserJoined(ws: WebSocket, user: User): void;
    logoutUser({ user }: {
        user: User;
        msg?: any;
    }): void;
    logoutConnection(connection: ProxyConnection): void;
    handleUserLeft(session: Session): void;
    shouldBroadcast(user?: Partial<User>): string | undefined;
    connectClient(client: any): void;
    findConnectionBySession(session: Session): ProxyConnection | undefined;
    findConnectionsByUser(user: User): ProxyConnection[];
    broadcast(message: any): void;
    broadcastExceptForUser(message: any, userId: string): void;
    close(): void;
}

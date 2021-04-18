/// <reference types="node" />
import http from 'http';
import { GlobalContext } from '../..';
export declare function start(globalContext: GlobalContext): Promise<http.Server>;

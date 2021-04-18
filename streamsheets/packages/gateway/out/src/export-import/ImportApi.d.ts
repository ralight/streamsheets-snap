import { RequestContext, ID, Scope } from '../streamsheets';
import { ExportImportData } from './types';
export interface ImportInfo {
    machines: MachineImportInfo[];
    streams: StreamImportInfo[];
}
export interface MachineImportInfo {
    id: ID;
    name: string;
}
export interface StreamImportInfo {
    id: ID;
    name: string;
}
export declare type ImportSelection = {
    id: ID;
    connectorId?: ID;
    newName: string;
};
export declare const ImportApi: {
    getImportInfo: ({ repositories }: RequestContext, scope: Scope, importInfo: ImportInfo) => Promise<{
        machines: {
            id: string;
            nameInUse: boolean;
            proposedName: string;
        }[];
        streams: {
            id: string;
            nameInUse: boolean;
            proposedName: string;
        }[];
    }>;
    doImport: ({ repositories, api }: RequestContext, scope: Scope, importData: ExportImportData, machineSelection?: ImportSelection[], streamSelection?: ImportSelection[]) => Promise<{
        machines: string[];
        streams: string[];
    }>;
};

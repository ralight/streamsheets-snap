import { RequestContext, Scope } from '../streamsheets';
import { ExportImportData } from './types';
export declare const ExportApi: {
    doExport: ({ repositories, api }: RequestContext, scope: Scope, machines: string[], streams: string[]) => Promise<ExportImportData>;
};

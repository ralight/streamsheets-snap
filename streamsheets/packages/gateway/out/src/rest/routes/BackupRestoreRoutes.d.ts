export = BackupRestoreRoutes;
declare class BackupRestoreRoutes {
    static backup(request: any, response: any, next: any): Promise<void>;
    static restore(request: any, response: any, next: any): Promise<void>;
}

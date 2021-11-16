declare const CreateGraphMessage_base: any;
export class CreateGraphMessage extends CreateGraphMessage_base {
    [x: string]: any;
    constructor({ machineId }: {
        machineId: any;
    });
    _machineId: any;
    _getConfig(): {
        machineId: any;
    };
}
declare const CreateStreamSheetMessage_base: any;
export class CreateStreamSheetMessage extends CreateStreamSheetMessage_base {
    [x: string]: any;
    constructor({ machineId, streamsheetId, streamsheetName, activeItemId, position, sheetType }: {
        machineId: any;
        streamsheetId: any;
        streamsheetName: any;
        activeItemId: any;
        position: any;
        sheetType: any;
    });
    _machineId: any;
    _streamsheetId: any;
    _streamsheetName: any;
    _activeItemId: any;
    _position: any;
    _sheetType: any;
    _getConfig(): {
        machineId: any;
        streamsheetId: any;
        streamsheetName: any;
        activeItemId: any;
        position: any;
        sheetType: any;
    };
}
declare const DeleteGraphMessage_base: any;
export class DeleteGraphMessage extends DeleteGraphMessage_base {
    [x: string]: any;
    constructor({ machineId }: {
        machineId: any;
    });
    _machineId: any;
    _getConfig(): {
        machineId: any;
    };
}
declare const DeleteStreamSheetMessage_base: any;
export class DeleteStreamSheetMessage extends DeleteStreamSheetMessage_base {
    [x: string]: any;
    constructor({ machineId, streamsheetId }: {
        machineId: any;
        streamsheetId: any;
    });
    _machineId: any;
    _streamsheetId: any;
    _getConfig(): {
        machineId: any;
        streamsheetId: any;
    };
}
declare const GetGraphMessage_base: any;
export class GetGraphMessage extends GetGraphMessage_base {
    [x: string]: any;
    constructor({ machineId }: {
        machineId: any;
    });
    _machineId: any;
    _getConfig(): {
        machineId: any;
    };
}
declare const LoadGraphMessage_base: any;
export class LoadGraphMessage extends LoadGraphMessage_base {
    [x: string]: any;
    constructor({ machineId, templateId, streamsheets }: {
        machineId: any;
        templateId: any;
        streamsheets: any;
    });
    _machineId: any;
    _templateId: any;
    _streamsheets: any;
    _getConfig(): {
        machineId: any;
        templateId: any;
        streamsheets: any;
    };
}
declare const LoadSubscribeGraphMessage_base: any;
export class LoadSubscribeGraphMessage extends LoadSubscribeGraphMessage_base {
    [x: string]: any;
    constructor({ machineId, templateId, machine }: {
        machineId: any;
        templateId: any;
        machine: any;
    });
    _machineId: any;
    _templateId: any;
    _machine: any;
    _getConfig(): {
        machineId: any;
        templateId: any;
        machine: any;
    };
}
declare const LoadSheetCellsMessage_base: any;
export class LoadSheetCellsMessage extends LoadSheetCellsMessage_base {
    [x: string]: any;
    constructor({ machineId, streamsheetId, cellDescriptors, command, machineDescriptor }: {
        machineId: any;
        streamsheetId: any;
        cellDescriptors: any;
        command: any;
        machineDescriptor: any;
    });
    _machineId: any;
    _streamsheetId: any;
    _cellDescriptors: any;
    _machineDescriptor: any;
    _command: any;
    _getConfig(): {
        machineId: any;
        streamsheetId: any;
        cellDescriptors: any;
        machineDescriptor: any;
        command: any;
    };
}
declare const PreloadGraph_base: any;
export class PreloadGraph extends PreloadGraph_base {
    [x: string]: any;
    constructor({ machineId }: {
        machineId: any;
    });
    _machineId: any;
    _getConfig(): {
        machineId: any;
    };
}
declare const SubscribeGraphMessage_base: any;
export class SubscribeGraphMessage extends SubscribeGraphMessage_base {
    [x: string]: any;
    constructor({ machineId, machine }: {
        machineId: any;
        machine: any;
    });
    _machineId: any;
    _machine: any;
    _getConfig(): {
        machineId: any;
        machine: any;
    };
}
declare const UnsubscribeGraphMessage_base: any;
export class UnsubscribeGraphMessage extends UnsubscribeGraphMessage_base {
    [x: string]: any;
    constructor({ machineId }: {
        machineId: any;
    });
    _machineId: any;
    _getConfig(): {
        machineId: any;
    };
}
export {};

/// <reference types="@cedalo/messaging-client" />
export = MachineServiceMessageRouter;
declare class MachineServiceMessageRouter {
    constructor(gatewayService: any);
    _gatewayService: any;
    _messagingClient: import("@cedalo/messaging-client").MessagingClient;
    _machineServices: import("./RoundRobinMap");
    _machineServiceIterator: {
        next(): {
            done: boolean;
            value: any;
        };
    };
    _machinesToMachineServices: Map<any, any>;
    handleMessage(topic: any, message: any): void;
    getMachineServiceIdForMachineId(machineId: any): any;
    getNextMachineService(): any;
    handleMachineServiceUpdate(serviceInformation: any): void;
    _removeMachinesForMachineService(machineServiceIdToDelete: any): void;
    handleMachineServiceInputMessage(message: any): void;
    get messagingClient(): import("@cedalo/messaging-client").MessagingClient;
    get gatewayService(): any;
}

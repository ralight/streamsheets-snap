export = RoundRobinMap;
declare class RoundRobinMap {
    _map: Map<any, any>;
    _index: number;
    set(key: any, value: any): Map<any, any>;
    has(key: any): boolean;
    delete(key: any): boolean;
    keys(): IterableIterator<any>;
    "__@iterator"(): {
        next(): {
            done: boolean;
            value: any;
        };
    };
    iterator(): {
        next(): {
            done: boolean;
            value: any;
        };
    };
}

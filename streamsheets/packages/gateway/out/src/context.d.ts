import { BaseAuth } from './authorization';
import { RawAPI } from './glue';
import { GenericGlobalContext, GlobalContext } from './streamsheets';
export declare type GatewayPlugin = {
    apply: (context: GenericGlobalContext<RawAPI, BaseAuth>) => Promise<GlobalContext>;
};
export declare const init: (config: any, plugins: string[]) => Promise<GenericGlobalContext<RawAPI, BaseAuth>>;

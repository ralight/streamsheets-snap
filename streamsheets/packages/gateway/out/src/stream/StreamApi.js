"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamApi = {
    findAllStreams: async ({ auth, streamRepo }, scope) => {
        const validScope = auth.isValidScope(scope);
        if (!validScope) {
            return [];
        }
        const streams = await streamRepo.findAllStreams();
        const streamsInScope = streams.filter((stream) => auth.isInScope(scope, stream) || stream.className === 'ProviderConfiguration');
        return streamsInScope;
    },
    findByName: async ({ auth, streamRepo }, scope, name) => {
        const validScope = auth.isValidScope(scope);
        if (!validScope) {
            return null;
        }
        const streams = await streamRepo.findByName(name);
        if (!streams) {
            return null;
        }
        const [stream] = streams.filter((s) => auth.isInScope(scope, s));
        return stream || null;
    },
    providers: async ({ auth, streamRepo }, scope) => {
        const validScope = auth.isValidScope(scope);
        if (!validScope) {
            return [];
        }
        const providers = streamRepo.providers();
        return providers;
    },
    findById: async ({ auth, streamRepo }, scope, id) => {
        const validScope = auth.isValidScope(scope);
        if (!validScope) {
            return null;
        }
        const stream = await streamRepo.findById(id);
        if (!stream) {
            return null;
        }
        return auth.isInScope(scope, stream) ? stream : null;
    },
    executeStreamCommand: async ({ auth, streamRepo }, scope, command) => {
        const validScope = auth.isValidScope(scope);
        if (!validScope) {
            return null;
        }
        const stream = await streamRepo.findById(command.streamId);
        if (!stream || !auth.isInScope(scope, stream)) {
            return null;
        }
        const result = await streamRepo.executeStreamCommand(command);
        return result;
    },
    saveStream: async ({ auth, streamRepo }, scope, stream) => {
        const validScope = auth.isValidScope(scope);
        if (!validScope) {
            return null;
        }
        stream.scope = scope;
        const result = await streamRepo.saveStream(stream);
        return result;
    },
    deleteStream: async ({ auth, streamRepo }, scope, id) => {
        const validScope = auth.isValidScope(scope);
        if (!validScope) {
            return null;
        }
        const stream = await streamRepo.findById(id);
        if (!stream || !auth.isInScope(scope, stream)) {
            return null;
        }
        const result = await streamRepo.deleteStream(id);
        return result;
    },
    reloadStreams: async ({ auth, streamRepo }, scope, toReload) => {
        const validScope = auth.isValidScope(scope);
        if (!validScope) {
            return null;
        }
        const streams = await streamRepo.findAllStreams();
        const allowedToReload = streams
            .filter((stream) => auth.isInScope(scope, stream) && toReload.includes(stream.name))
            .map((stream) => stream.id);
        if (streams.length > 0) {
            await streamRepo.reloadStreams(allowedToReload);
        }
    },
    validateStream: async ({ streamRepo }, provider, type, config) => {
        const result = await streamRepo.validateStream(provider, type, config);
        return result;
    },
    handleStreamEvent: async ({ actor, auth }, event) => event
};
//# sourceMappingURL=StreamApi.js.map
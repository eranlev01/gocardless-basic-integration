'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
class CustomerService {
    constructor(api) {
        this.api = api;
    }
    async create(requestParameters, idempotencyKey = '', customHeaders = {}) {
        var _a, _b;
        const urlParameters = [];
        const requestParams = {
            path: '/customers',
            method: 'post',
            urlParameters,
            requestParameters,
            payloadKey: 'customers',
            idempotencyKey,
            customHeaders,
            fetch: async (identity) => this.find(identity),
        };
        const response = await this.api.request(requestParams);
        const formattedResponse = {
            ...((_b = (_a = response.body) === null || _a === void 0 ? void 0 : _a['customers']) !== null && _b !== void 0 ? _b : response),
            __response__: response.__response__,
        };
        return formattedResponse;
    }
    async list(requestParameters) {
        const urlParameters = [];
        const requestParams = {
            path: '/customers',
            method: 'get',
            urlParameters,
            requestParameters,
            payloadKey: null,
            fetch: null,
        };
        const response = await this.api.request(requestParams);
        const formattedResponse = {
            ...response.body,
            __response__: response.__response__,
        };
        return formattedResponse;
    }
    async *all(requestParameters) {
        let cursor = undefined;
        do {
            const list = await this.list({ ...requestParameters, after: cursor });
            for (const customer of list.customers) {
                yield customer;
            }
            cursor = list.meta.cursors.after;
        } while (cursor);
    }
    async find(identity) {
        const urlParameters = [{ key: 'identity', value: identity }];
        const requestParams = {
            path: '/customers/:identity',
            method: 'get',
            urlParameters,
            payloadKey: null,
            fetch: null,
        };
        const response = await this.api.request(requestParams);
        const formattedResponse = {
            ...response.body['customers'],
            __response__: response.__response__,
        };
        return formattedResponse;
    }
    async update(identity, requestParameters) {
        const urlParameters = [{ key: 'identity', value: identity }];
        const requestParams = {
            path: '/customers/:identity',
            method: 'put',
            urlParameters,
            requestParameters,
            payloadKey: 'customers',
            fetch: null,
        };
        const response = await this.api.request(requestParams);
        const formattedResponse = {
            ...response.body['customers'],
            __response__: response.__response__,
        };
        return formattedResponse;
    }
    async remove(identity) {
        const urlParameters = [{ key: 'identity', value: identity }];
        const requestParams = {
            path: '/customers/:identity',
            method: 'delete',
            urlParameters,
            payloadKey: null,
            fetch: null,
        };
        const response = await this.api.request(requestParams);
        const formattedResponse = {
            ...response.body['customers'],
            __response__: response.__response__,
        };
        return formattedResponse;
    }
}
exports.CustomerService = CustomerService;
//# sourceMappingURL=customerService.js.map
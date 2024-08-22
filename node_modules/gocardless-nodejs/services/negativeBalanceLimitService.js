'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.NegativeBalanceLimitService = void 0;
class NegativeBalanceLimitService {
    constructor(api) {
        this.api = api;
    }
    async list(requestParameters) {
        const urlParameters = [];
        const requestParams = {
            path: '/negative_balance_limits',
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
            for (const negativebalancelimit of list.negative_balance_limits) {
                yield negativebalancelimit;
            }
            cursor = list.meta.cursors.after;
        } while (cursor);
    }
    async create(requestParameters, idempotencyKey = '', customHeaders = {}) {
        var _a, _b;
        const urlParameters = [];
        const requestParams = {
            path: '/negative_balance_limits',
            method: 'post',
            urlParameters,
            requestParameters,
            payloadKey: 'negative_balance_limits',
            idempotencyKey,
            customHeaders,
            fetch: undefined,
        };
        const response = await this.api.request(requestParams);
        const formattedResponse = {
            ...((_b = (_a = response.body) === null || _a === void 0 ? void 0 : _a['negative_balance_limits']) !== null && _b !== void 0 ? _b : response),
            __response__: response.__response__,
        };
        return formattedResponse;
    }
}
exports.NegativeBalanceLimitService = NegativeBalanceLimitService;
//# sourceMappingURL=negativeBalanceLimitService.js.map
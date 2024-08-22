import * as Types from '../types/Types';
interface NegativeBalanceLimitResponse extends Types.NegativeBalanceLimit, Types.APIResponse {
}
interface NegativeBalanceLimitListResponse extends Types.APIResponse {
    negative_balance_limits: Types.NegativeBalanceLimit[];
    meta: Types.ListMeta;
}
interface NegativeBalanceLimitListRequest {
    after?: string;
    before?: string;
    creditor?: string;
    currency?: Types.NegativeBalanceLimitCurrency;
    limit?: string;
}
interface NegativeBalanceLimitCreateRequest {
    balance_limit: string;
    currency: Types.NegativeBalanceLimitCurrency;
    links?: Types.NegativeBalanceLimitCreateRequestLinks;
}
export declare class NegativeBalanceLimitService {
    private api;
    constructor(api: any);
    list(requestParameters: NegativeBalanceLimitListRequest): Promise<NegativeBalanceLimitListResponse>;
    all(requestParameters: NegativeBalanceLimitListRequest): AsyncGenerator<Types.NegativeBalanceLimit, void, unknown>;
    create(requestParameters: NegativeBalanceLimitCreateRequest, idempotencyKey?: string, customHeaders?: Types.JsonMap): Promise<NegativeBalanceLimitResponse>;
}
export {};

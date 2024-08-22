import * as Types from '../types/Types';
interface PayoutResponse extends Types.Payout, Types.APIResponse {
}
interface PayoutListResponse extends Types.APIResponse {
    payouts: Types.Payout[];
    meta: Types.ListMeta;
}
interface PayoutListRequest {
    after?: string;
    before?: string;
    created_at?: Types.CreatedAtFilter;
    creditor?: string;
    creditor_bank_account?: string;
    currency?: Types.PayoutCurrency;
    limit?: string;
    metadata?: Types.JsonMap;
    payout_type?: Types.PayoutPayoutType;
    reference?: string;
    status?: Types.PayoutStatus;
}
interface PayoutUpdateRequest {
    metadata?: Types.JsonMap;
}
export declare class PayoutService {
    private api;
    constructor(api: any);
    list(requestParameters: PayoutListRequest): Promise<PayoutListResponse>;
    all(requestParameters: PayoutListRequest): AsyncGenerator<Types.Payout, void, unknown>;
    find(identity: string): Promise<PayoutResponse>;
    update(identity: string, requestParameters: PayoutUpdateRequest): Promise<PayoutResponse>;
}
export {};

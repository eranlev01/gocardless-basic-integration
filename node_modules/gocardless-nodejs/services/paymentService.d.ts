import * as Types from '../types/Types';
interface PaymentResponse extends Types.Payment, Types.APIResponse {
}
interface PaymentListResponse extends Types.APIResponse {
    payments: Types.Payment[];
    meta: Types.ListMeta;
}
interface PaymentCreateRequest {
    amount: string;
    app_fee?: string;
    charge_date?: string;
    currency: Types.PaymentCurrency;
    description?: string;
    faster_ach?: boolean;
    links: Types.PaymentCreateRequestLinks;
    metadata?: Types.JsonMap;
    reference?: string;
    retry_if_possible?: boolean;
}
interface PaymentListRequest {
    after?: string;
    before?: string;
    charge_date?: Types.PaymentChargeDate;
    created_at?: Types.CreatedAtFilter;
    creditor?: string;
    currency?: Types.PaymentCurrency;
    customer?: string;
    limit?: string;
    mandate?: string;
    sort_direction?: Types.PaymentSortDirection;
    sort_field?: Types.PaymentSortField;
    status?: Types.PaymentStatus;
    subscription?: string;
}
interface PaymentUpdateRequest {
    metadata?: Types.JsonMap;
    retry_if_possible?: boolean;
}
interface PaymentCancelRequest {
    metadata?: Types.JsonMap;
}
interface PaymentRetryRequest {
    charge_date?: string;
    metadata?: Types.JsonMap;
}
export declare class PaymentService {
    private api;
    constructor(api: any);
    create(requestParameters: PaymentCreateRequest, idempotencyKey?: string, customHeaders?: Types.JsonMap): Promise<PaymentResponse>;
    list(requestParameters: PaymentListRequest): Promise<PaymentListResponse>;
    all(requestParameters: PaymentListRequest): AsyncGenerator<Types.Payment, void, unknown>;
    find(identity: string): Promise<PaymentResponse>;
    update(identity: string, requestParameters: PaymentUpdateRequest): Promise<PaymentResponse>;
    cancel(identity: string, requestParameters: PaymentCancelRequest): Promise<PaymentResponse>;
    retry(identity: string, requestParameters: PaymentRetryRequest): Promise<PaymentResponse>;
}
export {};

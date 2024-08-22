import * as Types from '../types/Types';
interface InstalmentScheduleResponse extends Types.InstalmentSchedule, Types.APIResponse {
}
interface InstalmentScheduleListResponse extends Types.APIResponse {
    instalment_schedules: Types.InstalmentSchedule[];
    meta: Types.ListMeta;
}
interface InstalmentScheduleCreateWithDatesRequest {
    app_fee?: string;
    currency: Types.InstalmentScheduleCurrency;
    instalments: Types.InstalmentScheduleInstalment[];
    links: Types.InstalmentScheduleCreateWithDatesRequestLinks;
    metadata?: Types.JsonMap;
    name: string;
    payment_reference?: string;
    retry_if_possible?: boolean;
    total_amount: string;
}
interface InstalmentScheduleCreateWithScheduleRequest {
    app_fee?: string;
    currency: Types.InstalmentScheduleCurrency;
    instalments: Types.InstalmentScheduleInstalments;
    links: Types.InstalmentScheduleCreateWithScheduleRequestLinks;
    metadata?: Types.JsonMap;
    name: string;
    payment_reference?: string;
    retry_if_possible?: boolean;
    total_amount: string;
}
interface InstalmentScheduleListRequest {
    after?: string;
    before?: string;
    created_at?: Types.CreatedAtFilter;
    customer?: string;
    limit?: string;
    mandate?: string;
    status?: Types.InstalmentScheduleStatus[];
}
interface InstalmentScheduleUpdateRequest {
    metadata?: Types.JsonMap;
}
export declare class InstalmentScheduleService {
    private api;
    constructor(api: any);
    createWithDates(requestParameters: InstalmentScheduleCreateWithDatesRequest, idempotencyKey?: string, customHeaders?: Types.JsonMap): Promise<InstalmentScheduleResponse>;
    createWithSchedule(requestParameters: InstalmentScheduleCreateWithScheduleRequest, idempotencyKey?: string, customHeaders?: Types.JsonMap): Promise<InstalmentScheduleResponse>;
    list(requestParameters: InstalmentScheduleListRequest): Promise<InstalmentScheduleListResponse>;
    all(requestParameters: InstalmentScheduleListRequest): AsyncGenerator<Types.InstalmentSchedule, void, unknown>;
    find(identity: string): Promise<InstalmentScheduleResponse>;
    update(identity: string, requestParameters: InstalmentScheduleUpdateRequest): Promise<InstalmentScheduleResponse>;
    cancel(identity: string): Promise<InstalmentScheduleResponse>;
}
export {};

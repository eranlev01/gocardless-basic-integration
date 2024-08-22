import * as Types from '../types/Types';
interface WebhookResponse extends Types.Webhook, Types.APIResponse {
}
interface WebhookListResponse extends Types.APIResponse {
    webhooks: Types.Webhook[];
    meta: Types.ListMeta;
}
interface WebhookListRequest {
    after?: string;
    before?: string;
    created_at?: Types.CreatedAtFilter;
    is_test?: boolean;
    limit?: string;
    successful?: boolean;
}
export declare class WebhookService {
    private api;
    constructor(api: any);
    list(requestParameters: WebhookListRequest): Promise<WebhookListResponse>;
    all(requestParameters: WebhookListRequest): AsyncGenerator<Types.Webhook, void, unknown>;
    find(identity: string): Promise<WebhookResponse>;
    retry(identity: string): Promise<WebhookResponse>;
}
export {};

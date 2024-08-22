import * as Types from '../types/Types';
interface SchemeIdentifierResponse extends Types.SchemeIdentifier, Types.APIResponse {
}
interface SchemeIdentifierListResponse extends Types.APIResponse {
    scheme_identifiers: Types.SchemeIdentifier[];
    meta: Types.ListMeta;
}
interface SchemeIdentifierCreateRequest {
    links?: Types.SchemeIdentifierCreateRequestLinks;
    name: string;
    scheme: Types.SchemeIdentifierScheme;
}
interface SchemeIdentifierListRequest {
    after?: string;
    before?: string;
    creditor?: string;
    limit?: string;
}
export declare class SchemeIdentifierService {
    private api;
    constructor(api: any);
    create(requestParameters: SchemeIdentifierCreateRequest, idempotencyKey?: string, customHeaders?: Types.JsonMap): Promise<SchemeIdentifierResponse>;
    list(requestParameters: SchemeIdentifierListRequest): Promise<SchemeIdentifierListResponse>;
    all(requestParameters: SchemeIdentifierListRequest): AsyncGenerator<Types.SchemeIdentifier, void, unknown>;
    find(identity: string): Promise<SchemeIdentifierResponse>;
}
export {};

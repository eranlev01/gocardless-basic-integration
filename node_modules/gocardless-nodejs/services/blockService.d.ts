import * as Types from '../types/Types';
interface BlockResponse extends Types.Block, Types.APIResponse {
}
interface BlockListResponse extends Types.APIResponse {
    blocks: Types.Block[];
    meta: Types.ListMeta;
}
interface BlockCreateRequest {
    active?: boolean;
    block_type?: Types.BlockBlockType;
    reason_description?: string;
    reason_type?: Types.BlockReasonType;
    resource_reference?: string;
}
interface BlockListRequest {
    after?: string;
    before?: string;
    block?: string;
    block_type?: Types.BlockBlockType;
    created_at?: Types.CreatedAtFilter;
    limit?: string;
    reason_type?: Types.BlockReasonType;
    updated_at?: string;
}
interface BlockBlockByRefRequest {
    active?: boolean;
    reason_description?: string;
    reason_type?: Types.BlockReasonType;
    reference_type?: Types.BlockReferenceType;
    reference_value?: string;
}
export declare class BlockService {
    private api;
    constructor(api: any);
    create(requestParameters: BlockCreateRequest, idempotencyKey?: string, customHeaders?: Types.JsonMap): Promise<BlockResponse>;
    find(identity: string): Promise<BlockResponse>;
    list(requestParameters: BlockListRequest): Promise<BlockListResponse>;
    all(requestParameters: BlockListRequest): AsyncGenerator<Types.Block, void, unknown>;
    disable(identity: string): Promise<BlockResponse>;
    enable(identity: string): Promise<BlockResponse>;
    block_by_ref(requestParameters: BlockBlockByRefRequest): Promise<BlockListResponse>;
}
export {};

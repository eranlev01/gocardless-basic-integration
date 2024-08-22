import * as Types from '../types/Types';
interface MandateImportResponse extends Types.MandateImport, Types.APIResponse {
}
interface MandateImportCreateRequest {
    links?: Types.MandateImportCreateRequestLinks;
    scheme: Types.MandateImportScheme;
}
export declare class MandateImportService {
    private api;
    constructor(api: any);
    create(requestParameters: MandateImportCreateRequest, idempotencyKey?: string, customHeaders?: Types.JsonMap): Promise<MandateImportResponse>;
    find(identity: string): Promise<MandateImportResponse>;
    submit(identity: string): Promise<MandateImportResponse>;
    cancel(identity: string): Promise<MandateImportResponse>;
}
export {};

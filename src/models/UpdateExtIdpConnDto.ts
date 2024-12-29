/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateExtIdpConnDto = {
    /**
     * Identity source connection ID
     */
    id: string;
    /**
     * Identity source connection display name
     */
    displayName: string;
    /**
     * Identity source connection custom parameters (incremental modification)
     */
    fields: any;
    /**
     *Icon for identity source connection
     */
    logo?: string;
    /**
     * Whether to only support login
     */
    loginOnly?: boolean;
    /**
     * Tenant ID
     */
    tenantId?: string;
};

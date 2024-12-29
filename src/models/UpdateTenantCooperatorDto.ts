/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateTenantCooperatorDto = {
    /**
     * Whether to authorize API
     */
    apiAuthorized: boolean;
    /**
     * Strategy
     */
    policies: Array<string>;
};

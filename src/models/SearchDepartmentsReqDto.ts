/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SearchDepartmentsReqDto = {
    /**
     * Search keywords, such as organization name, etc.
     */
    keywords: string;
    /**
     *Organization code
     */
    organizationCode: string;
    /**
     * Whether to obtain custom data
     */
    withCustomData?: boolean;
    /**
     * Tenant ID
     */
    tenantId?: string;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListTenantAdminDto = {
    /**
     * Tenant ID
     */
    tenantId: string;
    /**
     * Search keywords
     */
    keywords?: string;
    /**
     *Page number
     */
    page?: string;
    /**
     *Amount of data obtained per page
     */
    limit?: string;
};

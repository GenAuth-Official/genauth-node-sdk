/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get the application list, you can specify tenant ID to filter.
 */
export type ListTenantApplicationsDto = {
    /**
     * Get the page number of the application list
     */
    page?: any;
    /**
     * Number of applications obtained per page
     */
    limit?: any;
    /**
     * Search keywords
     */
    keywords?: any;
    /**
     * Whether the application includes single sign-on
     */
    ssoEnabled?: any;
};

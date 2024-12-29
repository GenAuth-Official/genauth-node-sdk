/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * This interface is used to obtain the tenant list and supports fuzzy search.
 */
export type ListTenantsDto = {
    /**
     * Search keywords
     */
    keywords?: any;
    /**
     * Whether to add returned tenant member statistics
     */
    withMembersCount?: any;
    /**
     * Added simple information returned to the app under the tenant
     */
    withAppDetail?: any;
    /**
     * Added the ability to return simple information about the creator under the tenant
     */
    withCreatorDetail?: any;
    /**
     * Add simple information returned to the source app under the tenant
     */
    withSourceAppDetail?: any;
    /**
     *Page number
     */
    page?: any;
    /**
     *Amount of data obtained per page
     */
    limit?: any;
    /**
     * Tenant source
     */
    source?: any;
};

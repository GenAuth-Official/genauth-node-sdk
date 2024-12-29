/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get the group list and support paging.
 */
export type ListGroupsDto = {
    /**
     * Search group code or group name
     */
    keywords?: any;
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: any;
    /**
     * Whether to display metadata content
     */
    withMetadata?: any;
    /**
     * Whether to obtain custom data
     */
    withCustomData?: any;
    /**
     * Whether to flatten the extended field
     */
    flatCustomData?: any;
};

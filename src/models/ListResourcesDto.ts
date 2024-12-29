/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * According to the filter conditions, obtain the resource details list in pages.
 */
export type ListResourcesDto = {
    /**
     * The Code of the permission group (permission space) to which it belongs is not passed to obtain the default permission group.
     */
    namespace?: any;
    /**
     * Resource type
     */
    type?: any;
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: any;
};

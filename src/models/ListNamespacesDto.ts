/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * According to the filter conditions, obtain the permission grouping list in pages.
 */
export type ListNamespacesDto = {
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: any;
    /**
     *Search permission group code
     */
    keywords?: any;
};

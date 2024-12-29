/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * According to the filter conditions, obtain the general resource details list in pages.
 */
export type ListCommonResourceDto = {
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: any;
    /**
     * Query conditions
     */
    keyword?: any;
    /**
     * Permission space list
     */
    namespaceCodeList?: any;
};

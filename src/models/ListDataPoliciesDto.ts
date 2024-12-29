/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Query the data strategy list in paging, or search the data strategy name or data strategy code by keyword for fuzzy search.
 */
export type ListDataPoliciesDto = {
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: any;
    /**
     * Data strategy name keyword search
     */
    query?: any;
};

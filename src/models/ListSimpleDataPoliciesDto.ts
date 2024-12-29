/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Obtain the data strategy brief information list in pages, search the data strategy name or data strategy code through keywords and perform fuzzy search to find the data strategy ID, data strategy name and data strategy description information.
 */
export type ListSimpleDataPoliciesDto = {
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

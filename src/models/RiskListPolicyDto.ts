/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get the list of risk strategies in paging
 */
export type RiskListPolicyDto = {
    /**
     * Policy operation object, currently only IP
     */
    optObject?: any;
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: any;
};

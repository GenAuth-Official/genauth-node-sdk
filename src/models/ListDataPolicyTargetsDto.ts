/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Obtain the list of subjects authorized by the data policy, and find the list of authorized subjects through the authorization subject type, data policy ID and data resource ID.
 */
export type ListDataPolicyTargetsDto = {
    /**
     * Data policy ID
     */
    policyId?: any;
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: any;
    /**
     * Subject name
     */
    query?: any;
    /**
     * Subject type, including four types: USER, GROUP, ROLE, and ORG
     */
    targetType?: any;
};

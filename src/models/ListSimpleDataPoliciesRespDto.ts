/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListSimpleDataPoliciesRespDto = {
    /**
     * Data policy ID
     */
    policyId: string;
    /**
     * Data policy name, unique to user pool
     */
    policyName: string;
    /**
     * Data strategy description
     */
    description?: string;
};

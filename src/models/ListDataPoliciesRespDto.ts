/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataResourceSimpleRespDto } from './DataResourceSimpleRespDto';
import type { SubjectRespDto } from './SubjectRespDto';

export type ListDataPoliciesRespDto = {
    /**
     * Data policy name, unique to user pool
     */
    policyName: string;
    /**
     * Data strategy description
     */
    description?: string;
    /**
     * Data permission list, all data resource IDs and names under each policy
     */
    resourceList: Array<DataResourceSimpleRespDto>;
    /**
     * Data policy ID
     */
    policyId: string;
    /**
     * Subject object list, including all subject objects under the data policy, including USER, GROUP, ROLE, ORG
     */
    targetList: Array<SubjectRespDto>;
    /**
     * Data policy update time
     */
    updatedAt: string;
};

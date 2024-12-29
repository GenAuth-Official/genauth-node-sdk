/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RiskListPolicyRespDto } from './RiskListPolicyRespDto';

export type RiskListPolicyPagingDto = {
    /**
     *Total number of records
     */
    totalCount: number;
    /**
     * Data list
     */
    list: Array<RiskListPolicyRespDto>;
};

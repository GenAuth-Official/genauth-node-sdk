/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataSubjectRespDto } from './DataSubjectRespDto';

export type ListDataPolicySubjectPageDto = {
    /**
     * Total Count
     */
    totalCount?: number;
    /**
     * response data
     */
    list: Array<DataSubjectRespDto>;
};

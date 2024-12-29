/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LoginHistoryDto } from './LoginHistoryDto';

export type LoginHistoryPaginatedRespDto = {
    /**
     *Total number of records
     */
    totalCount: number;
    /**
     * Record list
     */
    list: Array<LoginHistoryDto>;
};

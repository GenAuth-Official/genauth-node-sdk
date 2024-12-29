/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SyncJobDto } from './SyncJobDto';

export type SyncJobPagingDto = {
    /**
     *Total number of records
     */
    totalCount: number;
    /**
     * Data list
     */
    list: Array<SyncJobDto>;
};

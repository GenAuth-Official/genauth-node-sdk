/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SyncTaskDto } from './SyncTaskDto';

export type SyncTaskPagingDto = {
    /**
     *Total number of records
     */
    totalCount: number;
    /**
     * Data list
     */
    list: Array<SyncTaskDto>;
};

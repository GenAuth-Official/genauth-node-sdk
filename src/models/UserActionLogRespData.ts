/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserActionLogDto } from './UserActionLogDto';

export type UserActionLogRespData = {
    /**
     *Total number of records
     */
    totalCount: number;
    /**
     * Return to list
     */
    list: Array<UserActionLogDto>;
};

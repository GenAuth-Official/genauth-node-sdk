/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserLoginHistoryDto } from './UserLoginHistoryDto';

export type UserLoginHistoryPagingDto = {
    /**
     *Total number of records
     */
    totalCount: number;
    /**
     *Response data
     */
    list: Array<UserLoginHistoryDto>;
};

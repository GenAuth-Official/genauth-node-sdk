/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserDto } from './UserDto';

export type UserPagingDto = {
    /**
     *Total number of records
     */
    totalCount: number;
    /**
     * Data list
     */
    list: Array<UserDto>;
};

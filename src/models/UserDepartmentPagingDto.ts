/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserDepartmentRespDto } from './UserDepartmentRespDto';

export type UserDepartmentPagingDto = {
    /**
     *Total number of records
     */
    totalCount: number;
    /**
     *Response data
     */
    list: Array<UserDepartmentRespDto>;
};

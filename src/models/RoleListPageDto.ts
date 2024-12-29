/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RolePermissionListDto } from './RolePermissionListDto';

export type RoleListPageDto = {
    /**
     *Total number of records
     */
    totalCount?: number;
    /**
     *Response data
     */
    data: Array<RolePermissionListDto>;
};

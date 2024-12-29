/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RoleDto } from './RoleDto';

export type RolePagingDto = {
    /**
     *Total number of records
     */
    totalCount: number;
    /**
     *Response data
     */
    list: Array<RoleDto>;
};

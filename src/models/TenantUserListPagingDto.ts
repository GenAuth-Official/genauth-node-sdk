/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TenantUserDto } from './TenantUserDto';

export type TenantUserListPagingDto = {
    /**
     *Total number of records
     */
    totalCount: number;
    /**
     *Response data
     */
    list: Array<TenantUserDto>;
};

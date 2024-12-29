/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TenantCooperatorDto } from './TenantCooperatorDto';

export type TenantCooperatorListPagingDto = {
    /**
     *Total number of records
     */
    totalCount: number;
    /**
     *Response data
     */
    list: Array<TenantCooperatorDto>;
};

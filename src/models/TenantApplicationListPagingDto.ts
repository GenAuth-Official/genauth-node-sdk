/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TenantApplicationDto } from './TenantApplicationDto';

export type TenantApplicationListPagingDto = {
    /**
     *Total number of records
     */
    totalCount: number;
    /**
     *Response data
     */
    list: Array<TenantApplicationDto>;
};

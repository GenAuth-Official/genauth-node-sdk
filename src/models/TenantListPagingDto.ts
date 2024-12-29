/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TenantRespDto } from './TenantRespDto';

export type TenantListPagingDto = {
    /**
     *Total number of records
     */
    totalCount: number;
    /**
     *Response data
     */
    list: Array<TenantRespDto>;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PublicAccountDto } from './PublicAccountDto';

export type PublicAccountPagingDto = {
    /**
     *Total number of records
     */
    totalCount: number;
    /**
     * Data list
     */
    list: Array<PublicAccountDto>;
};

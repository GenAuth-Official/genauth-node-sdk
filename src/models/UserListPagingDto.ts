/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RiskListItemDto } from './RiskListItemDto';

export type UserListPagingDto = {
    /**
     *Total number of records
     */
    totalCount: number;
    /**
     * Data list
     */
    list: Array<RiskListItemDto>;
};

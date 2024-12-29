/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrganizationDto } from './OrganizationDto';

export type OrganizationPagingDto = {
    /**
     *Total number of records
     */
    totalCount: number;
    /**
     *Response data
     */
    list: Array<OrganizationDto>;
};

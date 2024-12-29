/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DepartmentSortingDto } from './DepartmentSortingDto';
import type { SearchDepartmentsFilterItemDto } from './SearchDepartmentsFilterItemDto';

export type SearchDepartmentsListReqDto = {
    /**
     *Organization code
     */
    organizationCode: string;
    /**
     * Whether to obtain custom data
     */
    withCustomData?: boolean;
    /**
     * Whether to obtain department information
     */
    withPost?: boolean;
    /**
     * Current page number, starting from 1
     */
    page?: number;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: number;
    /**
     * Advanced search
     */
    advancedFilter?: Array<SearchDepartmentsFilterItemDto>;
    /**
     * Sort by, such as update time or creation time
     */
    sortBy?: SearchDepartmentsListReqDto.sortBy;
    /**
     * ascending or descending order
     */
    orderBy?: SearchDepartmentsListReqDto.orderBy;
    /**
     * Sorting settings, you can set multiple items to sort by multiple fields
     */
    sort?: Array<DepartmentSortingDto>;
    /**
     * Tenant ID
     */
    tenantId?: string;
};

export namespace SearchDepartmentsListReqDto {

    /**
     * Sort by, such as update time or creation time
     */
    export enum sortBy {
        UPDATED_AT = 'updatedAt',
        CREATED_AT = 'createdAt',
    }

    /**
     * ascending or descending order
     */
    export enum orderBy {
        ASC = 'ASC',
        DESC = 'DESC',
    }


}

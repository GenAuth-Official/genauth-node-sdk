/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SearchDepartmentsFilterItemDto = {
    /**
     * Advanced search for specified department fields:
     * - `updatedAt`: updated time, please use timestamp for advanced search
     * - `createdAt`: creation time, please use timestamp for advanced search
     * - `name`: department name
     *
     */
    field: string;
    /**
     * operator, optional values are:
     * - `EQUAL`: Congruent, suitable for identical matching of numbers and strings
     * - `IN`: is an element in an array
     * - `GREATER`: greater than or equal to, suitable for comparison of numeric and date type data
     * - `LESSER`: less than or equal to, suitable for comparison of numeric and date type data
     * - `BETWEEN`: between what and what, suitable for comparison of numeric and date type data
     * - `CONTAINS`: string contains
     *
     */
    operator: SearchDepartmentsFilterItemDto.operator;
    /**
     * Search value, different `field` may correspond to different `value` types
     */
    value?: any;
};

export namespace SearchDepartmentsFilterItemDto {

    /**
     * operator, optional values are:
     * - `EQUAL`: Congruent, suitable for identical matching of numbers and strings
     * - `IN`: is an element in an array
     * - `GREATER`: greater than or equal to, suitable for comparison of numeric and date type data
     * - `LESSER`: less than or equal to, suitable for comparison of numeric and date type data
     * - `BETWEEN`: between what and what, suitable for comparison of numeric and date type data
     * - `CONTAINS`: string contains
     *
     */
    export enum operator {
        BETWEEN = 'BETWEEN',
        EQUAL = 'EQUAL',
        IN = 'IN',
        LESSER = 'LESSER',
        GREATER = 'GREATER',
        CONTAINS = 'CONTAINS',
    }


}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PaginationDto = {
    /**
     * Current page number, starting from 1
     */
    page?: number;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: number;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MetadataGroupDto = {
    /**
     * group id
     */
    groupId: string;
    /**
     * Keyword
     */
    keyword?: string;
    /**
     * Sorting conditions
     */
    sort?: Array<any>;
    /**
     * Current page number, starting from 1
     */
    page?: number;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: number;
    /**
     * Whether to return nested related data
     */
    getNestData?: boolean;
};

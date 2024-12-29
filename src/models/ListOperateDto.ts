/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Operation management list (paging)
 */
export type ListOperateDto = {
    /**
     *modelId
     */
    modelId?: any;
    /**
     *Search function name
     */
    keywords?: any;
    /**
     *Related field id
     */
    fieldId?: any;
    /**
     * Whether to return user-created operations, only valid when fieldId is passed
     */
    showCreated?: any;
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: any;
};

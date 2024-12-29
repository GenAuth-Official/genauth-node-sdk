/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get row related data
 */
export type GetRowRelationDto = {
    /**
     * function id
     */
    modelId?: any;
    /**
     * field id
     */
    fieldId?: any;
    /**
     * row id
     */
    rowId?: any;
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: any;
};

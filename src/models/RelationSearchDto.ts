/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RelationSearchDto = {
    /**
     *Related field id
     */
    fieldId: string;
    /**
     * function id
     */
    modelId: string;
    /**
     * Keyword
     */
    keywords?: string;
    /**
     * Current page number, starting from 1
     */
    page?: number;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: number;
    /**
     * Whether to use field id as key in the return result
     */
    showFieldId?: boolean;
};

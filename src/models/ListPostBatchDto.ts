/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListPostBatchDto = {
    /**
     * Search position code or name
     */
    keywords?: string;
    /**
     * Whether to count the number of departments and users associated with the position
     */
    skipCount?: boolean;
    /**
     * Current page number, starting from 1
     */
    page?: number;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: number;
    /**
     * Whether to display metadata content
     */
    withMetadata?: boolean;
    /**
     * Whether to obtain custom data
     */
    withCustomData?: boolean;
    /**
     * Whether to flatten the extended field
     */
    flatCustomData?: boolean;
    /**
     * Whether to not display the fieldId field of metadata
     */
    metadataNoFieldId?: boolean;
    /**
     * Jobs created after this time
     */
    createdAfter?: number;
    /**
     * Jobs created before this time
     */
    createdBefore?: number;
    /**
     *Positions updated after this time
     */
    updatedAfter?: number;
    /**
     *Positions updated before this time
     */
    updatedBefore?: number;
    /**
     * Position code array
     */
    postCodes?: Array<string>;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Job list
 */
export type ListPostDto = {
    /**
     * Search position code or name
     */
    keywords?: any;
    /**
     * Whether to count the number of departments and users associated with the position
     */
    skipCount?: any;
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: any;
    /**
     * Whether to display metadata content
     */
    withMetadata?: any;
    /**
     * Whether to obtain custom data
     */
    withCustomData?: any;
    /**
     * Whether to flatten the extended field
     */
    flatCustomData?: any;
    /**
     * Whether to not display the fieldId field of metadata
     */
    metadataNoFieldId?: any;
    /**
     * Jobs created after this time
     */
    createdAfter?: any;
    /**
     * Jobs created before this time
     */
    createdBefore?: any;
    /**
     *Positions updated after this time
     */
    updatedAfter?: any;
    /**
     *Positions updated before this time
     */
    updatedBefore?: any;
};

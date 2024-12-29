/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CombineFiltersBaseDto } from './CombineFiltersBaseDto';

export type PaginationInvitationPolicyQueryDto = {
    /**
     * Current page number, starting from 1
     */
    page?: number;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: number;
    /**
     * For fuzzy search based on the name or ID of the policy, optional.
     */
    keywords?: string;
    /**
     * Complex filter conditions
     */
    filter?: CombineFiltersBaseDto;
    /**
     * Whether to return the creator details
     */
    withCreatorDetail?: boolean;
};

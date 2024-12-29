/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CombineFiltersBaseDto } from './CombineFiltersBaseDto';

export type ListInvitationRosterByPolicyIdDto = {
    /**
     * Policy ID.
     */
    policyId: string;
    /**
     * Current page number, starting from 1
     */
    page?: number;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: number;
    /**
     * For fuzzy search based on name or ID of a list, optional.
     */
    keywords?: string;
    /**
     * Advanced filters
     */
    filter?: CombineFiltersBaseDto;
    /**
     * Whether to return the creator details
     */
    withCreatorDetail?: boolean;
    /**
     * Whether to return the number of users associated with the list, optional.
     */
    withUserCount?: boolean;
    /**
     * Whether to return the policies associated with the list, optional.
     */
    withAssignedPolicy?: boolean;
};

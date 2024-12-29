/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CombineFiltersBaseDto } from './CombineFiltersBaseDto';

export type QuickFilterInvitationUserDto = {
    /**
     * Current page number, starting from 1
     */
    page?: number;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: number;
    /**
     * For fuzzy search based on list name or invitee ID, optional.
     */
    keywords?: string;
    /**
     * Advanced filters
     */
    filter?: CombineFiltersBaseDto;
};

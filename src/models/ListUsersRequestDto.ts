/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListUsersAdvancedFilterItemDto } from './ListUsersAdvancedFilterItemDto';
import type { ListUsersOptionsDto } from './ListUsersOptionsDto';

export type ListUsersRequestDto = {
    /**
     * Fuzzy search keywords
     */
    keywords?: string;
    /**
     * Advanced search
     */
    advancedFilter?: Array<ListUsersAdvancedFilterItemDto>;
    /**
     * Use ES query statements to execute search commands
     */
    searchQuery?: any;
    /**
     * Optional
     */
    options?: ListUsersOptionsDto;
};

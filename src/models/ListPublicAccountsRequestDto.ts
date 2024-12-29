/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListPublicAccountsAdvancedFilterItemDto } from './ListPublicAccountsAdvancedFilterItemDto';
import type { ListPublicAccountsOptionsDto } from './ListPublicAccountsOptionsDto';

export type ListPublicAccountsRequestDto = {
    /**
     * Fuzzy search keywords
     */
    keywords?: string;
    /**
     * Advanced search
     */
    advancedFilter?: Array<ListPublicAccountsAdvancedFilterItemDto>;
    /**
     * Use ES query statements to execute search commands
     */
    searchQuery?: any;
    /**
     * Optional
     */
    options?: ListPublicAccountsOptionsDto;
};

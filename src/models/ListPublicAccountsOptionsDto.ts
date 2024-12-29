/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaginationDto } from './PaginationDto';
import type { SortingDto } from './SortingDto';

export type ListPublicAccountsOptionsDto = {
    /**
     *Paging configuration
     */
    pagination?: PaginationDto;
    /**
     * Sorting settings, you can set multiple items to sort by multiple fields
     */
    sort?: Array<SortingDto>;
    /**
     * Fuzzy search matching public account field, optional values are:
     * - `phone`: public account mobile phone number, which cannot include the mobile phone number area code. It is included by default.
     * - `email`: public account email, included by default
     * - `name`: public account name, included by default
     * - `username`: username, contains by default
     * - `nickname`: Public account nickname, included by default
     * - `id`: public account ID
     * - `company`: company
     * - `givenName`: first name
     * - `familyName`: surname
     * - `middleName`: middle name
     * - `preferredUsername`: Preferred Username
     * - `profile`: personal information
     * - `website`: personal website
     * - `address`: address
     * - `formatted`: formatted address
     * - `streetAddress`: street address
     * - `postalCode`: postal code number
     *
     */
    fuzzySearchOn?: Array<'id' | 'phone' | 'email' | 'name' | 'username' | 'externalId' | 'nickname' | 'company' | 'givenName' | 'familyName' | 'middleName' | ' profile' | 'preferredUsername' | 'website' | 'address' | 'formatted' | 'streetAddress' | 'postalCode' | 'identityNumber'>;
    /**
     * Whether to obtain custom data
     */
    withCustomData?: boolean;
    /**
     * Whether to obtain the department ID list
     */
    withDepartmentIds?: boolean;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaginationDto } from './PaginationDto';
import type { SortingDto } from './SortingDto';

export type ListUsersOptionsDto = {
    /**
     *Paging configuration
     */
    pagination?: PaginationDto;
    /**
     * Sorting settings, you can set multiple items to sort by multiple fields
     */
    sort?: Array<SortingDto>;
    /**
     * Fuzzy search matching user fields, optional values are:
     * - `phone`: User’s mobile phone number, which cannot include the mobile phone number area code. It is included by default.
     * - `email`: user's email address, included by default
     * - `name`: user name, contains by default
     * - `username`: username, contains by default
     * - `nickname`: User nickname, included by default
     * - `id`: user ID
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
     * Whether to obtain department information
     */
    withPost?: boolean;
    /**
     * Whether to obtain identities
     */
    withIdentities?: boolean;
    /**
     * Whether to obtain the department ID list
     */
    withDepartmentIds?: boolean;
    /**
     * Whether to flatten the extended field
     */
    flatCustomData?: boolean;
};

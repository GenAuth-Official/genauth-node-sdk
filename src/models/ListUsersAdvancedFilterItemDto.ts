/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListUsersAdvancedFilterItemDto = {
    /**
     * Advanced search for specified user fields:
     * - `id`: user ID
     * - `phone`: mobile phone number
     * - `email`: email
     * - `username`: username
     * - `externalId`: the user's ID in the external system
     * - `name`: name
     * - `status`: user status, optional values are `Activated` and `Suspended`
     * - `gender`: User gender, optional values are `M` (male), `F` (female) and `U` (unknown)
     * - `birthdate`: date of birth
     * - `givenName`: first name
     * - `familyName`: surname
     * - `preferredUsername`: Preferred Username
     * - `profile`: personal information
     * - `country`: country
     * - `province`: province
     * - `zoneinfo`: time zone
     * - `website`: personal website
     * - `address`: address
     * - `streetAddress`: street address
     * - `company`: company
     * - `postalCode`: postal code
     * - `formatted`: formatted address
     * - `signedUp`: registration time
     * - `locale`: language information
     * - `lastLogin`: the last login time, which is a timestamp type
     * - `loginsCount`: Number of logins, numeric type
     * - `lastLoginApp`: Last logged in application ID
     * - `userSource`: user source, see examples for specific usage
     * - `department`: user department, see examples for specific usage
     * - `loggedInApps`: applications that have been logged in, see examples for specific usage
     * - `identity`: user’s external identity source information, see examples for specific usage
     * - ... other custom fields
     *
     */
    field: string;
    /**
     * operator, optional values are:
     * - `EQUAL`: Congruent, suitable for identical matching of numbers and strings
     * - `NOT_EQUAL`: Not equal, suitable for matching numbers and strings
     * - `CONTAINS`: string contains
     * - `NOT_CONTAINS`: string does not contain
     * - `IS_NULL`: is empty
     * - `NOT_NULL`: not empty
     * - `IN`: is an element in an array
     * - `GREATER`: greater than or equal to, suitable for comparison of numeric and date type data
     * - `LESSER`: less than or equal to, suitable for comparison of numeric and date type data
     * - `BETWEEN`: between what and what, suitable for comparison of numeric and date type data
     *
     */
    operator: ListUsersAdvancedFilterItemDto.operator;
    /**
     * Search value. The `value` types corresponding to different `field` may be different. See the example for details.
     */
    value?: any;
};

export namespace ListUsersAdvancedFilterItemDto {

    /**
     * operator, optional values are:
     * - `EQUAL`: Congruent, suitable for identical matching of numbers and strings
     * - `NOT_EQUAL`: Not equal, suitable for matching numbers and strings
     * - `CONTAINS`: string contains
     * - `NOT_CONTAINS`: string does not contain
     * - `IS_NULL`: is empty
     * - `NOT_NULL`: not empty
     * - `IN`: is an element in an array
     * - `GREATER`: greater than or equal to, suitable for comparison of numeric and date type data
     * - `LESSER`: less than or equal to, suitable for comparison of numeric and date type data
     * - `BETWEEN`: between what and what, suitable for comparison of numeric and date type data
     *
     */
    export enum operator {
        EQUAL = 'EQUAL',
        NOT_EQUAL = 'NOT_EQUAL',
        CONTAINS = 'CONTAINS',
        NOT_CONTAINS = 'NOT_CONTAINS',
        IS_NULL = 'IS_NULL',
        NOT_NULL = 'NOT_NULL',
        IN = 'IN',
        GREATER = 'GREATER',
        LESSER = 'LESSER',
        BETWEEN = 'BETWEEN',
    }


}

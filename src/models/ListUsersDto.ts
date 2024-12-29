/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get user list interface, support paging, you can choose to get custom data, identities, etc.
 */
export type ListUsersDto = {
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: any;
    /**
     * The current status of the account, such as deactivated, resigned, normal status, archived
     */
    status?: any;
    /**
     * The start time of user creation and modification is a UNIX timestamp accurate to the second; supports obtaining incremental data after a certain period of time
     */
    updatedAtStart?: any;
    /**
     * The user creation and modification termination time is a UNIX timestamp accurate to the second; it supports obtaining incremental data within a certain period of time. Defaults to current time
     */
    updatedAtEnd?: any;
    /**
     * Whether to obtain custom data
     */
    withCustomData?: any;
    /**
     * Whether to obtain department information
     */
    withPost?: any;
    /**
     * Whether to obtain identities
     */
    withIdentities?: any;
    /**
     * Whether to obtain the department ID list
     */
    withDepartmentIds?: any;
    /**
     * Whether to obtain the user password expiration time
     */
    withUserPasswordExpireTime?: any;
};

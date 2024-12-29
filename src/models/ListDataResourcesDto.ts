/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * To obtain the data resource list, you can specify and filter by the data resource name, data resource Code, and the permission space code list to which the data resource belongs.
 */
export type ListDataResourcesDto = {
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: any;
    /**
     * Keyword search, which can be data resource name or data resource Code
     */
    query?: any;
    /**
     * List of permission space codes to which permission data belongs
     */
    namespaceCodes?: any;
};

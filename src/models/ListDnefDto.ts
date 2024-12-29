/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get the extended field list of tree type resources
 */
export type ListDnefDto = {
    /**
     * The permission space code to which the data resource belongs
     */
    namespaceCode?: any;
    /**
     * Data resource Code, unique in the permission space
     */
    resourceCode?: any;
    /**
     * Starting index, default is 1, starting from item 1
     */
    startIndex?: any;
    /**
     * The maximum number of items in a single query cannot exceed 50, and the default is 10
     */
    maxSize?: any;
    /**
     * Keyword search, which can be a unique identifier of a field or a display name
     */
    query?: any;
};

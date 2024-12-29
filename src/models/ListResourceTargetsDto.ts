/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListResourceTargetsDto = {
    /**
     * List of data resource paths to which the data strategy belongs
     */
    resources: Array<string>;
    /**
     * Data resource permission operation list
     */
    actions: Array<string>;
    /**
     * Permission space Code
     */
    namespaceCode: string;
};

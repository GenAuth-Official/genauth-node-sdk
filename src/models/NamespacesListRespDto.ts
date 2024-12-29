/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NamespacesListRespDto = {
    /**
     * Permission group name
     */
    name: string;
    /**
     * Permission grouping code
     */
    code: string;
    /**
     * Permission group description information
     */
    description?: string;
    /**
     * Permission grouping status: 0 -> off, 1 -> on
     */
    status?: number;
};

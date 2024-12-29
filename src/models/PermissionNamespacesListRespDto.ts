/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PermissionNamespacesListRespDto = {
    /**
     * Permission space name
     */
    name: string;
    /**
     * Permission space Code
     */
    code: string;
    /**
     * Permission space description information
     */
    description?: string;
    /**
     * Permission space status: 0 -> closed, 1 -> open
     */
    status?: number;
};

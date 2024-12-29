/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdatePermissionNamespaceDto = {
    /**
     * The old unique identifier of permission group Code
     */
    code: string;
    /**
     * Permission space name
     */
    name?: string;
    /**
     * New unique identifier for permission grouping Code
     */
    newCode?: string;
    /**
     * Permission space description
     */
    description?: string;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RoleListItem = {
    /**
     * The unique identifier of the role within the permission group
     */
    code: string;
    /**
     * Role name within permission group
     */
    name?: string;
    /**
     * Role description
     */
    description?: string;
    /**
     * The code of the permission group (permission space) to which it belongs is not passed to obtain the default permission group.
     */
    namespace?: string;
};

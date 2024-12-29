/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RoleCodeAndNamespaceDto = {
    /**
     * The unique identifier of the role within the permission group (permission space)
     */
    code: string;
    /**
     * The code of the permission group (permission space) to which it belongs
     */
    namespace: string;
};

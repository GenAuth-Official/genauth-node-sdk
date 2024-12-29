/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RoleDto = {
    /**
     * Role ID
     */
    id: string;
    /**
     * Code the unique identifier of the role within the permission group (permission space)
     */
    code: string;
    /**
     * The name of the role in the permission group (permission space)
     */
    name: string;
    /**
     * Role description
     */
    description: string;
    /**
     * The Code of the permission group (permission space) to which it belongs is not passed to obtain the default permission group.
     */
    namespace: string;
    /**
     * The name of the permission group (permission space) to which it belongs
     */
    namespaceName: string;
    /**
     * Role status, ENABLE-means normal, DISABLE-means prohibited
     */
    status?: string;
    /**
     * The role's automatic ban time, in milliseconds, if null is passed, it means it is permanently valid
     */
    disableTime?: number;
    /**
     * Whether it is enabled to apply for permission, and the application must enable SSO single sign-on and unauthorized users can see the application configuration in the application panel
     */
    enablePermissionApply?: boolean;
};

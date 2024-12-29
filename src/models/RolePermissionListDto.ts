/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RolePermissionListDto = {
    /**
     * Role ID
     */
    roleId: string;
    /**
     * Subject status, DISABLE-has not joined the role, ENABLE-has joined the role
     */
    status: string;
    /**
     * The millisecond value of the subject joining time
     */
    enableTime?: number;
    /**
     * The millisecond value of the main body's expiration time, null means it will not expire.
     */
    endTime?: number;
    /**
     * User pool ID to which it belongs
     */
    userPoolId: string;
    /**
     * Character name, up to 50 characters
     */
    roleName: string;
    /**
     * Role code, only letters, numbers and -_ can be used, up to 50 characters
     */
    roleCode: string;
    /**
     * Role description information, up to 200 characters
     */
    description?: string;
    /**
     * Creation time
     */
    createdAt: string;
    /**
     * Update time
     */
    updatedAt: string;
};

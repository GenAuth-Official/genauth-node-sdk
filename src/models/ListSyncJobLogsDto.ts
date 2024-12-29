/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get synchronization job details
 */
export type ListSyncJobLogsDto = {
    /**
     * Sync job ID
     */
    syncJobId?: any;
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: any;
    /**
     * Filter based on whether the operation is successful
     */
    success?: any;
    /**
     * Filter by operation type:
     * - `CreateUser`: Create user
     * - `UpdateUser`: Modify user information
     * - `DeleteUser`: delete user
     * - `UpdateUserIdentifier`: Modify the user's unique identifier
     * - `ChangeUserDepartment`: Modify user department
     * - `CreateDepartment`: Create a department
     * - `UpdateDepartment`: Modify department information
     * - `DeleteDepartment`: delete department
     * - `MoveDepartment`: Move department
     * - `UpdateDepartmentLeader`: synchronization department leader
     * - `CreateGroup`: Create a group
     * - `UpdateGroup`: Modify group
     * - `DeleteGroup`: delete group
     * - `Updateless`: no updates
     *
     */
    action?: any;
    /**
     * Operation object type:
     * - `department`: department
     * - `user`: user
     *
     */
    objectType?: any;
};

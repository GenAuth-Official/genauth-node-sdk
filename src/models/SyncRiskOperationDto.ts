/*istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SyncRiskOperationDto = {
    /**
     * Synchronize task risk operation ID
     */
    syncRiskOperationId: number;
    /**
     * Sync task ID
     */
    syncTaskId: number;
    /**
     * Creation time
     */
    createdAt: string;
    /**
     * Update time
     */
    updatedAt: string;
    /**
     * Execution status:
     * - `PENDING`: pending execution
     * - `SUCCESS`: successful
     * - `FAILED`: failed
     * - `CANCELED`: Canceled
     * - `EXECUTING`: executing
     *
     */
    status: SyncRiskOperationDto.status;
    /**
     * Priority, the smaller the number, the higher the priority.
     */
    level: number;
    /**
     * Operation object type:
     * - `department`: department
     * - `user`: user
     *
     */
    objectType: SyncRiskOperationDto.objectType;
    /**
     * Name of the operation object (user, group, department)
     */
    objectName: string;
    /**
     * Operation object ID
     */
    objectId: string;
    /**
     * Error message for execution failure
     */
    errMsg?: string;
};

export namespace SyncRiskOperationDto {

    /**
     * Execution status:
     * - `PENDING`: pending execution
     * - `SUCCESS`: successful
     * - `FAILED`: failed
     * - `CANCELED`: Canceled
     * - `EXECUTING`: executing
     *
     */
    export enum status {
        PENDING = 'PENDING',
        SUCCESS = 'SUCCESS',
        FAILED = 'FAILED',
        CANCELED = 'CANCELED',
        EXECUTING = 'EXECUTING',
    }

    /**
     * Operation object type:
     * - `department`: department
     * - `user`: user
     *
     */
    export enum objectType {
        DEPARTMENT = 'DEPARTMENT',
        USER = 'USER',
    }


}

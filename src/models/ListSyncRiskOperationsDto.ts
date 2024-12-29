/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get synchronization risk operation list
 */
export type ListSyncRiskOperationsDto = {
    /**
     * Sync task ID
     */
    syncTaskId?: any;
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: any;
    /**
     * Filter based on execution status
     */
    status?: any;
    /**
     *According to the operation object type, all types of records are obtained by default:
     * - `department`: department
     * - `user`: user
     *
     */
    objectType?: any;
};

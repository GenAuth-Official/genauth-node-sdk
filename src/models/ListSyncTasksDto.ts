/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get synchronization task list
 */
export type ListSyncTasksDto = {
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: any;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get synchronization job details
 */
export type ListSyncJobsDto = {
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
     * Synchronization task trigger type:
     * - `manually`: trigger execution manually
     * - `timed`: timed trigger
     * - `automatic`: automatically triggered based on events
     *
     */
    syncTrigger?: any;
};

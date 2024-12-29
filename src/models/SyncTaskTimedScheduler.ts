/*istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SyncTaskTimedScheduler = {
    /**
     * Timing cycle:
     * - `month`: executed once every month
     * - `week`: executed once a week
     * - `days`: executed once a day
     * - `sixHours`: executed every six hours
     * - `twoHours`: executed every two hours
     *
     */
    cycle: SyncTaskTimedScheduler.cycle;
    /**
     * Start time
     */
    startTime: number;
};

export namespace SyncTaskTimedScheduler {

    /**
     * Timing cycle:
     * - `month`: executed once every month
     * - `week`: executed once a week
     * - `days`: executed once a day
     * - `sixHours`: executed every six hours
     * - `twoHours`: executed every two hours
     *
     */
    export enum cycle {
        MONTH = 'month',
        WEEK = 'week',
        DAYS = 'days',
        SIX_HOURS = 'sixHours',
        TWO_HOURS = 'twoHours',
    }


}

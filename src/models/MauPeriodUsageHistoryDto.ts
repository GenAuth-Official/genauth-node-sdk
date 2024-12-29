/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MauPeriodUsageHistoryDto = {
    /**
     * Cycle start time (year, month, day)
     */
    periodStartTime: string;
    /**
     * Cycle end time (year, month, day)
     */
    periodEndTime: string;
    /**
     * The total number of mau used in the current cycle
     */
    amount: string;
    /**
     * The number of mau used in the current cycle
     */
    current: string;
};

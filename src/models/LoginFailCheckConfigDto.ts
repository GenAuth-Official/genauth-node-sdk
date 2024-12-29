/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LoginFailCheckConfigDto = {
    /**
     * Whether to enable the limit on the number of failed logins.
     */
    enabled: boolean;
    /**
     * Within a certain period of time, for the same IP, the maximum number of failed logins will trigger the security policy.
     */
    limit: number;
    /**
     *Limited cycle time length, unit is seconds.
     */
    timeInterval: number;
    /**
     * Time length unit. Second/Minute/Hour/Day, only for display, the unit of timeInterval is still seconds.
     */
    unit?: string;
};

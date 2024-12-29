/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LoginPassowrdFailCheckConfigDto = {
    /**
     * Whether to enable login password error restrictions
     */
    enabled: boolean;
    /**
     *Maximum number of incorrect passwords
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

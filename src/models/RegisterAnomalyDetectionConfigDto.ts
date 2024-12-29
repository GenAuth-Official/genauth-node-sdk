/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RegisterAnomalyDetectionConfigDto = {
    /**
     * Whether to enable frequent registration restrictions
     */
    enabled: boolean;
    /**
     * Within a certain period of time, the same IP can only be registered a maximum number of times.
     */
    limit: number;
    /**
     *Limited cycle time length, unit is seconds.
     */
    timeInterval: number;
};

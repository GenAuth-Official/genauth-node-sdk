/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WebhookRetryConfigV3Dto = {
    /**
     * Whether to enable retry on failure
     */
    enabled: boolean;
    /**
     * Number of failed retries
     */
    count?: number;
    /**
     * Failure retry interval
     */
    delay?: number;
    /**
     * Failure retry interval unit
     */
    delayUnit?: WebhookRetryConfigV3Dto.delayUnit;
};

export namespace WebhookRetryConfigV3Dto {

    /**
     * Failure retry interval unit
     */
    export enum delayUnit {
        SECOND = 'Second',
        MINUTE = 'Minute',
        HOUR = 'Hour',
        DAY = 'Day',
    }


}

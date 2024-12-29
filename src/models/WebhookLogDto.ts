/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WebhookLogDto = {
    /**
     * Webhook ID
     */
    webhookId: string;
    /**
     * Webhook event name
     */
    eventName: string;
    /**
     * Webhook request body
     */
    requestBody: any;
    /**
     * Webhook request header
     */
    requestHeaders: any;
    /**
     * Webhook response code
     */
    responseStatusCode: number;
    /**
     * Webhook response header
     */
    responseHeaders: any;
    /**
     * Webhook response body
     */
    responseBody: any;
    /**
     * timestamp
     */
    timestamp: string;
    /**
     * Whether the request is successful
     */
    success: boolean;
    /**
     * Error message returned when the request fails
     */
    errorMessage?: string;
};

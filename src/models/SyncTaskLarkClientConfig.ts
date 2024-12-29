/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SyncTaskLarkClientConfig = {
    /**
     * Feishu App App ID
     */
    app_id: string;
    /**
     * Feishu App App Secret
     */
    app_secret: string;
    /**
     * The Encrypt Key for Feishu event subscription can be obtained from the "Event Subscription" page of Feishu Open Platform application details. If you need to enable real-time synchronization, this parameter is required.
     */
    encrypt_key?: string;
    /**
     * The Verification Token for Feishu event subscription can be obtained from the "Event Subscription" page of Feishu Open Platform application details. If you need to enable real-time synchronization, this parameter is required.
     */
    verification_token?: string;
};

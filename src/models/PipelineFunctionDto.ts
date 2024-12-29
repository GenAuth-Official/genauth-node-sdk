/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LastExecuteStatus } from './LastExecuteStatus';

export type PipelineFunctionDto = {
    /**
     * Function ID
     */
    funcId: string;
    /**
     * function name
     */
    funcName: string;
    /**
     * Function description
     */
    funcDescription?: string;
    /**
     * Function trigger scenario:
     * - `PRE_REGISTER`: before registration
     * - `POST_REGISTER`: after registration
     * - `PRE_AUTHENTICATION`: before authentication
     * - `POST_AUTHENTICATION`: after authentication
     * - `PRE_OIDC_ID_TOKEN_ISSUED`: before OIDC ID Token issuance
     * - `PRE_OIDC_ACCESS_TOKEN_ISSUED`: before OIDC Access Token issuance
     * - `PRE_COMPLETE_USER_INFO`: before completing user information
     *
     */
    scene: PipelineFunctionDto.scene;
    /**
     * Function creation time
     */
    createdAt: string;
    /**
     * Function modification time
     */
    updatedAt: string;
    /**
     * Whether to execute asynchronously. Functions set for asynchronous execution will not block the execution of the entire process and are suitable for asynchronous notification scenarios, such as Feishu group notifications, DingTalk group notifications, etc.
     */
    isAsynchronous: boolean;
    /**
     * Function running timeout, the minimum is 1 second, the maximum is 60 seconds, the default is 3 seconds.
     */
    timeout: number;
    /**
     * If the function times out, whether to terminate the entire process, the default is no.
     */
    terminateOnTimeout: boolean;
    /**
     * Function source code
     */
    sourceCode: string;
    /**
     * Current status of function:
     * - `uploading`: Uploading
     * - `success`: upload successful
     * - `failed`: upload failed
     *
     */
    status: PipelineFunctionDto.status;
    /**
     * Error message when upload fails
     */
    uploadErrMsg?: string;
    /**
     * Whether this Pipeline is enabled
     */
    enabled: boolean;
    /**
     * Whether it is a cloud function
     */
    isCloud: boolean;
    /**
     * Last execution status
     */
    lastExecuteStatus: LastExecuteStatus;
};

export namespace PipelineFunctionDto {

    /**
     * Function trigger scenario:
     * - `PRE_REGISTER`: before registration
     * - `POST_REGISTER`: after registration
     * - `PRE_AUTHENTICATION`: before authentication
     * - `POST_AUTHENTICATION`: after authentication
     * - `PRE_OIDC_ID_TOKEN_ISSUED`: before OIDC ID Token issuance
     * - `PRE_OIDC_ACCESS_TOKEN_ISSUED`: before OIDC Access Token issuance
     * - `PRE_COMPLETE_USER_INFO`: before completing user information
     *
     */
    export enum scene {
        PRE_REGISTER = 'PRE_REGISTER',
        POST_REGISTER = 'POST_REGISTER',
        PRE_AUTHENTICATION = 'PRE_AUTHENTICATION',
        POST_AUTHENTICATION = 'POST_AUTHENTICATION',
        PRE_OIDC_ID_TOKEN_ISSUED = 'PRE_OIDC_ID_TOKEN_ISSUED',
        PRE_OIDC_ACCESS_TOKEN_ISSUED = 'PRE_OIDC_ACCESS_TOKEN_ISSUED',
        PRE_COMPLETE_USER_INFO = 'PRE_COMPLETE_USER_INFO',
        PRE_MFA_VERIFY = 'PRE_MFA_VERIFY',
        POST_MFA_VERIFY = 'POST_MFA_VERIFY',
    }

    /**
     * Current status of function:
     * - `uploading`: Uploading
     * - `success`: upload successful
     * - `failed`: upload failed
     *
     */
    export enum status {
        UPLOADING = 'uploading',
        SUCCESS = 'success',
        FAILED = 'failed',
    }


}

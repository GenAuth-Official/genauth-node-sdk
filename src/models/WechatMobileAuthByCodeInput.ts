/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WechatMobileAuthByCodeInput = {
    /**
     * Client WeChat authorization is successful, WeChat returns the current authentication authorization code
     */
    code: string;
    /**
     * Application ID
     */
    appId?: string;
    /**
     * Identity source connection ID
     */
    connId?: string;
};

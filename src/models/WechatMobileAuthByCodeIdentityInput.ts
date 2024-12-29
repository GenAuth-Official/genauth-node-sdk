/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SignInOptionsDto } from './SignInOptionsDto';

export type WechatMobileAuthByCodeIdentityInput = {
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
    /**
     * Login parameters
     */
    options?: SignInOptionsDto;
};

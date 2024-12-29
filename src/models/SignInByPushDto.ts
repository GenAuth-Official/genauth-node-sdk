/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SignInByPushOptionsDto } from './SignInByPushOptionsDto';

export type SignInByPushDto = {
    /**
     * User account (username/mobile phone number/email)
     */
    account: string;
    /**
     * Optional parameters
     */
    options?: SignInByPushOptionsDto;
};

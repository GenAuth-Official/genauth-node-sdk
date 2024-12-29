/*istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SignInByWechatMiniProgramCodePayloadDto } from './SignInByWechatMiniProgramCodePayloadDto';
import type { SignInByWechatMiniProgramPhoneInfoPayloadDto } from './SignInByWechatMiniProgramPhoneInfoPayloadDto';

export type SignInByWechatMiniProgramCodeAndPhonePayloadDto = {
    /**
     * WeChat applet uses code to log in relevant data, required
     */
    wxLoginInfo: SignInByWechatMiniProgramCodePayloadDto;
    /**
     * Required, WeChat applet users are authorized to use their mobile phone numbers to log in relevant data. If a new user registers to the user pool, the mobile phone number will be updated to the user information simultaneously; if the user pool user already exists, if the user has not bound a mobile phone number and the mobile phone number authorized by the mini program has not been bound, the mobile phone number will be The mobile phone number is updated to the user information.
     */
    wxPhoneInfo: SignInByWechatMiniProgramPhoneInfoPayloadDto;
};

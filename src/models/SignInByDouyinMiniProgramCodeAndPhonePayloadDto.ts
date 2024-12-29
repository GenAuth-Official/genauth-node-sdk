/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SignInByDouyinMiniProgramCodePayloadDto } from './SignInByDouyinMiniProgramCodePayloadDto';
import type { SignInByDouyinMiniProgramPhoneInfoPayloadDto } from './SignInByDouyinMiniProgramPhoneInfoPayloadDto';

export type SignInByDouyinMiniProgramCodeAndPhonePayloadDto = {
    /**
     * Douyin applet uses code to log in related data, such as user data obtained using `tt.getUserProfile`, required
     */
    loginParams: SignInByDouyinMiniProgramCodePayloadDto;
    /**
     * Required, Douyin applet users are authorized to use their mobile phone numbers to log in relevant data. If a new user is registered in the user pool, the mobile phone number will be updated to the user information simultaneously; if the user in the user pool already exists, if the user has not bound a mobile phone number and the mobile phone number authorized by the mini program has not been bound, the mobile phone number will be The mobile phone number is updated to the user information.
     */
    phoneParams: SignInByDouyinMiniProgramPhoneInfoPayloadDto;
};

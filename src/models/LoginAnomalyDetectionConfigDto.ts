/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LoginFailCheckConfigDto } from './LoginFailCheckConfigDto';
import type { LoginIpWhitelistCheckConfigDto } from './LoginIpWhitelistCheckConfigDto';
import type { LoginPassowrdFailCheckConfigDto } from './LoginPassowrdFailCheckConfigDto';

export type LoginAnomalyDetectionConfigDto = {
    /**
     * Login security policy. What strategy is used when a user triggers login failure frequency detection. Currently, two strategies, verification code and account lock, are supported. When selecting the account locking policy, only "Login password error restriction" can be turned on. This field is marked as obsolete, but this field is still required. If you use new version logic, you can write one by default. The new version uses accountLock for account locking and robotVerify for verification code.
     */
    loginFailStrategy: LoginAnomalyDetectionConfigDto.loginFailStrategy;
    /**
     * Human-machine verification (captcha) strategy. Optional value, disable (not turned on)/condition_set (condition turned on)/always_enable (always turned on)
     */
    robotVerify: string;
    /**
     * Account lockout policy. Optional value, disable (not turned on)/condition_set (condition turned on)
     */
    accountLock: string;
    /**
     * Limit on the number of failed logins: When a user logs in and enters incorrect information, the corresponding policy will be triggered according to the "Login Security Policy" rules.
     */
    loginFailCheck: LoginFailCheckConfigDto;
    /**
     * Incorrect login password restrictions: When a user logs in and enters incorrect password information, the corresponding policy will be triggered according to the "Login Security Policy" rules. This field is marked as obsolete, see accountLockLoginPasswordFailCheck/ robotVerifyLoginPasswordFailCheck
     */
    loginPasswordFailCheck: LoginPassowrdFailCheckConfigDto;
    /**
     * Account lock-incorrect login password restriction: When a user logs in and enters incorrect password information, the corresponding policy will be triggered according to the "Login Security Policy" rules.
     */
    accountLockLoginPasswordFailCheck?: LoginPassowrdFailCheckConfigDto;
    /**
     * Human-machine verification (verification code) - Login password error restriction: When a user logs in and enters incorrect password information, the corresponding policy will be triggered according to the "Login Security Policy" rules.
     */
    robotVerifyLoginPasswordFailCheck: LoginPassowrdFailCheckConfigDto;
    /**
     * Human-machine verification (verification code) - IP whitelist: When the login IP is not in the whitelist, human-machine verification will be triggered.
     */
    robotVerifyLoginIpWhitelistCheck: LoginIpWhitelistCheckConfigDto;
    /**
     * Whether to enable login time limit
     */
    robotVerifyLoginTimeCheckEnable: boolean;
    /**
     * Login time limit day of the week + starting time array
     */
    robotVerifyloginWeekStartEndTime: Array<string>;
};

export namespace LoginAnomalyDetectionConfigDto {

    /**
     * Login security policy. What strategy is used when a user triggers login failure frequency detection. Currently, two strategies, verification code and account lock, are supported. When selecting the account locking policy, only "Login password error restriction" can be turned on. This field is marked as obsolete, but this field is still required. If you use new version logic, you can write one by default. The new version uses accountLock for account locking and robotVerify for verification code.
     */
    export enum loginFailStrategy {
        CAPTCHA = 'captcha',
        BLOCK_ACCOUNT = 'block-account',
    }


}

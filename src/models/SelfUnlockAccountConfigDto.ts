/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SelfUnlockAccountConfigDto = {
    /**
     * Whether to allow users to unlock accounts by themselves.
     */
    enabled: boolean;
    /**
     * Self-service unlocking method currently supports original password + verification code and verification code.
     */
    strategy: SelfUnlockAccountConfigDto.strategy;
};

export namespace SelfUnlockAccountConfigDto {

    /**
     * Self-service unlocking method currently supports original password + verification code and verification code.
     */
    export enum strategy {
        CAPTCHA = 'captcha',
        PASSWORD_CAPTCHA = 'password-captcha',
    }


}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PreCheckEmailCodeDto = {
    /**
     * Email, not case sensitive
     */
    email: string;
    /**
     * Email verification code
     */
    passCode: string;
    /**
     * SMS channel, specify the purpose of sending this SMS, such as CHANNEL_LOGIN for login, CHANNEL_REGISTER for registration.
     */
    channel: PreCheckEmailCodeDto.channel;
};

export namespace PreCheckEmailCodeDto {

    /**
     * SMS channel, specify the purpose of sending this SMS, such as CHANNEL_LOGIN for login, CHANNEL_REGISTER for registration.
     */
    export enum channel {
        CHANNEL_LOGIN = 'CHANNEL_LOGIN',
        CHANNEL_REGISTER = 'CHANNEL_REGISTER',
        CHANNEL_RESET_PASSWORD = 'CHANNEL_RESET_PASSWORD',
        CHANNEL_VERIFY_EMAIL_LINK = 'CHANNEL_VERIFY_EMAIL_LINK',
        CHANNEL_UPDATE_EMAIL = 'CHANNEL_UPDATE_EMAIL',
        CHANNEL_BIND_EMAIL = 'CHANNEL_BIND_EMAIL',
        CHANNEL_UNBIND_EMAIL = 'CHANNEL_UNBIND_EMAIL',
        CHANNEL_VERIFY_MFA = 'CHANNEL_VERIFY_MFA',
        CHANNEL_UNLOCK_ACCOUNT = 'CHANNEL_UNLOCK_ACCOUNT',
        CHANNEL_COMPLETE_EMAIL = 'CHANNEL_COMPLETE_EMAIL',
        CHANNEL_DELETE_ACCOUNT = 'CHANNEL_DELETE_ACCOUNT',
    }


}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SendEmailDto = {
    /**
     * SMS channel, specify the purpose of sending this SMS:
     * - `CHANNEL_LOGIN`: used for user login
     * - `CHANNEL_REGISTER`: used for user registration
     * - `CHANNEL_RESET_PASSWORD`: used to reset password
     * - `CHANNEL_VERIFY_EMAIL_LINK`: used to verify email address
     * - `CHANNEL_UPDATE_EMAIL`: used to modify email
     * - `CHANNEL_BIND_EMAIL`: used to bind email
     * - `CHANNEL_UNBIND_EMAIL`: used to unbind email
     * - `CHANNEL_VERIFY_MFA`: used to verify MFA
     * - `CHANNEL_UNLOCK_ACCOUNT`: used for self-service unlocking
     * - `CHANNEL_COMPLETE_EMAIL`: used to complete email information when registering/logging in
     * - `CHANNEL_DELETE_ACCOUNT`: used to cancel account
     *
     */
    channel: SendEmailDto.channel;
    /**
     * Email, not case sensitive
     */
    email: string;
};

export namespace SendEmailDto {

    /**
     * SMS channel, specify the purpose of sending this SMS:
     * - `CHANNEL_LOGIN`: used for user login
     * - `CHANNEL_REGISTER`: used for user registration
     * - `CHANNEL_RESET_PASSWORD`: used to reset password
     * - `CHANNEL_VERIFY_EMAIL_LINK`: used to verify email address
     * - `CHANNEL_UPDATE_EMAIL`: used to modify email
     * - `CHANNEL_BIND_EMAIL`: used to bind email
     * - `CHANNEL_UNBIND_EMAIL`: used to unbind email
     * - `CHANNEL_VERIFY_MFA`: used to verify MFA
     * - `CHANNEL_UNLOCK_ACCOUNT`: used for self-service unlocking
     * - `CHANNEL_COMPLETE_EMAIL`: used to complete email information when registering/logging in
     * - `CHANNEL_DELETE_ACCOUNT`: used to cancel account
     *
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

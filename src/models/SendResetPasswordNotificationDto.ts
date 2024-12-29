/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SendResetPasswordNotificationDto = {
    /**
     * Whether to send user default email notification after resetting password
     */
    sendDefaultEmailNotification?: boolean;
    /**
     * After resetting the password, whether to send the user default SMS notification
     */
    sendDefaultPhoneNotification?: boolean;
    /**
     * After the user password is modified, enter the sending email address
     */
    inputSendEmailNotification?: string;
    /**
     * After the user password is changed, enter the sending mobile phone number
     */
    inputSendPhoneNotification?: string;
    /**
     * When sending the login address, the specified application ID will send the login address of this application to the user's email or mobile phone number. The default is the login address of the user pool application panel.
     */
    appId?: string;
};

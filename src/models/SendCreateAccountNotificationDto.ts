/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SendCreateAccountNotificationDto = {
    /**
     * After creating an account, whether to send an email notification
     */
    sendEmailNotification?: boolean;
    /**
     * After creating an account, whether to send SMS notifications
     */
    sendPhoneNotification?: boolean;
    /**
     * When sending the login address, the specified application ID will send the login address of this application to the user's email or mobile phone number. The default is the login address of the user pool application panel.
     */
    appId?: string;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VerifyUpdateEmailRequestData = {
    /**
     * Token used to modify the current mailbox. You need to use this token to call the **Modify Mailbox** interface.
     */
    updateEmailToken: string;
    /**
     * Token validity time is 60 seconds.
     */
    tokenExpiresIn: number;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SendEnrollFactorRequestOtpDataDto = {
    /**
     * OTP Auth Uri
     */
    qrCodeUri: string;
    /**
     * Base64 encoded OTP QR code, the front end can use this to render the QR code.
     */
    qrCodeDataUrl: string;
    /**
     *OTP Recovery Code
     */
    recoveryCode: string;
};

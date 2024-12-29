/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignInByDouyinMiniProgramPhoneInfoPayloadDto = {
    /**
     * The **initial vector of the encryption algorithm** `iv` returned by the applet to obtain the user's mobile phone number is required when using encryptedData.
     */
    iv?: string;
    /**
     * The applet obtains the **encrypted data of the user's mobile phone number information returned by the user's mobile phone number** `encryptedData`
     */
    encryptedData?: string;
};

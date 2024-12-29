/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignInByDouyinMiniProgramCodePayloadDto = {
    /**
     * Get the encrypted data (encryptedData) returned by Douyin open data
     */
    encryptedData?: string;
    /**
     * Symmetric decryption algorithm initial vector, returned by Douyin; required when using encryptedData
     */
    iv?: string;
    /**
     * User `code` returned by `tt.login` interface
     */
    code: string;
};

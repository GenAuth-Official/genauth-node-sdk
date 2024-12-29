/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TenantEnterpriseCertificationRespDto = {
    /**
     *Company name
     */
    businessName?: string;
    /**
     *Business license
     */
    businessLicense?: string;
    /**
     * Update time
     */
    updatedAt?: string;
    /**
     * Industrial and commercial registration name
     */
    businessRegistrationName?: string;
    /**
     * Unified social credit code
     */
    unifiedSocialCredit?: string;
    /**
     * Name of legal representative
     */
    legalRepresentativeName?: string;
    /**
     * ID number
     */
    nationalIdentificationNumber?: string;
    /**
     *Personal bank card number
     */
    personalBankCardNumber?: string;
    /**
     * Mobile phone number reserved by the bank
     */
    bankReservedPhone?: string;
    /**
     * Reason for review
     */
    reviewReason?: string;
    /**
     * Enterprise certification status
     */
    enterpriseCertificationStatus?: TenantEnterpriseCertificationRespDto.enterpriseCertificationStatus;
};

export namespace TenantEnterpriseCertificationRespDto {

    /**
     * Enterprise certification status
     */
    export enum enterpriseCertificationStatus {
        NOT_SUBMIT = 'not_submit',
        REVIEWING = 'reviewing',
        PASS = 'pass',
        '_-1' = -1,
    }


}

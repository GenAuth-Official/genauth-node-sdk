/*istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignUpProfileDto = {
    /**
     * Nick name
     */
    nickname?: string;
    /**
     * company
     */
    company?: string;
    /**
     * avatar
     */
    photo?: string;
    /**
     * equipment
     */
    device?: string;
    /**
     * Browser
     */
    browser?: string;
    /**
     * name
     */
    name?: string;
    /**
     * name
     */
    givenName?: string;
    /**
     * surname
     */
    familyName?: string;
    /**
     *Middle name
     */
    middleName?: string;
    /**
     * material
     */
    profile?: string;
    /**
     * The user name you wish to be called
     */
    preferredUsername?: string;
    /**
     * Website
     */
    website?: string;
    /**
     * Gender W: Female; M: Male
     */
    gender?: SignUpProfileDto.gender;
    /**
     * Birthday
     */
    birthdate?: string;
    /**
     * area
     */
    zoneinfo?: string;
    /**
     * Language area
     */
    locale?: string;
    /**
     * address
     */
    address?: string;
    /**
     * Format
     */
    formatted?: string;
    /**
     * Street address
     */
    streetAddress?: string;
    /**
     * Location
     */
    locality?: string;
    /**
     * area
     */
    region?: string;
    /**
     * postal code
     */
    postalCode?: string;
    /**
     * nation
     */
    country?: string;
    /**
     * User email. If you want to complete the email address, you must pass in the email verification code in `options.emailPassCodeForInformationCompletion`. To send an email verification code, you can use the /api/v3/send-email interface.
     */
    email?: string;
    /**
     * User mobile phone number. If you want to complete the mobile phone number, you must pass in the mobile phone number verification code in `options.phonePassCodeForInformationCompletion`. To send a mobile phone number verification code, you can use the /api/v3/send-sms interface.
     */
    phone?: string;
    /**
     * User mobile phone area code
     */
    phoneCountryCode?: string;
    /**
     * User-defined fields
     */
    customData?: any;
};

export namespace SignUpProfileDto {

    /**
     * Gender W: Female; M: Male
     */
    export enum gender {
        M = 'M',
        F = 'F',
        U = 'U',
    }


}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateUserProfileDto = {
    /**
     * User’s real name, not unique
     */
    name?: string;
    /**
     * Nick name
     */
    nickname?: string;
    /**
     * Avatar link
     */
    photo?: string;
    /**
     * Third-party external ID
     */
    externalId?: string;
    /**
     *Date of birth
     */
    birthdate?: string;
    /**
     *Country
     */
    country?: string;
    /**
     *Province
     */
    province?: string;
    /**
     *City where you are located
     */
    city?: string;
    /**
     * Address
     */
    address?: string;
    /**
     * Street address
     */
    streetAddress?: string;
    /**
     * Postal code number
     */
    postalCode?: string;
    /**
     * gender
     */
    gender?: UpdateUserProfileDto.gender;
    /**
     * Username, unique in the user pool
     */
    username?: string;
    /**
     * Company where you work
     */
    company?: string;
    /**
     * Custom data, the key in the object passed in must first define the relevant custom fields in the user pool
     */
    customData?: any;
    /**
     * User ID number
     */
    identityNumber?: string;
};

export namespace UpdateUserProfileDto {

    /**
     * gender
     */
    export enum gender {
        M = 'M',
        F = 'F',
        U = 'U',
    }


}

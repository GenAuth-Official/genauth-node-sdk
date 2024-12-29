/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PrincipalAuthenticationInfoDto = {
    /**
     * Whether to perform certification
     */
    authenticated: boolean;
    /**
     *User ID
     */
    principalType: string;
    /**
     *Certificate number of the certification body
     */
    principalCode: string;
    /**
     * Authentication subject name
     */
    principalName: string;
    /**
     * Authentication time, standard time string
     */
    authenticatedAt: string;
};

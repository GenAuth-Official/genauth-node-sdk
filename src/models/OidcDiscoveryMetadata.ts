/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OidcDiscoveryMetadata = {
    /**
     * OIDC Issuer
     */
    issuer: string;
    /**
     * OIDC initiates authentication endpoint
     */
    authorization_endpoint: string;
    /**
     * OIDC obtains Token endpoint
     */
    token_endpoint: string;
    /**
     * OIDC obtains user information endpoint
     */
    userinfo_endpoint: string;
    /**
     * OIDC JWKS endpoint
     */
    jwks_uri: string;
    /**
     * List of all Scope supported by this OIDC IDP
     */
    scopes_supported: Array<string>;
    /**
     * All return types supported by this OIDC IDP
     */
    response_types_supported: Array<'none' | 'code' | 'token' | 'id_token token' | 'id_token' | 'code token' | 'code id_token token' | 'code id_token'>;
    /**
     * All Response Modes supported by this OIDC IDP
     */
    response_modes_supported: Array<string>;
    /**
     * All Grant Types supported by this OIDC IDP
     */
    grant_types_supported: Array<string>;
    /**
     * All ID Token signing methods supported by this OIDC IDP
     */
    id_token_signing_alg_values_supported: Array<string>;
    /**
     * All ID Token encryption methods supported by this OIDC IDP
     */
    id_token_encryption_alg_values_supported: Array<string>;
    id_token_encryption_enc_values_supported: Array<string>;
    /**
     * All user information signature methods supported by this OIDC IDP
     */
    userinfo_signing_alg_values_supported: Array<string>;
    /**
     * All user information encryption methods supported by this OIDC IDP
     */
    userinfo_encryption_alg_values_supported: Array<string>;
    userinfo_encryption_enc_values_supported: Array<string>;
    /**
     * All authentication methods for obtaining Token supported by this OIDC IDP
     */
    token_endpoint_auth_methods_supported: Array<string>;
    /**
     * All Claim Types supported by this OIDC IDP
     */
    claim_types_supported: Array<string>;
    /**
     * All Claims supported by this OIDC IDP
     */
    claims_supported: Array<string>;
    /**
     * All Code Challenge modes supported by this OIDC IDP
     */
    code_challenge_methods_supported: Array<string>;
    /**
     * The front-end logout endpoint for this OIDC IDP
     */
    end_session_endpoint: string;
    /**
     * Check Token status endpoint for this OIDC IDP
     */
    introspection_endpoint: string;
    /**
     * This OIDC IDP checks all verification methods supported by the Token status endpoint
     */
    introspection_endpoint_auth_methods_supported: Array<string>;
    /**
     * The revocation Token endpoint of this OIDC IDP
     */
    revocation_endpoint: string;
    /**
     * This OIDC IDP revokes all verification methods supported by the Token endpoint
     */
    revocation_endpoint_auth_methods_supported: Array<string>;
};

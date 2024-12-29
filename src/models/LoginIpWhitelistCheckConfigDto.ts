/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LoginIpWhitelistCheckConfigDto = {
    /**
     * Whether to enable login IP whitelist verification
     */
    enabled: boolean;
    /**
     * Human-machine verification IP whitelist
     */
    ipWhitelist: string;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SignInBySwitchOptionsDto } from './SignInBySwitchOptionsDto';

export type PublicAccountSwitchLoginDto = {
    /**
     * Switch login target user ID
     */
    targetUserId: string;
    /**
     * Optional parameters
     */
    options?: SignInBySwitchOptionsDto;
};

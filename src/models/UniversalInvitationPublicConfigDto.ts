/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InviterDetailDto } from "./InviterDetailDto";
import type { UserPoolPublicConfigDto } from "./UserPoolPublicConfigDto";

export type UniversalInvitationPublicConfigDto = {
  /**
   * User pool information
   */
  userPool: UserPoolPublicConfigDto;
  /**
   * Inviter information
   */
  inviter?: InviterDetailDto;
};

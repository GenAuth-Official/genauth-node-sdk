/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UniversalInviteeProfileDto } from "./UniversalInviteeProfileDto";

export type UniversalInvitationUserJoinDto = {
  /**
   * Email verification code
   */
  emailCode: string;
  /**
   * Invitation link unique identifier
   */
  identifier: string;
  /**
   * User information
   */
  profile?: UniversalInviteeProfileDto;
};

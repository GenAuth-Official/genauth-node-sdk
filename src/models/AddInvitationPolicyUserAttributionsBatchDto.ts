/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InvitationPolicyUserAttributionListDto } from "./InvitationPolicyUserAttributionListDto";

export type AddInvitationPolicyUserAttributionsBatchDto = {
  /**
   * List of associated objects
   */
  targets: Array<InvitationPolicyUserAttributionListDto>;
  /**
   * Policy ID
   */
  policyId: string;
};

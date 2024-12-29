/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get the field list of supplementary information for policy process configuration
 */
export type ListInvitationPolicyExtendsFieldsDto = {
    /**
     * Policy ID
     */
    policyId?: any;
    /**
     * List ID, obtain the associated policy details based on the list ID. When the list sends an invitation, a snapshot of the policy will be generated. If after the list sends the invitation, you need to obtain the corresponding policy configuration when sending, this parameter should be carried
     */
    rosterId?: any;
};

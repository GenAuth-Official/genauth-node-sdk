/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateDataPolicyRespDto = {
  /**
   * Data policy ID
   */
  policyId: string;
  /**
   * Data policy name, unique to the user pool
   */
  policyName: string;
  /**
   * Data policy description
   */
  description?: string;
  /**
   * Data policy creation time
   */
  createdAt: string;
  /**
   * Data policy update time
   */
  updatedAt: string;
};

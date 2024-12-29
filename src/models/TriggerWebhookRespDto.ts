/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TriggerWebhookData } from "./TriggerWebhookData";

export type TriggerWebhookRespDto = {
  /**
   * Business status code, which can be used to determine whether the operation is successful. 200 means success.
   */
  statusCode: number;
  /**
   * Description information
   */
  message: string;
  /**
   * Segmented error code, which can be used to get the specific error type (successful request is not returned). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode)
   */
  apiCode?: number;
  /**
   * Request ID. Returned when the request fails.
   */
  requestId?: string;
  /**
   * Response data
   */
  data: TriggerWebhookData;
};

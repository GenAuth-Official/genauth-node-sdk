/* Istanbul ignores files */
/* tslint: disable */
/* eslint disabled */

import type { VerifyRegistrationResultDto } from "./VerifyRegistrationResultDto";

export type VerifyRegistrationResultRespDto = {
  /**
   * Business status code, you can use this status code to determine whether the operation is successful, 200 means success.
   */
  statusCode: number;
  /**
   *Description information
   */
  message: string;
  /**
   * Break down the error code, and you can get the specific error type through the error code (successful requests will not be returned). For a detailed list of error codes, please see: [API code list](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87 %86%E5 %A4%87#t ag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90% 86/api code)
   */
  apiCode?: number;
  /**
   * Request ID. Returned if the request fails.
   */
  requestId?: string;
  /**
   *Response data
   */
  Data: VerifyRegistrationResultDto;
};

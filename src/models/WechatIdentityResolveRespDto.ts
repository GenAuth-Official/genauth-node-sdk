/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WechatIdentityResolveRespDataDto } from "./WechatIdentityResolveRespDataDto";

export type WechatIdentityResolveRespDto = {
  /**
   * Exception ID: Intermediate operations are required to complete login.
   */
  uniqueId?: string;
  /**
   * (Only for compatibility with older versions of the code) Subdivide the error code. The specific error type can be obtained through this error code (successful requests will not be returned).
   */
  code?: number;
  /**
   * Business status code, you can use this status code to determine whether the operation is successful, 200 means success.
   */
  statusCode: number;
  /**
   * Subdivide the error code, and you can get the specific error type through this error code (successful requests will not be returned). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#t ag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90% 86/apiCode)
   */
  apiCode?: number;
  /**
   *Description information
   */
  message: string;
  /**
   *Response data
   */
  data: WechatIdentityResolveRespDataDto;
};

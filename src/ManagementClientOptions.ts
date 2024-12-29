import { Lang } from "./utils";

export interface ManagementClientOptions {
  /** User Pool ID **/
  accessKeyId: string;
  /** User Pool Secret **/
  accessKeySecret: string;
  /** Tenant ID */
  tenantId?: string;
  /** Request Timeout **/
  timeout?: number;
  /** GenAuth Server Address */
  host?: string;
  /**
   * Language
   */
  lang?: Lang;

  /**
   * Whether to reject illegal HTTPS requests, defaults to true; can be set to false for private deployment scenarios where certificates are not trusted
   */
  rejectUnauthorized?: boolean;

  // Event subscription socket connection address
  socketUri?: string;

  // Retry times
  retryTimes?: number;

  // /**
  //  * Request header keys, applicable to GenAuth white-label scenarios
  //  */
  // headers?: {
  //   "app-id": string;
  //   "tenant-id"?: string;
  //   "sdk-version": string;
  //   "request-from": string;
  //   lang: string;
  // };
}

export const DEFAULT_OPTIONS: ManagementClientOptions = {
  timeout: 10000,
  host: "https://api.genauth.ai",
  // headers: {
  //   "app-id": "x-genauth-app-id",
  //   "tenant-id": "x-genauth-app-tenant-id",
  //   "request-from": "x-genauth-request-from",
  //   "sdk-version": "x-genauth-sdk-version",
  //   lang: "x-genauth-lang",
  // },
  lang: "zh-CN",
  accessKeyId: "",
  accessKeySecret: "",
  rejectUnauthorized: true,
  socketUri: "wss://openevent.genauth.ai",
  retryTimes: 5,
};

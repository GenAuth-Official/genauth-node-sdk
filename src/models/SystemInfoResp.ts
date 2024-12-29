/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SystmeInfoRSAConfig } from "./SystmeInfoRSAConfig";
import type { SystmeInfoSM2Config } from "./SystmeInfoSM2Config";
import type { SystmeInfoVersion } from "./SystmeInfoVersion";

export type SystemInfoResp = {
  /**
   * RSA256 encryption configuration information
   */
  rsa: SystmeInfoRSAConfig;
  /**
   * National secret SM2 encryption configuration information
   */
  sm2: SystmeInfoSM2Config;
  /**
   * National secret SM2 encryption configuration information
   */
  version: SystmeInfoVersion;
  /**
   *GenAuth service external IP list
   */
  publicIps: Array<string>;
};

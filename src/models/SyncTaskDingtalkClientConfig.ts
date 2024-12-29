/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SyncTaskDingtalkClientConfig = {
  /**
   * Corporate ID (CorpId)
   */
  corpId: string;
  /**
   * AppKey of DingTalk application
   */
  appKey: string;
  /**
   * AppSecret of DingTalk application
   */
  appSecret: string;
  /**
   * Encryption aes_key
   */
  aes_key?: string;
  /**
   * Signature token
   */
  token?: string;
};

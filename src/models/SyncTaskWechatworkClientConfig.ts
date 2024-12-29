/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SyncTaskWechatworkClientConfig = {
  /**
   * Enterprise ID (CorpId)
   */
  corpID: string;
  /**
   * Enterprise WeChat address book key Secret
   */
  secret: string;
  /**
   * Address book event synchronization Token
   */
  token?: string;
  /**
   * Address book event synchronization EncodingAESKey
   */
  encodingAESKey?: string;
  /**
   * Agent address
   */
  agentUrl?: string;
};

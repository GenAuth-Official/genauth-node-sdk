/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SyncTaskActiveDirectoryClientConfig } from "./SyncTaskActiveDirectoryClientConfig";
import type { SyncTaskDingtalkClientConfig } from "./SyncTaskDingtalkClientConfig";
import type { SyncTaskFxiaokeClientConfig } from "./SyncTaskFxiaokeClientConfig";
import type { SyncTaskItalentClientConfig } from "./SyncTaskItalentClientConfig";
import type { SyncTaskKayangClientConfig } from "./SyncTaskKayangClientConfig";
import type { SyncTaskLarkClientConfig } from "./SyncTaskLarkClientConfig";
import type { SyncTaskLdapClientConfig } from "./SyncTaskLdapClientConfig";
import type { SyncTaskMaycurClientConfig } from "./SyncTaskMaycurClientConfig";
import type { SyncTaskMokaClientConfig } from "./SyncTaskMokaClientConfig";
import type { SyncTaskScimClientConfig } from "./SyncTaskScimClientConfig";
import type { SyncTaskWechatworkClientConfig } from "./SyncTaskWechatworkClientConfig";
import type { SyncTaskXiaoshouyiClientConfig } from "./SyncTaskXiaoshouyiClientConfig";

export type SyncTaskClientConfig = {
  /**
   * Feishu synchronization task configuration
   */
  larkConfig?: SyncTaskLarkClientConfig;
  /**
   * Feishu (International Edition) synchronization task configuration
   */
  larkInternationalConfig?: SyncTaskLarkClientConfig;
  /**
   * Enterprise WeChat synchronization task configuration
   */
  wechatworkConfig?: SyncTaskWechatworkClientConfig;
  /**
   * DingTalk synchronization task configuration
   */
  dingtalkConfig?: SyncTaskDingtalkClientConfig;
  /**
   * Moka synchronization task configuration
   */
  mokaConfig?: SyncTaskMokaClientConfig;
  /**
   * Custom synchronization source synchronization task configuration
   */
  scimConfig?: SyncTaskScimClientConfig;
  /**
   * Windows AD synchronization task configuration
   */
  activeDirectoryConfig?: SyncTaskActiveDirectoryClientConfig;
  /**
   * LDAP synchronization task configuration
   */
  ldapConfig?: SyncTaskLdapClientConfig;
  /**
   * Beisen synchronization task configuration
   */
  italentConfig?: SyncTaskItalentClientConfig;
  /**
   * Every moment reimbursement synchronization task configuration
   */
  maycurConfig?: SyncTaskMaycurClientConfig;
  /**
   * Funshare sales synchronization task configuration
   */
  fxiaokeConfig?: SyncTaskFxiaokeClientConfig;
  /**
   * SalesEasy synchronization task configuration
   */
  xiaoshouyiConfig?: SyncTaskXiaoshouyiClientConfig;
  /**
   * Kayang synchronization task configuration
   */
  kayangConfig?: SyncTaskKayangClientConfig;
};

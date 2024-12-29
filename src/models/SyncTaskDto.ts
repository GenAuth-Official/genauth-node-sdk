/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SyncTaskFieldMapping } from "./SyncTaskFieldMapping";
import type { SyncTaskProvisioningScope } from "./SyncTaskProvisioningScope";
import type { SyncTaskTimedScheduler } from "./SyncTaskTimedScheduler";

export type SyncTaskDto = {
  /**
   * Sync task ID
   */
  syncTaskId: number;
  /**
   * Creation time
   */
  createdAt: string;
  /**
   * Update time
   */
  updatedAt: string;
  /**
   * Synchronization task name
   */
  syncTaskName: string;
  /**
   * Synchronization task type:
   * - `lark`: Feishu
   * - `lark-international`: Feishu international version
   * - `wechatwork`: Enterprise WeChat
   * - `dingtalk`: DingTalk
   * - `active-directory`: Windows AD
   * - `ldap`: LDAP
   * - `italent`: Beisen
   * - `maycur`: reimburse every tick
   * - `moka`: Moka
   * - `fxiaoke`: enjoy sales
   * - `xiaoshouyi`: easy sales
   * - `kayang`: Kayang HR
   * - `scim`: Custom synchronization source
   *
   */
  syncTaskType: SyncTaskDto.syncTaskType;
  /**
   * Synchronization task data flow direction:
   * - `upstream`: As an upstream, synchronize data to GenAuth
   * - `downstream`: As a downstream, synchronize GenAuth data to this system
   *
   */
  syncFlow: SyncTaskDto.syncFlow;
  /**
   * Synchronization task trigger type:
   * - `manually`: trigger execution manually
   * - `timed`: timed trigger
   * - `automatic`: automatically triggered based on events
   *
   */
  syncTrigger: SyncTaskDto.syncTrigger;
  /**
   * Latest synchronization error message
   */
  lastSyncMessage?: string;
  /**
   * Latest synchronization progress
   */
  lastSyncRate?: number;
  /**
   *Latest synchronization status:
   * - `free`: idle state, never executed
   * - `pending`: waiting for system execution
   * - `onProgress`: executing
   * - `success`: success
   * - `failed`: failed
   *
   */
  lastSyncStatus?: SyncTaskDto.lastSyncStatus;
  /**
   *Last synchronization time
   */
  lastSyncTime?: string;
  /**
   * The organization that this synchronization task is bound to. For upstream synchronization, you need to execute a synchronization task before the organization will be bound; for downstream synchronization, you need to set it when creating a synchronization task.
   */
  organizationCode?: string;
  /**
   * Synchronization scope, **only valid for downstream synchronization tasks**. Leave empty to synchronize the entire organization.
   */
  provisioningScope?: SyncTaskProvisioningScope;
  /**
   * Field mapping configuration
   */
  fieldMapping: Array<SyncTaskFieldMapping>;
  /**
   * Scheduled synchronization time setting
   */
  timedScheduler?: SyncTaskTimedScheduler;
};

export namespace SyncTaskDto {
  /**
   * Synchronization task type:
   * - `lark`: Feishu
   * - `lark-international`: Feishu international version
   * - `wechatwork`: Enterprise WeChat
   * - `dingtalk`: DingTalk
   * - `active-directory`: Windows AD
   * - `ldap`: LDAP
   * - `italent`: Beisen
   * - `maycur`: reimburse every tick
   * - `moka`: Moka
   * - `fxiaoke`: enjoy sales
   * - `xiaoshouyi`: easy sales
   * - `kayang`: Kayang HR
   * - `scim`: Custom synchronization source
   *
   */
  export enum syncTaskType {
    LARK = "lark",
    LARK_INTERNATIONAL = "lark-international",
    WECHATWORK = "wechatwork",
    DINGTALK = "dingtalk",
    ACTIVE_DIRECTORY = "active-directory",
    ITALENT = "italent",
    MAYCUR = "maycur",
    LDAP = "ldap",
    MOKA = "moka",
    FXIAOKE = "fxiaoke",
    SCIM = "scim",
    XIAOSHOUYI = "xiaoshouyi",
    KAYANG = "kayang",
    CUSTOM = "custom",
  }

  /**
   * Synchronization task data flow direction:
   * - `upstream`: As an upstream, synchronize data to GenAuth
   * - `downstream`: As a downstream, synchronize GenAuth data to this system
   *
   */
  export enum syncFlow {
    UPSTREAM = "upstream",
    DOWNSTREAM = "downstream",
  }

  /**
   * Synchronization task trigger type:
   * - `manually`: trigger execution manually
   * - `timed`: timed trigger
   * - `automatic`: automatically triggered based on events
   *
   */
  export enum syncTrigger {
    MANUALLY = "manually",
    TIMED = "timed",
    AUTOMATIC = "automatic",
  }

  /**
   *Latest synchronization status:
   * - `free`: idle state, never executed
   * - `pending`: waiting for system execution
   * - `onProgress`: executing
   * - `success`: success
   * - `failed`: failed
   *
   */
  export enum lastSyncStatus {
    FREE = "free",
    PENDING = "pending",
    ON_PROGRESS = "onProgress",
    SUCCESS = "success",
    FAILED = "failed",
  }
}

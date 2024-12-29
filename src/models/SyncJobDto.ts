/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SyncJobDto = {
  /**
   * Sync job ID
   */
  syncJobId: number;
  /**
   * The synchronization task ID corresponding to this synchronization job
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
   * Current synchronization status:
   * - `free`: idle state, never executed
   * - `pending`: waiting for system execution
   * - `onProgress`: executing
   * - `success`: success
   * - `failed`: failed
   *
   */
  syncStatus: SyncJobDto.syncStatus;
  /**
   * Synchronization task data flow direction:
   * - `upstream`: As an upstream, synchronize data to GenAuth
   * - `downstream`: As a downstream, synchronize GenAuth data to this system
   *
   */
  syncFlow: SyncJobDto.syncFlow;
  /**
   * Synchronization task trigger type:
   * - `manually`: trigger execution manually
   * - `timed`: timed trigger
   * - `automatic`: automatically triggered based on events
   *
   */
  syncTrigger: SyncJobDto.syncTrigger;
  /**
   * Number of departments that need to be synchronized
   */
  departmentCountAll: number;
  /**
   * Number of departments successfully synchronized
   */
  departmentCountSucc: number;
  /**
   * Number of departments that need to be updated
   */
  departmentUpdateCountAll: number;
  /**
   * Number of departments successfully updated
   */
  departmentUpdateCountSucc: number;
  /**
   * Number of users to be synchronized
   */
  accountCountAll: number;
  /**
   * Number of users successfully synchronized
   */
  accountCountSucc: number;
  /**
   * Number of users who need to be updated
   */
  accountUpdateCountAll: number;
  /**
   * Number of users successfully updated
   */
  accountUpdateCountSucc: number;
  /**
   * error message
   */
  errMsg?: string;
};

export namespace SyncJobDto {
  /**
   * Current synchronization status:
   * - `free`: idle state, never executed
   * - `pending`: waiting for system execution
   * - `onProgress`: executing
   * - `success`: success
   * - `failed`: failed
   *
   */
  export enum syncStatus {
    FREE = "free",
    PENDING = "pending",
    ON_PROGRESS = "onProgress",
    SUCCESS = "success",
    FAILED = "failed",
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
}

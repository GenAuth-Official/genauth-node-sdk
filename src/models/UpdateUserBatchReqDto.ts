/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ import type { UpdateUserBatchOptionsDto } from "./UpdateUserBatchOptionsDto";
import type { UpdateUserInfoDto } from "./UpdateUserInfoDto";
export type UpdateUserBatchReqDto = {
  /** * User list */ list: Array<UpdateUserInfoDto>;
  /** * Optional parameters */ options?: UpdateUserBatchOptionsDto;
};

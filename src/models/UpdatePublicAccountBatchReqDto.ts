/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ import type { UpdatePublicAccountBatchOptionsDto } from "./UpdatePublicAccountBatchOptionsDto";
import type { UpdatePublicAccountInfoDto } from "./UpdatePublicAccountInfoDto";
export type UpdatePublicAccountBatchReqDto = {
  /** * Public account list */ list: Array<UpdatePublicAccountInfoDto>;
  /** * Optional parameters */ options?: UpdatePublicAccountBatchOptionsDto;
};

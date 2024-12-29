/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */
import type { ApplicationSimpleInfoDto } from "./ApplicationSimpleInfoDto";
export type ApplicationSimpleInfoPaginatedDataDto = {
  /** * List data */ list: Array<ApplicationSimpleInfoDto>;
  /** *Total number of records */ totalCount: number;
};

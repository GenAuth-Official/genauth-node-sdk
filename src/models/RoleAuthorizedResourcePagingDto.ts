/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ import type { RoleAuthorizedResourcesRespDto } from "./RoleAuthorizedResourcesRespDto";
export type RoleAuthorizedResourcePagingDto = {
  /** *Total number of records */ totalCount: number;
  /**
   * data */ list: Array<RoleAuthorizedResourcesRespDto>;
};

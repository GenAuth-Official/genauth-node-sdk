/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ import type { ListPermissionViewRespDto } from "./ListPermissionViewRespDto";
export type ListPermissionViewPaginatedRespDto = {
  /** *Total number of records */ totalCount: number;
  /** *Response data */ list: Array<ListPermissionViewRespDto>;
};

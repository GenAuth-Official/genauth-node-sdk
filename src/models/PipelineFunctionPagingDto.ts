/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ import type { PipelineFunctionDto } from "./PipelineFunctionDto";
export type PipelineFunctionPagingDto = {
  /** *Total */ totalCount: number;
  /** * Data list */ list: Array<PipelineFunctionDto>;
};

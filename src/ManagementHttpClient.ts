import Axios, { AxiosHeaders, AxiosInstance, AxiosRequestConfig } from "axios";

import { ManagementClientOptions } from "./ManagementClientOptions";
import { pickBy } from "./utils";
import {
  buildAuthorization,
  buildStringToSign,
  DEFAULT_HEADERS,
} from "./utils/buildSignature";
import https from "https";

export class ManagementHttpClient {
  options: ManagementClientOptions;
  axios: AxiosInstance;

  constructor(options: ManagementClientOptions) {
    this.options = options;
    this.axios = Axios.create({
      withCredentials: true,
    });
  }

  async request(config: AxiosRequestConfig) {
    // Request headers for this request
    let headers = new AxiosHeaders(DEFAULT_HEADERS());
    if (this.options.tenantId) {
      headers.set("x-genauth-app-id", this.options.tenantId, true);
    }
    headers.set("x-genauth-lang", this.options.lang || "zh-CN");
    headers.set("date", new Date().toUTCString());

    // Calculate signature
    const stringToSign = buildStringToSign(
      config.method!,
      config.url!,
      headers,
      config.method === "GET" ? config.params || {} : config.data || {}
    );
    headers.set(
      "authorization",
      buildAuthorization(
        this.options.accessKeyId,
        this.options.accessKeySecret,
        stringToSign
      )
    );

    config.headers = headers;
    config.timeout = this.options.timeout;
    const { data } = await this.axios.request({
      ...config,
      headers: {
        ...pickBy(config.headers, (i) => !!i),
      },
      httpsAgent:
        this.options.rejectUnauthorized === false
          ? new https.Agent({
              rejectUnauthorized: false,
            })
          : undefined,
    });
    return data;
  }
}

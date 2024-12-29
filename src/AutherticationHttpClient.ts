import Axios, { AxiosHeaders, AxiosInstance, AxiosRequestConfig } from "axios";
import { AuthenticationClientInitOptions } from "./AuthenticationClientOptions";
import https from "https";

export class AuthenticationHttpClient {
  options: AuthenticationClientInitOptions;
  axios: AxiosInstance;

  constructor(options: AuthenticationClientInitOptions) {
    this.options = options;
    this.axios = Axios.create({
      withCredentials: true,
    });
  }

  async request(config: AxiosRequestConfig) {
    const headers = new AxiosHeaders({
      ...config.headers,
      "x-genauth-app-id": this.options.appId,
    });

    // If the tokenEndPointAuthMethod is set to client_secret_basic and the /oidc related interface is called:
    // 1. Get token: /oidc(oauth)/token
    // 2. Revoke token: /oidc(oauth)/token/revocation
    // 3. Check token: /oidc(oauth)/token/introspection
    // 4. Other login token acquisition interfaces
    const endpointsToSendBasicHeader = [
      "/oidc/token",
      "/oidc/token/revocation",
      "/oidc/token/introspection",
      "/oauth/token",
      "/oauth/token/revocation",
      "/oauth/token/introspection",
      "/api/v3/signin",
      "/api/v3/signin-by-mobile",
      "/api/v3/exchange-tokenset-with-qrcode-ticket",
    ];
    if (
      this.options.tokenEndPointAuthMethod === "client_secret_basic" &&
      endpointsToSendBasicHeader.includes(config.url!)
    ) {
      headers.set(
        "authorization",
        "Basic " +
          Buffer.from(
            this.options.appId + ":" + this.options.appSecret
          ).toString("base64"),
        true
      );
    } else if (this.options.accessToken) {
      headers.set("authorization", this.options.accessToken, true);
    }

    const { data } = await this.axios.request({
      ...config,
      baseURL: this.options.appHost,
      timeout: this.options.timeout,
      headers,
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

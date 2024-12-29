import base64url from "base64url";
import { createSecretKey } from "crypto";
import { IncomingMessage, ServerResponse } from "http";
import { compactVerify } from "jose";
import { TextDecoder } from "util";
import {
  AccessToken,
  AuthURLParams,
  AuthUrlResult,
  IDToken,
  LoginTransaction,
  LogoutURLParams,
  OIDCTokenResponse,
} from "./AuthenticationClientInterface";
import {
  AuthenticationClientInitOptions,
  DEFAULT_COOKIE_KEY,
  DEFAULT_SCOPE,
  DEFAULT_SOCKET_URI,
} from "./AuthenticationClientOptions";
import {
  createQueryParams,
  domainC14n,
  generateRandomString,
  JoseKey,
  JWKSObject,
  parseJWKS,
  serialize,
} from "./utils";
import sha256 from "crypto-js/sha256";
import CryptoJS from "crypto-js";
import { AuthenticationHttpClient } from "./AutherticationHttpClient";
import {
  Cas20ValidationFailureResult,
  Cas20ValidationSuccessResult,
  CasParams,
  LogoutParams,
  OauthParams,
  OidcParams,
} from "./utils/types";
import { SignInOptionsDto, SignUpOptionsDto, SignUpProfileDto } from "./models";
// ==== AUTO GENERATED AUTHENTICATION IMPORTS BEGIN ====
import type { AuthorizedResourcePaginatedRespDto } from "./models/AuthorizedResourcePaginatedRespDto";
import type { BindByAccountIdInputApi } from "./models/BindByAccountIdInputApi";
import type { BindByAccountInputApi } from "./models/BindByAccountInputApi";
import type { BindByAccountsInputApi } from "./models/BindByAccountsInputApi";
import type { BindByEmailCodeInputApi } from "./models/BindByEmailCodeInputApi";
import type { BindByPhoneCodeInputApi } from "./models/BindByPhoneCodeInputApi";
import type { BindByRegiserInputApi } from "./models/BindByRegiserInputApi";
import type { BindEmailDto } from "./models/BindEmailDto";
import type { BindPhoneDto } from "./models/BindPhoneDto";
import type { ChangePushCodeStatusDto } from "./models/ChangePushCodeStatusDto";
import type { ChangeQRCodeStatusDto } from "./models/ChangeQRCodeStatusDto";
import type { CheckPermissionArrayResourceDto } from "./models/CheckPermissionArrayResourceDto";
import type { CheckPermissionStringResourceDto } from "./models/CheckPermissionStringResourceDto";
import type { CheckPermissionTreeResourceDto } from "./models/CheckPermissionTreeResourceDto";
import type { CheckPushCodeStatusRespDto } from "./models/CheckPushCodeStatusRespDto";
import type { CheckQRCodeStatusRespDto } from "./models/CheckQRCodeStatusRespDto";
import type { CheckResourcePermissionsRespDto } from "./models/CheckResourcePermissionsRespDto";
import type { CommonResponseDto } from "./models/CommonResponseDto";
import type { DecryptDouyinMiniProgramDataDto } from "./models/DecryptDouyinMiniProgramDataDto";
import type { DecryptDouyinMiniProgramDataRespDto } from "./models/DecryptDouyinMiniProgramDataRespDto";
import type { DecryptWechatMiniProgramDataDto } from "./models/DecryptWechatMiniProgramDataDto";
import type { DecryptWechatMiniProgramDataRespDto } from "./models/DecryptWechatMiniProgramDataRespDto";
import type { DeleteAccounDto } from "./models/DeleteAccounDto";
import type { EnablePermissionApplyApplicationListRes } from "./models/EnablePermissionApplyApplicationListRes";
import type { EnablePermissionApplyRoleListRes } from "./models/EnablePermissionApplyRoleListRes";
import type { ExchangeTokenSetWithQRcodeTicketDto } from "./models/ExchangeTokenSetWithQRcodeTicketDto";
import type { GenePushCodeRespDto } from "./models/GenePushCodeRespDto";
import type { GeneQRCodeRespDto } from "./models/GeneQRCodeRespDto";
import type { GenerateBindExtIdpLinkRespDto } from "./models/GenerateBindExtIdpLinkRespDto";
import type { GenerateInvitationLinkRespDto } from "./models/GenerateInvitationLinkRespDto";
import type { GenerateInviteeTokenRespDto } from "./models/GenerateInviteeTokenRespDto";
import type { GenerateQrcodeDto } from "./models/GenerateQrcodeDto";
import type { GetAccessibleAppsRespDto } from "./models/GetAccessibleAppsRespDto";
import type { GetAlipayAuthInfoRespDto } from "./models/GetAlipayAuthInfoRespDto";
import type { GetAuthenticationOptionsRespDto } from "./models/GetAuthenticationOptionsRespDto";
import type { GetCaptchaCodeRespDto } from "./models/GetCaptchaCodeRespDto";
import type { GetCountryListRespDto } from "./models/GetCountryListRespDto";
import type { GetExtIdpsRespDto } from "./models/GetExtIdpsRespDto";
import type { GetIdentitiesRespDto } from "./models/GetIdentitiesRespDto";
import type { GetInviteeContextRespDto } from "./models/GetInviteeContextRespDto";
import type { GetLoggedInAppsRespDto } from "./models/GetLoggedInAppsRespDto";
import type { GetLoginHistoryRespDto } from "./models/GetLoginHistoryRespDto";
import type { GetPublicAccountDataRespDto } from "./models/GetPublicAccountDataRespDto";
import type { GetRegistrationOptionsRespDto } from "./models/GetRegistrationOptionsRespDto";
import type { GetSecurityInfoRespDto } from "./models/GetSecurityInfoRespDto";
import type { GetTenantListRespDto } from "./models/GetTenantListRespDto";
import type { GetUniversalInvitationJoinRespDto } from "./models/GetUniversalInvitationJoinRespDto";
import type { GetUniversalInvitationPublicConfigRespDto } from "./models/GetUniversalInvitationPublicConfigRespDto";
import type { GetUserAuthResourceListRespDto } from "./models/GetUserAuthResourceListRespDto";
import type { GetUserAuthResourcePermissionListDto } from "./models/GetUserAuthResourcePermissionListDto";
import type { GetUserAuthResourcePermissionListRespDto } from "./models/GetUserAuthResourcePermissionListRespDto";
import type { GetUserAuthResourceStructDto } from "./models/GetUserAuthResourceStructDto";
import type { GetUserAuthResourceStructRespDto } from "./models/GetUserAuthResourceStructRespDto";
import type { GroupListRespDto } from "./models/GroupListRespDto";
import type { InvitationLinkDto } from "./models/InvitationLinkDto";
import type { IsSuccessRespDto } from "./models/IsSuccessRespDto";
import type { LoginTokenRespDto } from "./models/LoginTokenRespDto";
import type { LoginTokenResponseDataDto } from "./models/LoginTokenResponseDataDto";
import type { PasswordResetVerifyResp } from "./models/PasswordResetVerifyResp";
import type { PolicyInviteeJoinedDto } from "./models/PolicyInviteeJoinedDto";
import type { PublicAccountSwitchLoginDto } from "./models/PublicAccountSwitchLoginDto";
import type { ResetPasswordDto } from "./models/ResetPasswordDto";
import type { RevokeDeviceSessionDto } from "./models/RevokeDeviceSessionDto";
import type { RoleListRespDto } from "./models/RoleListRespDto";
import type { SendEmailDto } from "./models/SendEmailDto";
import type { SendEmailRespDto } from "./models/SendEmailRespDto";
import type { SendSMSDto } from "./models/SendSMSDto";
import type { SendSMSRespDto } from "./models/SendSMSRespDto";
import { SigninByCredentialsDto } from "./models/SigninByCredentialsDto";
import type { SigninByMobileDto } from "./models/SigninByMobileDto";
import type { SignInByPushDto } from "./models/SignInByPushDto";
import { SignUpDto } from "./models/SignUpDto";
import type { SystemInfoResp } from "./models/SystemInfoResp";
import type { TerminalSessionRespDto } from "./models/TerminalSessionRespDto";
import type { UnbindDeviceDto } from "./models/UnbindDeviceDto";
import type { UnbindEmailDto } from "./models/UnbindEmailDto";
import type { UnbindPhoneDto } from "./models/UnbindPhoneDto";
import type { UniversalInvitationUserJoinDto } from "./models/UniversalInvitationUserJoinDto";
import type { UnlinkExtIdpDto } from "./models/UnlinkExtIdpDto";
import type { UpdateEmailDto } from "./models/UpdateEmailDto";
import type { UpdatePasswordDto } from "./models/UpdatePasswordDto";
import type { UpdatePhoneDto } from "./models/UpdatePhoneDto";
import type { UpdateUserProfileDto } from "./models/UpdateUserProfileDto";
import type { UserSingleRespDto } from "./models/UserSingleRespDto";
import type { ValidatePasswordDto } from "./models/ValidatePasswordDto";
import type { ValidatePasswordRespDto } from "./models/ValidatePasswordRespDto";
import type { VerifyAuthenticationDto } from "./models/VerifyAuthenticationDto";
import type { VerifyAuthenticationResultRespDto } from "./models/VerifyAuthenticationResultRespDto";
import type { VerifyDeleteAccountRequestDto } from "./models/VerifyDeleteAccountRequestDto";
import type { VerifyDeleteAccountRequestRespDto } from "./models/VerifyDeleteAccountRequestRespDto";
import type { VerifyInviteCodeDto } from "./models/VerifyInviteCodeDto";
import type { VerifyRegistrationDto } from "./models/VerifyRegistrationDto";
import type { VerifyRegistrationResultRespDto } from "./models/VerifyRegistrationResultRespDto";
import type { VerifyResetPasswordRequestDto } from "./models/VerifyResetPasswordRequestDto";
import type { VerifyUpdateEmailRequestDto } from "./models/VerifyUpdateEmailRequestDto";
import type { VerifyUpdateEmailRequestRespDto } from "./models/VerifyUpdateEmailRequestRespDto";
import type { VerifyUpdatePhoneRequestDto } from "./models/VerifyUpdatePhoneRequestDto";
import type { VerifyUpdatePhoneRequestRespDto } from "./models/VerifyUpdatePhoneRequestRespDto";
import type { WechatLoginTokenRespDto } from "./models/WechatLoginTokenRespDto";
import type { WechatMobileAuthByCodeIdentityInput } from "./models/WechatMobileAuthByCodeIdentityInput";
import type { GeneFastpassQRCodeRespDto } from "./models/GeneFastpassQRCodeRespDto";
import type { GetFastpassQRCodeRelationAppsRespDto } from "./models/GetFastpassQRCodeRelationAppsRespDto";
import type { GetPushCodeRelationAppsDto } from "./models/GetPushCodeRelationAppsDto";
import type { GetPushCodeRelationAppsRespDto } from "./models/GetPushCodeRelationAppsRespDto";
import type { SignInFastpassDto } from "./models/SignInFastpassDto";
import type { AppQRCodeLoginDto } from "./models/AppQRCodeLoginDto";
import type { CheckDeviceCredentialIdDto } from "./models/CheckDeviceCredentialIdDto";
import type { ListDeviceCredentialDto } from "./models/ListDeviceCredentialDto";
import type { ListWebAuthnAuthenticatorDeviceDataDto } from "./models/ListWebAuthnAuthenticatorDeviceDataDto";
import type { PreCheckCodeDto } from "./models/PreCheckCodeDto";
import type { PreCheckCodeRespDto } from "./models/PreCheckCodeRespDto";
import type { RemoveDeviceCredentialDto } from "./models/RemoveDeviceCredentialDto";
import type { UpdatePasskeyDto } from "./models/UpdatePasskeyDto";
import type { WebAuthnCheckValidCredentialsByCredIdsRespDto } from "./models/WebAuthnCheckValidCredentialsByCredIdsRespDto";
import type { WebAuthnRemoveCredentialDto } from "./models/WebAuthnRemoveCredentialDto";
import type { LegacyExchangeTokenParams } from "./models/LegacyExchangeTokenParams";
import type { LegacyExchangeTokenResponse } from "./models/LegacyExchangeTokenResponse";
import type { MfaTokenIntrospectEndpointParams } from "./models/MfaTokenIntrospectEndpointParams";
import type { MfaTokenIntrospectResponse } from "./models/MfaTokenIntrospectResponse";
import type { EnrollFactorDto } from "./models/EnrollFactorDto";
import type { EnrollFactorRespDto } from "./models/EnrollFactorRespDto";
import type { GetFactorRespDto } from "./models/GetFactorRespDto";
import type { ListEnrolledFactorsRespDto } from "./models/ListEnrolledFactorsRespDto";
import type { ListFactorsToEnrollRespDto } from "./models/ListFactorsToEnrollRespDto";
import type { MfaOtpVerityDto } from "./models/MfaOtpVerityDto";
import type { MfaOtpVerityRespDto } from "./models/MfaOtpVerityRespDto";
import type { ResetFactorDto } from "./models/ResetFactorDto";
import type { ResetFactorRespDto } from "./models/ResetFactorRespDto";
import type { SendEnrollFactorRequestDto } from "./models/SendEnrollFactorRequestDto";
import type { SendEnrollFactorRequestRespDto } from "./models/SendEnrollFactorRequestRespDto";
import type { FinalizeWebAuthnLoginDto } from "./models/FinalizeWebAuthnLoginDto";

// ==== AUTO GENERATED AUTHENTICATION IMPORTS END ====

import WebSocket from "ws";
import type { GetWechatAccessTokenDto } from "./models/GetWechatAccessTokenDto";
import type { GetWechatAccessTokenRespDto } from "./models/GetWechatAccessTokenRespDto";
import type { GetWechatAccessTokenInfoRespDto } from "./models/GetWechatAccessTokenInfoRespDto";
const pkg = require("../package.json");

export class AuthenticationClient {
  private readonly options: Required<AuthenticationClientInitOptions>;
  private readonly httpClient: AuthenticationHttpClient;
  private wsMap: {
    [propName: string]: {
      socket: WebSocket;
      lockConnect: boolean;
      timeConnect: number;
    };
  };
  private eventBus: { [propName: string]: [Function, Function][] };

  constructor(options: AuthenticationClientInitOptions) {
    options.cookieKey = options.cookieKey ?? DEFAULT_COOKIE_KEY;
    options.scope = options.scope ?? DEFAULT_SCOPE;
    options.protocol = options.protocol ?? "oidc";
    options.tokenEndPointAuthMethod =
      options.tokenEndPointAuthMethod ?? "client_secret_post";
    options.introspectionEndPointAuthMethod =
      options.introspectionEndPointAuthMethod ?? "client_secret_post";
    options.revocationEndPointAuthMethod =
      options.revocationEndPointAuthMethod ?? "client_secret_post";
    options.timeout = options.timeout || 10000;
    options.retryTimes = options.retryTimes ?? 5;
    options.socketUri = options.socketUri ?? DEFAULT_SOCKET_URI;

    if (!options.scope?.includes("openid")) {
      throw new Error("scope must include openid");
    }

    // Check required parameters
    if (!options.appId) {
      throw new Error(
        "Init AuthenticationClient failed: appId is not provided"
      );
    }

    if (!options.appHost) {
      throw new Error(
        "Init AuthenticationClient failed: appHost is not provided"
      );
    }

    if (options.tokenEndPointAuthMethod !== "none" && !options.appSecret) {
      throw new Error(
        `Init AuthenticationClient failed: appSecret is not provided when tokenEndPointAuthMethod is not "none"`
      );
    }

    this.options = options as any;
    this.options.appHost = domainC14n(options.appHost);

    this.httpClient = new AuthenticationHttpClient(this.options);
    this.wsMap = {};
    this.eventBus = {};
  }

  /**
   * Redirect user's browser to GenAuth's authentication URL for authentication, using Cookie to pass context information to application callback endpoint
   *
   * @param res http response object, used to set context Cookie and perform redirection
   *
   * @param options.scope Permissions requested by application from GenAuth, overrides corresponding settings in initialization parameters
   * @param options.state Intermediate state identifier, auto-generated by default
   * @param options.nonce Random string appearing in ID Token, auto-generated by default
   * @param options.redirectUri Callback URL, overrides corresponding settings in initialization parameters
   * @param options.forced Force display login page even if user is already logged in
   */
  public async loginWithRedirect(
    res: ServerResponse,
    options: {
      scope?: string;
      state?: string;
      nonce?: string;
      redirectUri?: string;
      forced?: boolean;
    } = {}
  ): Promise<void> {
    const { url, state, nonce } = this.buildAuthorizeUrl(options);
    res.setHeader("Location", url);

    const tx: LoginTransaction = {
      state,
      nonce,
      redirectUri: options.redirectUri ?? this.options.redirectUri,
    };

    // Set intermediate state cookie to verify authentication result at callback endpoint
    res.setHeader(
      "Set-Cookie",
      `${this.options.cookieKey}=${base64url.encode(
        JSON.stringify(tx)
      )}; HttpOnly; SameSite=Lax`
    );

    res.writeHead(302).end();
  }

  /**
   * Handle authentication result at application callback endpoint, use context information passed in Cookie for security verification, and obtain user login state
   *
   * @param req http request object, used to get authentication result and context Cookie
   * @param res http response object, only used to clear context Cookie
   */
  public async handleRedirectCallback(
    req: IncomingMessage,
    res: ServerResponse
  ): Promise<OIDCTokenResponse> {
    if (!req.url) {
      throw new Error("req object has no url");
    }

    const url = new URL(req.url, "http://dummy");
    const error = url.searchParams.get("error");
    if (error) {
      throw new Error(
        `Authentication server returned error ${error}: ${url.searchParams.get(
          "error_description"
        )}`
      );
    }

    const code = url.searchParams.get("code");
    if (!code) {
      throw new Error(
        "Authentication server did not return authorization code"
      );
    }

    const cookieKey = `${this.options.cookieKey}=`;
    const txStr = (req.headers["cookie"] ?? req.headers["Cookie"])
      ?.toString()
      .split("; ")
      .find((item) => item.startsWith(cookieKey))
      ?.substring(cookieKey.length);

    if (!txStr) {
      throw new Error("No intermediate state in Cookie, authentication failed");
    }

    const tx: LoginTransaction = JSON.parse(base64url.decode(txStr));
    // Clear intermediate state cookie
    res.setHeader(
      "Set-Cookie",
      `${this.options.cookieKey}=; HttpOnly; SameSite=Lax; Max-Age=0`
    );

    const state = url.searchParams.get("state");
    if (state !== tx.state) {
      throw new Error("state verification failed");
    }

    const loginState = await this.getAccessTokenByCode(code);
    return loginState;
  }

  /**
   * @description Save user's Access Token after login completion, subsequent requests will include this token
   *
   */
  public setAccessToken(accessToken: string) {
    this.options.accessToken = accessToken;
  }

  private _generateTokenRequest(params: { [x: string]: string }) {
    let ret: any = {};
    // Remove all undefined kv
    Object.keys(params).map((key) => {
      if (typeof params[key] !== "undefined") {
        ret[key] = params[key];
      }
    });
    let p = new URLSearchParams(ret);
    return p.toString();
  }

  /**
   * @param {string} code Authorization code
   * @param {string} codeVerifier Verification code
   */
  private async _getAccessTokenByCodeWithClientSecretPost(
    code: string,
    codeVerifier?: string
  ) {
    const qstr = this._generateTokenRequest({
      client_id: this.options.appId,
      client_secret: this.options.appSecret,
      grant_type: "authorization_code",
      code,
      redirect_uri: this.options.redirectUri,
      code_verifier: codeVerifier!,
    });
    let api = "";
    if (this.options.protocol === "oidc") {
      api = `/oidc/token`;
    } else if (this.options.protocol === "oauth") {
      api = `/oauth/token`;
    }
    let tokenSet = await this.httpClient.request({
      method: "POST",
      url: api,
      data: qstr,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return tokenSet;
  }

  private _generateBasicAuthToken(appId?: string, secret?: string) {
    let id = appId || this.options.appId;
    let s = secret || this.options.appSecret;
    let token = "Basic " + Buffer.from(id + ":" + s).toString("base64");
    return token;
  }
  /**
   * @param {string} code Authorization code
   * @param {string} codeVerifier Verification code
   */
  private async _getAccessTokenByCodeWithClientSecretBasic(
    code: string,
    codeVerifier?: string
  ) {
    let api = "";
    if (this.options.protocol === "oidc") {
      api = `/oidc/token`;
    } else if (this.options.protocol === "oauth") {
      api = `/oauth/token`;
    }
    const qstr = this._generateTokenRequest({
      grant_type: "authorization_code",
      code,
      redirect_uri: this.options.redirectUri,
      code_verifier: codeVerifier!,
    });
    let tokenSet = await this.httpClient.request({
      data: qstr,
      method: "POST",
      url: api,
      headers: {
        Authorization: this._generateBasicAuthToken(),
      },
    });
    return tokenSet;
  }
  /**
   * @param {string} code Authorization code
   * @param {string} codeVerifier Verification code
   */
  private async _getAccessTokenByCodeWithNone(
    code: string,
    codeVerifier?: string
  ) {
    let api = "";
    if (this.options.protocol === "oidc") {
      api = `/oidc/token`;
    } else if (this.options.protocol === "oauth") {
      api = `/oauth/token`;
    }
    const qstr = this._generateTokenRequest({
      client_id: this.options.appId,
      grant_type: "authorization_code",
      code,
      redirect_uri: this.options.redirectUri,
      code_verifier: codeVerifier!,
    });
    let tokenSet = await this.httpClient.request({
      method: "POST",
      url: api,
      data: qstr,
    });
    return tokenSet;
  }

  /**
   * Get user's Token information using authorization code.
   *
   * @param code Authorization code Code, after successful authentication, GenAuth will send authorization code Code to callback address, see Using OIDC Authorization Code Mode for details, each Code can only be used once.
   * @param options.codeVerifier Original verification code, not digest value.
   * @returns
   */
  public async getAccessTokenByCode(
    code: string,
    options?: { codeVerifier?: string }
  ): Promise<OIDCTokenResponse> {
    if (!["oauth", "oidc"].includes(this.options.protocol)) {
      throw new Error(
        "protocol parameter passed during AuthenticationClient initialization must be oauth or oidc, please check parameters"
      );
    }
    if (
      !this.options.appSecret &&
      this.options.tokenEndPointAuthMethod !== "none"
    ) {
      throw new Error(
        "Please pass appId and secret parameters when initializing AuthenticationClient"
      );
    }
    if (this.options.tokenEndPointAuthMethod === "client_secret_post") {
      return await this._getAccessTokenByCodeWithClientSecretPost(
        code,
        options?.codeVerifier
      );
    }
    if (this.options.tokenEndPointAuthMethod === "client_secret_basic") {
      return await this._getAccessTokenByCodeWithClientSecretBasic(
        code,
        options?.codeVerifier
      );
    }
    if (this.options.tokenEndPointAuthMethod === "none") {
      return await this._getAccessTokenByCodeWithNone(
        code,
        options?.codeVerifier
      );
    } else {
      throw new Error(
        "Unsupported tokenEndPointAuthMethod: " +
          this.options.tokenEndPointAuthMethod
      );
    }
  }

  /**
   * Get Access Token with permissions using programmatic access account.
   *
   * @param scope Permission items, space-separated string, each item represents a permission. See Machine-to-Machine (M2M) Authorization for details.
   * @param options.accessKey Programmatic access account AccessKey, if not provided uses appId passed during SDK initialization.
   * @param options.secretKey Programmatic access account SecretKey, if not provided uses appSecret passed during SDK initialization.
   * @returns
   */
  public async getAccessTokenByClientCredentials(
    scope: string,
    options?: {
      accessKey: string;
      accessSecret: string;
    }
  ) {
    if (!scope) {
      throw new Error(
        "Please pass scope parameter, see documentation: https://docs.genauth.ai/guides/authorization/m2m-authz.html"
      );
    }
    if (!options) {
      throw new Error(
        "Please pass { accessKey: string, accessSecret: string } when calling this method, see documentation: https://docs.genauth.ai/guides/authorization/m2m-authz.html"
      );
    }
    let i = options?.accessKey || this.options.appId;
    let s = options?.accessSecret || this.options.appSecret;
    const qstr = this._generateTokenRequest({
      client_id: i,
      client_secret: s,
      grant_type: "client_credentials",
      scope: scope,
    });
    let api = "";
    if (this.options.protocol === "oidc") {
      api = `/oidc/token`;
    } else if (this.options.protocol === "oauth") {
      api = `/oauth/token`;
    }
    let tokenSet = await this.httpClient.request({
      method: "POST",
      url: api,
      data: qstr,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return tokenSet;
  }

  /**
   * Get user information using Access token.
   *
   * @param accessToken Access token, content of Access token obtained using authorization code Code.
   * @param options
   * @returns
   */
  public async getUserInfoByAccessToken(
    accessToken: string,
    options?: {
      method?: "POST" | "GET";
      tokenPlace?: "query" | "header" | "body";
    }
  ) {
    if (options) {
      if (options.method && !["POST", "GET"].includes(options.method)) {
        throw new Error(
          "options.method parameter can be POST or GET, please check input"
        );
      }
      if (
        options.tokenPlace &&
        !["query", "header", "body"].includes(options.tokenPlace)
      ) {
        throw new Error(
          "options.tokenPlace parameter can be query, header, body, please check input"
        );
      }
      if (options.method === "GET" && options.tokenPlace === "body") {
        throw new Error(
          "options.tokenPlace parameter cannot be body when options.method is GET"
        );
      }
      options.method = options.method || "GET";
      options.tokenPlace = options.tokenPlace || "query";
    }
    let api = "";
    if (this.options.protocol === "oidc") {
      api = `/oidc/me`;
    } else if (this.options.protocol === "oauth") {
      api = `/oauth/me`;
    }
    if (options?.method === "POST") {
      if (options?.tokenPlace === "header") {
        let userInfo = await this.httpClient.request({
          method: "POST",
          url: api,
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        });
        return userInfo;
      } else if (options?.tokenPlace === "query") {
        let userInfo = await this.httpClient.request({
          method: "POST",
          url: api,
          params: {
            access_token: accessToken,
          },
        });
        return userInfo;
      } else if (options?.tokenPlace === "body") {
        let userInfo = await this.httpClient.request({
          method: "POST",
          url: api,
          data: serialize({
            access_token: accessToken,
          }),
        });
        return userInfo;
      }
    } else if (options?.method === "GET") {
      if (options?.tokenPlace === "header") {
        let userInfo = await this.httpClient.request({
          method: "GET",
          url: api,
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        });
        return userInfo;
      } else if (options?.tokenPlace === "query") {
        let userInfo = await this.httpClient.request({
          method: "GET",
          url: api,
          params: {
            access_token: accessToken,
          },
        });
        return userInfo;
      }
    } else {
      // Default use GET + query to get user info
      let userInfo = await this.httpClient.request({
        method: "GET",
        url: api,
        params: {
          access_token: accessToken,
        },
      });
      return userInfo;
    }
  }

  /**
   * Generate OIDC/OAuth/CAS/SAML protocol user login link, users can access GenAuth's online login page through this link.
   *
   */
  public buildAuthorizeUrl(
    options?: OidcParams | OauthParams | CasParams
  ): AuthUrlResult {
    if (!this.options.appHost) {
      throw new Error(
        "Please pass application domain appHost parameter when initializing AuthenticationClient, like: https://app1.genauth.ai"
      );
    }
    if (this.options.protocol === "oidc") {
      return this._buildOidcAuthorizeUrl(options as OidcParams);
    }
    if (this.options.protocol === "oauth") {
      const url = this._buildOauthAuthorizeUrl(options as OauthParams);
      return {
        url,
        state: (options as OauthParams)?.state,
      };
    }
    if (this.options.protocol === "saml") {
      const url = this._buildSamlAuthorizeUrl();
      return {
        url,
        state: (options as OauthParams)?.state,
      };
    }
    if (this.options.protocol === "cas") {
      const url = this._buildCasAuthorizeUrl(options as CasParams);
      return {
        url,
      };
    }
    throw new Error(
      "Unsupported protocol type, please pass protocol parameter when initializing AuthenticationClient, can be oidc, oauth, saml, cas"
    );
  }

  private _buildOidcAuthorizeUrl(options?: OidcParams) {
    const state = options?.state ?? generateRandomString(16);
    const nonce = options?.nonce ?? generateRandomString(16);
    const scope = options?.scope ?? this.options.scope;

    const params: AuthURLParams = {
      redirect_uri: options?.redirectUri ?? this.options.redirectUri,
      response_mode: options?.responseMode || "query",
      response_type: options?.responseType || "code",
      client_id: this.options.appId,
      scope,
      state,
      nonce,
    };
    if (options?.tenantId) {
      params.tenantId = options?.tenantId;
    }
    if (options?.forced) {
      params.prompt = "login";
    } else if (scope.split(" ").includes("offline_access")) {
      params.prompt = "consent";
    }

    return {
      url: `${this.options.appHost}/oidc/auth?${createQueryParams(params)}`,
      state,
      nonce,
    };
  }

  private _buildOauthAuthorizeUrl(options: OauthParams) {
    let map: any = {
      appId: "client_id",
      scope: "scope",
      state: "state",
      responseType: "response_type",
      redirectUri: "redirect_uri",
    };
    let res: any = {
      state: Math.random().toString().slice(2),
      scope: "user",
      client_id: this.options.appId,
      redirect_uri: this.options.redirectUri,
      response_type: "code",
    };
    Object.keys(map).forEach((k) => {
      if (options && (options as any)[k]) {
        res[map[k]] = (options as any)[k];
      }
    });
    let params = new URLSearchParams(res);
    let authorizeUrl =
      this.options.appHost + "/oauth/auth?" + params.toString();
    return authorizeUrl;
  }

  private _buildSamlAuthorizeUrl() {
    return this.options.appHost + "/api/v2/saml-idp/" + this.options.appId;
  }
  private _buildCasAuthorizeUrl(options: CasParams) {
    if (options?.service) {
      return `${this.options.appHost}/cas-idp/${this.options.appId}?service=${options?.service}`;
    }
    return `${this.options.appHost}/cas-idp/${this.options.appId}`;
  }
  private _buildCasLogoutUrl(options: LogoutParams) {
    if (options?.redirectUri) {
      return (
        this.options.appHost + "/cas-idp/logout?url=" + options.redirectUri
      );
    }
    return `${this.options.appHost}/cas-idp/logout`;
  }

  private _buildOidcLogoutUrl(options: LogoutParams): string {
    const redirectUri = options.redirectUri ?? this.options.logoutRedirectUri;
    const params: LogoutURLParams = {
      ...(redirectUri && {
        post_logout_redirect_uri: redirectUri,
        state: options.state,
      }),
      id_token_hint: options.idToken,
    };
    return `${this.options.appHost}/oidc/session/end?${createQueryParams(
      params
    )}`;
  }

  private _buildEasyLogoutUrl(options?: LogoutParams) {
    if (options?.redirectUri) {
      return `${this.options.appHost}/login/profile/logout?redirect_uri=${options.redirectUri}`;
    }
    return `${this.options.appHost}/login/profile/logout`;
  }

  /**
   * Concatenate CAS/OIDC protocol logout URL
   *
   */
  public buildLogoutUrl(options?: LogoutParams) {
    if (this.options.protocol === "cas") {
      return this._buildCasLogoutUrl(options!);
    }
    if (this.options.protocol === "oidc") {
      return this._buildOidcLogoutUrl(options!);
    } else {
      throw this._buildEasyLogoutUrl(options!);
    }
  }

  private async _getNewAccessTokenByRefreshTokenWithClientSecretPost(
    refreshToken: string
  ) {
    const qstr = this._generateTokenRequest({
      client_id: this.options.appId,
      client_secret: this.options.appSecret,
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    });
    let api = "";
    if (this.options.protocol === "oidc") {
      api = `/oidc/token`;
    } else if (this.options.protocol === "oauth") {
      api = `/oauth/token`;
    }
    let tokenSet = await this.httpClient.request({
      method: "POST",
      url: api,
      data: qstr,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return tokenSet;
  }

  private async _getNewAccessTokenByRefreshTokenWithClientSecretBasic(
    refreshToken: string
  ) {
    let api = "";
    if (this.options.protocol === "oidc") {
      api = `/oidc/token`;
    } else if (this.options.protocol === "oauth") {
      api = `/oauth/token`;
    }
    const qstr = this._generateTokenRequest({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    });
    let tokenSet = await this.httpClient.request({
      data: qstr,
      method: "POST",
      url: api,
      headers: {
        Authorization: this._generateBasicAuthToken(),
      },
    });
    return tokenSet;
  }

  private async _getNewAccessTokenByRefreshTokenWithNone(refreshToken: string) {
    let api = "";
    if (this.options.protocol === "oidc") {
      api = `${this.options.appHost}/oidc/token`;
    } else if (this.options.protocol === "oauth") {
      api = `${this.options.appHost}/oauth/token`;
    }
    const qstr = this._generateTokenRequest({
      client_id: this.options.appId,
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    });
    let tokenSet = await this.httpClient.request({
      method: "POST",
      url: api,
      data: qstr,
    });
    return tokenSet;
  }

  /**
   * Get new Access token using Refresh token.
   * @param refreshToken Refresh token, can be obtained from refresh_token in return value of AuthenticationClient.getAccessTokenByCode method.
   * @returns
   */
  public async getNewAccessTokenByRefreshToken(refreshToken: string) {
    if (!["oauth", "oidc"].includes(this.options.protocol)) {
      throw new Error(
        "protocol parameter passed during AuthenticationClient initialization must be oauth or oidc, please check parameters"
      );
    }
    if (
      !this.options.appSecret &&
      this.options.tokenEndPointAuthMethod !== "none"
    ) {
      throw new Error(
        "Please pass appId and secret parameters when initializing AuthenticationClient"
      );
    }
    if (this.options.tokenEndPointAuthMethod === "client_secret_post") {
      return await this._getNewAccessTokenByRefreshTokenWithClientSecretPost(
        refreshToken
      );
    }
    if (this.options.tokenEndPointAuthMethod === "client_secret_basic") {
      return await this._getNewAccessTokenByRefreshTokenWithClientSecretBasic(
        refreshToken
      );
    }
    if (this.options.tokenEndPointAuthMethod === "none") {
      return await this._getNewAccessTokenByRefreshTokenWithNone(refreshToken);
    }
  }

  private async _revokeTokenWithClientSecretPost(token: string) {
    const qstr = this._generateTokenRequest({
      client_id: this.options.appId,
      client_secret: this.options.appSecret,
      token,
    });
    let api = "";
    if (this.options.protocol === "oidc") {
      api = `/oidc/token/revocation`;
    } else if (this.options.protocol === "oauth") {
      api = `/oauth/token/revocation`;
    }
    let tokenSet = await this.httpClient.request({
      method: "POST",
      url: api,
      data: qstr,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return tokenSet;
  }

  private async _revokeTokenWithClientSecretBasic(token: string) {
    let api = "";
    if (this.options.protocol === "oidc") {
      api = `/oidc/token/revocation`;
    } else if (this.options.protocol === "oauth") {
      throw new Error(
        "OAuth 2.0 does not support revoking Token using client_secret_basic authentication mode"
      );
    }
    const qstr = this._generateTokenRequest({
      token: token,
    });
    let result = await this.httpClient.request({
      data: qstr,
      method: "POST",
      url: api,
      headers: {
        Authorization: this._generateBasicAuthToken(),
      },
    });
    return result;
  }
  private async _revokeTokenWithNone(token: string) {
    let api = "";
    if (this.options.protocol === "oidc") {
      api = `/oidc/token/revocation`;
    } else if (this.options.protocol === "oauth") {
      api = `/oauth/token/revocation`;
    }
    const qstr = this._generateTokenRequest({
      client_id: this.options.appId,
      token: token,
    });
    let result = await this.httpClient.request({
      method: "POST",
      url: api,
      data: qstr,
    });
    return result;
  }

  /**
   * Revoke Access token or Refresh token. Access token or Refresh token holders can notify GenAuth that they no longer need the token and want it revoked.
   * @param token Access token or Refresh token, can be obtained from access_token, refresh_token in return value of AuthenticationClient.getAccessTokenByCode method.
   * @returns
   */
  public async revokeToken(token: string) {
    if (!["oauth", "oidc"].includes(this.options.protocol)) {
      throw new Error(
        "protocol parameter passed during AuthenticationClient initialization must be oauth or oidc, please check parameters"
      );
    }
    if (
      !this.options.appSecret &&
      this.options.revocationEndPointAuthMethod !== "none"
    ) {
      throw new Error(
        "Please pass appId and secret parameters when initializing AuthenticationClient"
      );
    }
    if (this.options.revocationEndPointAuthMethod === "client_secret_post") {
      await this._revokeTokenWithClientSecretPost(token);
      return true;
    }
    if (this.options.revocationEndPointAuthMethod === "client_secret_basic") {
      await this._revokeTokenWithClientSecretBasic(token);
      return true;
    }
    if (this.options.revocationEndPointAuthMethod === "none") {
      await this._revokeTokenWithNone(token);
      return true;
    }
    throw new Error(
      "revocationEndPointAuthMethod parameter passed during AuthenticationClient initialization can be client_secret_base, client_secret_post, none, please check parameters"
    );
  }

  private async _introspectTokenWithClientSecretPost(token: string) {
    const qstr = this._generateTokenRequest({
      client_id: this.options.appId,
      client_secret: this.options.appSecret,
      token,
    });
    let api = "";
    if (this.options.protocol === "oidc") {
      api = `/oidc/token/introspection`;
    } else if (this.options.protocol === "oauth") {
      api = `/oauth/token/introspection`;
    }
    let tokenSet = await this.httpClient.request({
      method: "POST",
      url: api,
      data: qstr,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return tokenSet;
  }

  private async _introspectTokenWithClientSecretBasic(token: string) {
    let api = "";
    if (this.options.protocol === "oidc") {
      api = `/oidc/token/introspection`;
    } else if (this.options.protocol === "oauth") {
      api = `/oauth/token/introspection`;
    }
    const qstr = this._generateTokenRequest({
      token: token,
    });
    let result = await this.httpClient.request({
      data: qstr,
      method: "POST",
      url: api,
      headers: {
        Authorization: this._generateBasicAuthToken(),
      },
    });
    return result;
  }

  private async _introspectTokenWithNone(token: string) {
    let api = "";
    if (this.options.protocol === "oidc") {
      api = `/oidc/token/introspection`;
    } else if (this.options.protocol === "oauth") {
      api = `/oauth/token/introspection`;
    }
    const qstr = this._generateTokenRequest({
      client_id: this.options.appId,
      token: token,
    });
    let result = await this.httpClient.request({
      method: "POST",
      url: api,
      data: qstr,
    });
    return result;
  }

  /**
   * @param token: Access token or Refresh token, can be obtained from the access_token, refresh_token in the return value of AuthenticationClient.getAccessTokenByCode method.
   *
   */
  public async introspectToken(token: string) {
    if (!["oauth", "oidc"].includes(this.options.protocol)) {
      throw new Error(
        "The protocol parameter passed in when initializing AuthenticationClient must be oauth or oidc, please check the parameter"
      );
    }
    if (
      !this.options.appSecret &&
      this.options.introspectionEndPointAuthMethod !== "none"
    ) {
      throw new Error(
        "Please pass in appId and secret parameters when initializing AuthenticationClient"
      );
    }
    if (this.options.introspectionEndPointAuthMethod === "client_secret_post") {
      return await this._introspectTokenWithClientSecretPost(token);
    }
    if (
      this.options.introspectionEndPointAuthMethod === "client_secret_basic"
    ) {
      return await this._introspectTokenWithClientSecretBasic(token);
    }
    if (this.options.introspectionEndPointAuthMethod === "none") {
      return await this._introspectTokenWithNone(token);
    }
    throw new Error(
      "The introspectionEndPointAuthMethod parameter passed in when initializing AuthenticationClient can be client_secret_base, client_secret_post, none, please check the parameter"
    );
  }

  /**
   * Verify CAS 1.0 Ticket validity.
   * @param ticket The ticket issued by GenAuth after successful CAS authentication.
   * @param service CAS callback URL.
   * @returns
   */
  public async validateTicketV1(ticket: string, service: string) {
    const api = `/cas-idp/${this.options.appId}/validate`;
    let result = await this.httpClient.request({
      method: "GET",
      url: api,
      params: {
        service,
        ticket,
      },
    });
    const [valid] = result.split("\n");
    return {
      valid: valid === "yes",
      ...(valid !== "yes" && { message: "Invalid ticket" }),
    };
  }

  /**
   * Verify CAS 2.0 Ticket validity and return user attributes. Data format defaults to JSON but XML can be selected.
   *
   * @param ticket The ticket issued by GenAuth after successful CAS authentication.
   * @param service CAS callback URL.
   * @param format Return data format, can be XML or JSON, defaults to JSON.
   * @returns
   */
  public async validateTicketV2(
    ticket: string,
    service: string,
    format: "XML" | "JSON" = "JSON"
  ): Promise<
    Cas20ValidationSuccessResult | Cas20ValidationFailureResult | string
  > {
    if (!ticket) {
      throw new Error("Please provide one-time ticket");
    }
    if (!service) {
      throw new Error("Please provide service URL");
    }
    if (format !== "XML" && format !== "JSON") {
      throw new Error(
        "format parameter can only be XML or JSON, please check input"
      );
    }
    const api = `/cas-idp/${this.options.appId}/serviceValidate`;
    let result = await this.httpClient.request({
      method: "GET",
      url: api,
      params: {
        service,
        ticket,
        format,
      },
    });
    return result;
  }

  /**
   * Generate PKCE verification code
   */
  public generateCodeChallenge() {
    return generateRandomString(43);
  }

  /**
   * Generate PKCE verification code digest
   */
  public getCodeChallengeDigest(options: {
    codeChallenge: string;
    method: "S256" | "plain";
  }) {
    if (!options) {
      throw new Error(
        "Please provide options parameter, options.codeChallenge should be a string with length >= 43, options.method can be S256 or plain"
      );
    }
    if (!options.codeChallenge) {
      throw new Error(
        "Please provide options.codeChallenge, value should be a string with length >= 43"
      );
    }
    const { method = "S256" } = options;
    if (method === "S256") {
      // url safe base64
      return sha256(options.codeChallenge)
        .toString(CryptoJS.enc.Base64)
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=/g, "");
    }
    if (method === "plain") {
      return options.codeChallenge;
    }
    throw new Error("Unsupported options.method, can only be S256 or plain");
  }

  private async fetchJWKS(options?: {
    /**
     * Server's JWKS public key used to verify Token signature, by default will be automatically fetched from server's JWKS endpoint via network request
     */
    serverJWKS?: JWKSObject;
  }) {
    if (options?.serverJWKS) {
      return await parseJWKS(options.serverJWKS);
    } else {
      const keys = await this.httpClient.request({
        method: "GET",
        url: "/oidc/.well-known/jwks.json",
      });
      return await parseJWKS(keys);
    }
  }

  /**
   * Verify and parse Access Token
   *
   * @param token Access Token
   */
  public async parseAccessToken(
    token: string,
    options?: {
      /**
       * Server's JWKS public key used to verify Token signature, by default will be automatically fetched from server's JWKS endpoint via network request
       */
      serverJWKS?: JWKSObject;
    }
  ): Promise<AccessToken> {
    const jwks: JoseKey[] = await this.fetchJWKS(options);
    const { payload } = await compactVerify(
      token,
      (h, _t) => (jwks.find((k) => h.kid === k.id) ?? jwks[0]).key
    );
    return JSON.parse(new TextDecoder().decode(payload)) as AccessToken;
  }

  /**
   * Verify and parse ID Token
   *
   * @param token ID Token
   */
  public async parseIDToken(
    token: string,
    options?: {
      /**
       * Server's JWKS public key used to verify Token signature, by default will be automatically fetched from server's JWKS endpoint via network request
       */
      serverJWKS?: JWKSObject;
    }
  ): Promise<IDToken> {
    const jwks: JoseKey[] = await this.fetchJWKS(options);
    const { payload } = await compactVerify(token, (h, _t) => {
      if (h.alg === "HS256") {
        return createSecretKey(Buffer.from(this.options.appSecret));
      }
      return (jwks.find((k) => h.kid === k.id) ?? jwks[0]).key;
    });
    return JSON.parse(new TextDecoder().decode(payload)) as IDToken;
  }

  /**
   * Redirect browser to GenAuth's logout URL to perform logout
   *
   * @param res HTTP response object used for redirection
   *
   * @param options.idToken ID Token obtained during user login, used to invalidate user token, recommended to pass in
   * @param options.redirectUri Redirect target URL after logout, overrides corresponding setting in initialization parameters
   * @param options.state Intermediate state identifier passed to target URL
   */
  public async logoutWithRedirect(
    res: ServerResponse,
    options?: LogoutParams
  ): Promise<void> {
    res.setHeader("Location", this.buildLogoutUrl(options)!).writeHead(302);
  }

  // ==== Login methods based on signInByCredentials BEGIN

  /**
   * Login with email + password
   *
   */
  public async signInByEmailPassword(requestBody: {
    email: string;
    password: string;
    options?: SignInOptionsDto;
  }) {
    const { email, password, options } = requestBody;
    const { tokenEndPointAuthMethod } = this.options;
    let dto: SigninByCredentialsDto = {
      connection: SigninByCredentialsDto.connection.PASSWORD,
      passwordPayload: {
        password,
        email,
      },
      options,
    };
    if (tokenEndPointAuthMethod === "client_secret_post") {
      dto.client_id = this.options.appId;
      dto.client_secret = this.options.appSecret;
    }

    return await this.signInByCredentials(dto);
  }

  /**
   * Login with phone number + password
   *
   */
  public async signInByPhonePassword(requestBody: {
    phone: string;
    password: string;
    options?: SignInOptionsDto;
  }) {
    const { password, phone, options } = requestBody;
    const { tokenEndPointAuthMethod } = this.options;
    let dto: SigninByCredentialsDto = {
      connection: SigninByCredentialsDto.connection.PASSWORD,
      passwordPayload: {
        password,
        phone,
      },
      options,
    };
    if (tokenEndPointAuthMethod === "client_secret_post") {
      dto.client_id = this.options.appId;
      dto.client_secret = this.options.appSecret;
    }

    return await this.signInByCredentials(dto);
  }

  /**
   * Login with username + password
   *
   */
  public async signInByUsernamePassword(requestBody: {
    username: string;
    password: string;
    options?: SignInOptionsDto;
  }) {
    const { password, username, options } = requestBody;
    const { tokenEndPointAuthMethod } = this.options;
    let dto: SigninByCredentialsDto = {
      connection: SigninByCredentialsDto.connection.PASSWORD,
      passwordPayload: {
        password,
        username,
      },
      options,
    };
    if (tokenEndPointAuthMethod === "client_secret_post") {
      dto.client_id = this.options.appId;
      dto.client_secret = this.options.appSecret;
    }

    return await this.signInByCredentials(dto);
  }

  /**
   * Login with account (username/phone/email) + password
   *
   */
  public async signInByAccountPassword(requestBody: {
    account: string;
    password: string;
    options?: SignInOptionsDto;
  }) {
    const { account, password, options } = requestBody;
    const { tokenEndPointAuthMethod } = this.options;
    let dto: SigninByCredentialsDto = {
      connection: SigninByCredentialsDto.connection.PASSWORD,
      passwordPayload: {
        password,
        account,
      },
      options,
    };
    if (tokenEndPointAuthMethod === "client_secret_post") {
      dto.client_id = this.options.appId;
      dto.client_secret = this.options.appSecret;
    }

    return await this.signInByCredentials(dto);
  }

  /**
   * Login with email + verification code
   *
   */
  public async signInByEmailPassCode(requestBody: {
    email: string;
    passCode: string;
    options?: SignInOptionsDto;
  }) {
    const { email, passCode, options } = requestBody;
    const { tokenEndPointAuthMethod } = this.options;
    let dto: SigninByCredentialsDto = {
      connection: SigninByCredentialsDto.connection.PASSCODE,
      passCodePayload: {
        email,
        passCode,
      },
      options,
    };
    if (tokenEndPointAuthMethod === "client_secret_post") {
      dto.client_id = this.options.appId;
      dto.client_secret = this.options.appSecret;
    }

    return await this.signInByCredentials(dto);
  }

  /**
   * Login with phone number + verification code
   *
   */
  public async signInByPhonePassCode(requestBody: {
    phone: string;
    phoneCountryCode?: string;
    passCode: string;
    options?: SignInOptionsDto;
  }) {
    const { phone, phoneCountryCode, passCode, options } = requestBody;
    const { tokenEndPointAuthMethod } = this.options;
    let dto: SigninByCredentialsDto = {
      connection: SigninByCredentialsDto.connection.PASSCODE,
      passCodePayload: {
        phone,
        phoneCountryCode,
        passCode,
      },
      options,
    };
    if (tokenEndPointAuthMethod === "client_secret_post") {
      dto.client_id = this.options.appId;
      dto.client_secret = this.options.appSecret;
    }

    return await this.signInByCredentials(dto);
  }

  /**
   * Login with AD account and password
   *
   */
  public async signInByAD(requestBody: {
    /**
     * All GenAuth APIs transmit passwords securely via HTTPS protocol, which can ensure security to some extent.
     * If you need a higher level of security, we also support RSA256 and SM2 password encryption methods. See optional parameter options.passwordEncryptType for details.
     *
     */
    password: string;
    /**
     * sAMAccountName in Windows AD user directory
     */
    sAMAccountName: string;
    options?: SignInOptionsDto;
  }) {
    const { password, sAMAccountName, options } = requestBody;
    const { tokenEndPointAuthMethod } = this.options;
    let dto: SigninByCredentialsDto = {
      connection: SigninByCredentialsDto.connection.AD,
      adPayload: {
        sAMAccountName,
        password,
      },
      options,
    };
    if (tokenEndPointAuthMethod === "client_secret_post") {
      dto.client_id = this.options.appId;
      dto.client_secret = this.options.appSecret;
    }

    return await this.signInByCredentials(dto);
  }

  /**
   * Login with LDAP account and password
   *
   */
  public async signInByLDAP(requestBody: {
    /**
     * All GenAuth APIs transmit passwords securely via HTTPS protocol, which can ensure security to some extent.
     * If you need a higher level of security, we also support RSA256 and SM2 password encryption methods. See optional parameter options.passwordEncryptType for details.
     *
     */
    password: string;
    /**
     * sAMAccountName in LDAP user directory
     */
    sAMAccountName: string;
    options?: SignInOptionsDto;
  }) {
    const { password, sAMAccountName, options } = requestBody;
    const { tokenEndPointAuthMethod } = this.options;
    let dto: SigninByCredentialsDto = {
      connection: SigninByCredentialsDto.connection.LDAP,
      ldapPayload: {
        password,
        sAMAccountName,
      },
      options,
    };
    if (tokenEndPointAuthMethod === "client_secret_post") {
      dto.client_id = this.options.appId;
      dto.client_secret = this.options.appSecret;
    }

    return await this.signInByCredentials(dto);
  }

  // ==== Login methods based on signInByCredentials END

  // ==== Registration methods based on signup BEGIN

  /**
   * Register with email + password
   *
   */
  public async signUpByEmailPassword(requestBody: {
    email: string;
    password: string;
    profile?: SignUpProfileDto;
    options?: SignUpOptionsDto;
  }) {
    const { email, password, options, profile } = requestBody;
    let dto: SignUpDto = {
      connection: SignUpDto.connection.PASSWORD,
      passwordPayload: {
        password,
        email,
      },
      profile,
      options,
    };
    return await this.signUp(dto);
  }

  /**
   * Register with username + password
   *
   */
  public async signUpByUsernamePassword(requestBody: {
    username: string;
    password: string;
    profile?: SignUpProfileDto;
    options?: SignUpOptionsDto;
  }) {
    const { username, password, options, profile } = requestBody;
    let dto: SignUpDto = {
      connection: SignUpDto.connection.PASSWORD,
      passwordPayload: {
        password,
        username,
      },
      profile,
      options,
    };
    return await this.signUp(dto);
  }

  /**
   * Register with email + verification code
   *
   */
  public async signUpByEmailCode(requestBody: {
    email: string;
    passCode: string;
    profile?: SignUpProfileDto;
    options?: SignUpOptionsDto;
  }) {
    const { email, passCode, options, profile } = requestBody;
    let dto: SignUpDto = {
      connection: SignUpDto.connection.PASSCODE,
      passCodePayload: {
        passCode,
        email,
      },
      profile,
      options,
    };
    return await this.signUp(dto);
  }

  /**
   * Register with phone number + verification code
   *
   */
  public async signUpByPhoneCode(requestBody: {
    phone: string;
    phoneCountryCode?: string;
    passCode: string;
    profile?: SignUpProfileDto;
    options?: SignUpOptionsDto;
  }) {
    const { phone, phoneCountryCode, passCode, options, profile } = requestBody;
    let dto: SignUpDto = {
      connection: SignUpDto.connection.PASSCODE,
      passCodePayload: {
        phone,
        phoneCountryCode,
        passCode,
      },
      profile,
      options,
    };
    return await this.signUp(dto);
  }

  // ==== Registration methods based on signup END

  // ==== AUTO GENERATED AUTHENTICATION METHODS BEGIN ====
  /**
   * @summary Register
   * @description
   * This endpoint currently supports the following registration methods:
   *
   * 1. Password-based (PASSWORD): username + password, email + password.
   * 2. One-time verification code (PASSCODE): phone number + verification code, email + verification code. You need to call the send SMS or send email interface first to get the verification code.
   *
   * For social login and other external identity source "registration", please use the **login** interface directly, we will create a new account for them on their first login.
   *
   * @returns UserSingleRespDto
   */
  public async signUp(requestBody: SignUpDto): Promise<UserSingleRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/signup",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Generate link for binding external identity source
   * @description
   * This interface is used to generate a link for binding external identity source, after generation you can guide users to jump to it.
   *
   * @returns GenerateBindExtIdpLinkRespDto
   */
  public async generateLinkExtIdpUrl({
    extIdpConnIdentifier,
    appId,
    idToken,
    needUrlRedirect,
    onlyRedirectToken,
    needFormPost,
    targetUrl,
  }: {
    /** External identity source connection unique identifier **/
    extIdpConnIdentifier: string;
    /** GenAuth application ID **/
    appId: string;
    /** User's id_token **/
    idToken: string;
    /** Whether to use URL redirect to return binding information **/
    needUrlRedirect?: string;
    /** When using URL redirect to return binding information, whether to only return token information, pass in this parameter because some browsers limit URL length **/
    onlyRedirectToken?: string;
    /** Whether to use form post to return binding information **/
    needFormPost?: string;
    /** URL to receive information when using URL redirect or form post to return binding information **/
    targetUrl?: string;
  }): Promise<GenerateBindExtIdpLinkRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/generate-link-extidp-url",
      params: {
        ext_idp_conn_identifier: extIdpConnIdentifier,
        app_id: appId,
        id_token: idToken,
        need_url_redirect: needUrlRedirect,
        only_redirect_token: onlyRedirectToken,
        need_form_post: needFormPost,
        target_url: targetUrl,
      },
    });
    return result;
  }
  /**
   * @summary Unbind external identity source
   * @description Unbind external identity source, this interface needs to pass in the user's bound external identity source ID, **note that it is not the identity source connection ID**.
   * @returns CommonResponseDto
   */
  public async unlinkExtIdp(
    requestBody: UnlinkExtIdpDto
  ): Promise<CommonResponseDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/unlink-extidp",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Get bound external identity sources
   * @description
   * As described in the **Introduction** section, one external identity source corresponds to multiple external identity source connections. After a user binds an external identity source account through an external identity source connection,
   * the user will establish an association relationship with this external identity source. This interface is used to get all external identity sources bound by this user.
   *
   * Depending on the specific implementation of the external identity source, a user may have multiple identity IDs in the external identity source, such as `openid` and `unionid` in the WeChat system,
   * `open_id`, `union_id` and `user_id` in non-books. In GenAuth, we call such an `open_id` or `unionid_` an `Identity`, so a user will have multiple `Identity` records in one identity source.
   *
   * Taking WeChat as an example, if a user logs in with WeChat or binds a WeChat account, their `Identity` information is as follows:
   *
   * ```json
   * [
   * {
   * "identityId": "62f20932xxxxbcc10d966ee5",
   * "extIdpId": "62f209327xxxxcc10d966ee5",
   * "provider": "wechat",
   * "type": "openid",
   * "userIdInIdp": "oH_5k5SflrwjGvk7wqpoBKq_cc6M",
   * "originConnIds": ["62f2093244fa5cb19ff21ed3"]
   * },
   * {
   * "identityId": "62f726239xxxxe3285d21c93",
   * "extIdpId": "62f209327xxxxcc10d966ee5",
   * "provider": "wechat",
   * "type": "unionid",
   * "userIdInIdp": "o9Nka5ibU-lUGQaeAHqu0nOZyJg0",
   * "originConnIds": ["62f2093244fa5cb19ff21ed3"]
   * }
   * ]
   * ```
   *
   *
   * You can see that their `extIdpId` is the same, this is the **identity source ID** you created in GenAuth; `provider` is both `wechat`;
   * Through `type` you can distinguish which is `openid`, which is `unionid`, and the specific value (`userIdInIdp`); they both come from the same identity source connection (`originConnIds`).
   *
   *
   *
   * @returns GetIdentitiesRespDto
   */
  public async getIdentities(): Promise<GetIdentitiesRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-identities",
    });
    return result;
  }
  /**
   * @summary Get list of enabled external identity sources for the application
   * @description Get list of enabled external identity sources for the application, frontend can render external identity source buttons based on this.
   * @returns GetExtIdpsRespDto
   */
  public async getApplicationEnabledExtIdps(): Promise<GetExtIdpsRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-application-enabled-extidps",
    });
    return result;
  }
  /**
   * @summary Login with user credentials
   * @description
   * This endpoint is a login endpoint based on direct API calls, suitable for scenarios where you need to build your own login page. **This endpoint temporarily does not support MFA, information completion, first password reset and other processes. If needed, please use the OIDC standard protocol authentication endpoint.**
   *
   *
   * Note: Depending on the **application type** you chose when creating the application in GenAuth and the **token exchange authentication method** configured for the application, different forms of client identity verification are required when calling this interface.
   *
   * <details>
   * <summary>Click to expand details</summary>
   *
   * <br>
   *
   * You can find the **token exchange authentication method** configuration item in [GenAuth Console](https://console.genauth.ai) - **Applications** - **Self-built Applications** - **Application Details** - **Application Configuration** - **Other Settings** - **Authorization Configuration**:
   *
   * > Hidden for single-page web applications and client applications, defaults to `none` and cannot be modified; backend applications and standard web applications can modify this configuration item.
   *
   * ![](https://files.authing.co/api-explorer/tokenAuthMethod.jpg)
   *
   * #### When token exchange authentication method is none
   *
   * No additional operations are required when calling this interface.
   *
   * #### When token exchange authentication method is client_secret_post
   *
   * When calling this interface, you must pass `client_id` and `client_secret` parameters in the body as conditions for verifying client identity. Where `client_id` is the application ID and `client_secret` is the application secret.
   *
   * #### When token exchange authentication method is client_secret_basic
   *
   * When calling this interface, you must carry the `authorization` request header in the HTTP request as a condition for verifying client identity. The format of the `authorization` request header is as follows (where `client_id` is the application ID and `client_secret` is the application secret.):
   *
   * ```
   * Basic base64(<client_id>:<client_secret>)
   * ```
   *
   * Example result:
   *
   * ```
   * Basic NjA2M2ZiMmYzY3h4eHg2ZGY1NWYzOWViOjJmZTdjODdhODFmODY3eHh4eDAzMjRkZjEyZGFlZGM3
   * ```
   *
   * JS code example:
   *
   * ```js
   * 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64');
   * ```
   *
   * </details>
   *
   *
   * @returns LoginTokenRespDto Successful authentication
   */
  public async signInByCredentials(
    requestBody: SigninByCredentialsDto
  ): Promise<LoginTokenRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/signin",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Use mobile social login
   * @description
   * This endpoint is a mobile social login interface that uses temporary credentials returned by third-party mobile social login to log in and exchange for user's `id_token` and `access_token`. Please read the corresponding social login access process first.
   *
   *
   * Note: Depending on the **application type** you chose when creating the application in GenAuth and the **token exchange authentication method** configured for the application, different forms of client identity verification are required when calling this interface.
   *
   * <details>
   * <summary>Click to expand details</summary>
   *
   * <br>
   *
   * You can find the **token exchange authentication method** configuration item in [GenAuth Console](https://console.genauth.ai) - **Applications** - **Self-built Applications** - **Application Details** - **Application Configuration** - **Other Settings** - **Authorization Configuration**:
   *
   * > Hidden for single-page web applications and client applications, defaults to `none` and cannot be modified; backend applications and standard web applications can modify this configuration item.
   *
   * ![](https://files.authing.co/api-explorer/tokenAuthMethod.jpg)
   *
   * #### When token exchange authentication method is none
   *
   * No additional operations are required when calling this interface.
   *
   * #### When token exchange authentication method is client_secret_post
   *
   * When calling this interface, you must pass `client_id` and `client_secret` parameters in the body as conditions for verifying client identity. Where `client_id` is the application ID and `client_secret` is the application secret.
   *
   * #### When token exchange authentication method is client_secret_basic
   *
   * When calling this interface, you must carry the `authorization` request header in the HTTP request as a condition for verifying client identity. The format of the `authorization` request header is as follows (where `client_id` is the application ID and `client_secret` is the application secret.):
   *
   * ```
   * Basic base64(<client_id>:<client_secret>)
   * ```
   *
   * Example result:
   *
   * ```
   * Basic NjA2M2ZiMmYzY3h4eHg2ZGY1NWYzOWViOjJmZTdjODdhODFmODY3eHh4eDAzMjRkZjEyZGFlZGM3
   * ```
   *
   * JS code example:
   *
   * ```js
   * 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64');
   * ```
   *
   * </details>
   *
   *
   * @returns LoginTokenRespDto
   */
  public async signInByMobile(
    requestBody: SigninByMobileDto
  ): Promise<LoginTokenRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/signin-by-mobile",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Public account switch login
   * @description Allows switching login between personal account and associated public account, this endpoint requires account to be logged in
   * @returns LoginTokenRespDto
   */
  public async switchLoginByUser(
    requestBody: PublicAccountSwitchLoginDto
  ): Promise<LoginTokenRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/switch-login-by-user",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Get Alipay AuthInfo
   * @description This interface is used to get the [initialization parameter AuthInfo](https://opendocs.alipay.com/open/218/105325) needed to initiate Alipay authentication.
   * @returns GetAlipayAuthInfoRespDto
   */
  public async getAlipayAuthInfo({
    extIdpConnidentifier,
  }: {
    /** External identity source connection identifier **/
    extIdpConnidentifier: string;
  }): Promise<GetAlipayAuthInfoRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-alipay-authinfo",
      params: {
        extIdpConnidentifier: extIdpConnidentifier,
      },
    });
    return result;
  }
  /**
   * @summary Generate QR code for login
   * @description Generate QR code for login, currently supports generating QR codes for WeChat Official Account scan login, Mini Program scan login, and self-built mobile APP scan login.
   * @returns GeneQRCodeRespDto
   */
  public async geneQrCode(
    requestBody: GenerateQrcodeDto
  ): Promise<GeneQRCodeRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/gene-qrcode",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Query QR code status
   * @description According to the user scan sequence, there are six states in total: not scanned, scanned waiting for user confirmation, user agrees/cancels authorization, QR code expired and unknown error. The frontend should give different feedback to users based on different states. You can learn about the detailed process of scan login through the following article: https://docs.genauth.ai/concepts/how-qrcode-works.html.
   * @returns CheckQRCodeStatusRespDto
   */
  public async getQrCodeStatus({
    qrcodeId,
  }: {
    /** QR code unique ID **/
    qrcodeId: string;
  }): Promise<CheckQRCodeStatusRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-qrcode-status",
      params: {
        qrcodeId: qrcodeId,
      },
    });
    return result;
  }
  /**
   * @deprecated
   * @summary Query QR code status
   * @description Return format is not standardized, recommend using /api/v3/get-qrcode-status. According to the user scan sequence, there are six states in total: not scanned, scanned waiting for user confirmation, user agrees/cancels authorization, QR code expired and unknown error. The frontend should give different feedback to users based on different states. You can learn about the detailed process of scan login through the following article: https://docs.genauth.ai/concepts/how-qrcode-works.html.
   * @returns CheckQRCodeStatusRespDto
   */
  public async checkQrCodeStatus({
    qrcodeId,
  }: {
    /** QR code unique ID **/
    qrcodeId: string;
  }): Promise<CheckQRCodeStatusRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/check-qrcode-status",
      params: {
        qrcodeId: qrcodeId,
      },
    });
    return result;
  }
  /**
   * @summary Exchange TokenSet with QR code ticket
   * @description
   * This endpoint is for exchanging a QR code ticket for the user's `access_token` and `id_token`.
   *
   *
   * Note: Depending on the **Application Type** you selected when creating the application in GenAuth and the **Token Exchange Authentication Method** configured for the application, different forms of client identity verification are required when calling this interface.
   *
   * <details>
   * <summary>Click to expand details</summary>
   *
   * <br>
   *
   * You can find the **Token Exchange Authentication Method** configuration item in [GenAuth Console](https://console.genauth.ai) under **Applications** - **Self-built Applications** - **Application Details** - **Application Configuration** - **Other Settings** - **Authorization Configuration**:
   *
   * > Hidden for Single Page Web Applications and Client Applications, defaults to `none` and cannot be modified; Backend Applications and Standard Web Applications can modify this configuration item.
   *
   * ![](https://files.authing.co/api-explorer/tokenAuthMethod.jpg)
   *
   * #### When token exchange authentication method is none
   *
   * No additional operation is required when calling this interface.
   *
   * #### When token exchange authentication method is client_secret_post
   *
   * When calling this interface, you must pass `client_id` and `client_secret` parameters in the body as conditions for verifying client identity. Where `client_id` is the application ID and `client_secret` is the application secret.
   *
   * #### When token exchange authentication method is client_secret_basic
   *
   * When calling this interface, you must carry the `authorization` request header in the HTTP request as a condition for verifying client identity. The format of the `authorization` request header is as follows (where `client_id` is the application ID and `client_secret` is the application secret.):
   *
   * ```
   * Basic base64(<client_id>:<client_secret>)
   * ```
   *
   * Example result:
   *
   * ```
   * Basic NjA2M2ZiMmYzY3h4eHg2ZGY1NWYzOWViOjJmZTdjODdhODFmODY3eHh4eDAzMjRkZjEyZGFlZGM3
   * ```
   *
   * JS code example:
   *
   * ```js
   * 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64');
   * ```
   *
   * </details>
   *
   *
   * @returns LoginTokenRespDto
   */
  public async exchangeTokenSetWithQrCodeTicket(
    requestBody: ExchangeTokenSetWithQRcodeTicketDto
  ): Promise<LoginTokenRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/exchange-tokenset-with-qrcode-ticket",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Generate CAPTCHA code (NEW)
   * @description When the user pool enables **Login Failure Count Limit** and **Login Security Policy** is set to **CAPTCHA**, if the current request triggers the login failure count limit, the user is required to enter a CAPTCHA code. This interface is used to generate the CAPTCHA code and its token.
   * @returns GetCaptchaCodeRespDto
   */
  public async geneCatchaCodeAndToken(): Promise<GetCaptchaCodeRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-captcha-code",
    });
    return result;
  }
  /**
   * @deprecated
   * @summary Self-built APP scan login: APP side modifies QR code status
   * @description Return format is not standardized, recommend using /api/v3/set-qrcode-status. This endpoint is used to modify the QR code status in self-built APP scan login, corresponding to the process of the terminal user scanning, confirming authorization, and canceling authorization after the QR code is rendered in the browser. **This interface requires user login status**.
   * @returns CommonResponseDto
   */
  public async changeQrCodeStatus(
    requestBody: ChangeQRCodeStatusDto
  ): Promise<CommonResponseDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/change-qrcode-status",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Self-built APP scan login: APP side modifies QR code status
   * @description This endpoint is used to modify the QR code status in self-built APP scan login, corresponding to the process of the terminal user scanning, confirming authorization, and canceling authorization after the QR code is rendered in the browser. **This interface requires user login status**.
   * @returns IsSuccessRespDto
   */
  public async setQrCodeStatus(
    requestBody: ChangeQRCodeStatusDto
  ): Promise<IsSuccessRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/set-qrcode-status",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Push login
   * @description Push login.
   * @returns GenePushCodeRespDto
   */
  public async signInByPush(
    requestBody: SignInByPushDto
  ): Promise<GenePushCodeRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/signin-by-push",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Query push code status
   * @description According to the push code usage sequence, there are five states in total: pushed, waiting for user to agree/cancel authorization, push code expired and unknown error. The frontend should give different feedback to users based on different states.
   * @returns CheckPushCodeStatusRespDto
   */
  public async checkPushCodeStatus({
    pushCodeId,
  }: {
    /** Push code (push login unique ID) **/
    pushCodeId: string;
  }): Promise<CheckPushCodeStatusRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/check-pushcode-status",
      params: {
        pushCodeId: pushCodeId,
      },
    });
    return result;
  }
  /**
   * @summary Push login: APP side modifies push code status
   * @description This endpoint is used to modify the push code status in GenAuth Token APP push login, corresponding to the process of receiving push login information, confirming authorization, and canceling authorization after clicking login in the browser using push login. **This interface requires user login status**.
   * @returns IsSuccessRespDto
   */
  public async setPushCodeStatus(
    requestBody: ChangePushCodeStatusDto
  ): Promise<IsSuccessRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/set-pushcode-status",
      data: requestBody,
    });
    return result;
  }
  /**
   * @deprecated
   * @summary Push login: APP side modifies push code status
   * @description Return format is not standardized, recommend using /api/v3/set-pushcode-status. This endpoint is used to modify the push code status in GenAuth Token APP push login, corresponding to the process of receiving push login information, confirming authorization, and canceling authorization after clicking login in the browser using push login. **This interface requires user login status**.
   * @returns CommonResponseDto
   */
  public async changePushCodeStatus(
    requestBody: ChangePushCodeStatusDto
  ): Promise<CommonResponseDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/change-pushcode-status",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Send SMS
   * @description When sending SMS, you must specify the SMS Channel. Each phone number can only send once per minute for the same Channel.
   * @returns SendSMSRespDto
   */
  public async sendSms(requestBody: SendSMSDto): Promise<SendSMSRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/send-sms",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Send email
   * @description When sending email, you must specify the email Channel. Each email address can only send once per minute for the same Channel.
   * @returns SendEmailRespDto
   */
  public async sendEmail(requestBody: SendEmailDto): Promise<SendEmailRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/send-email",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Decrypt WeChat Mini Program data
   * @description Decrypt WeChat Mini Program data
   * @returns DecryptWechatMiniProgramDataRespDto
   */
  public async decryptWechatMiniProgramData(
    requestBody: DecryptWechatMiniProgramDataDto
  ): Promise<DecryptWechatMiniProgramDataRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/decrypt-wechat-miniprogram-data",
      data: requestBody,
    });
    return result;
  }
  /**
   * @deprecated
   * @summary Get WeChat Mini Program, Official Account Access Token
   * @description Get GenAuth server cached WeChat Mini Program, Official Account Access Token (deprecated, please use /api/v3/get-wechat-access-token-info)
   * @returns GetWechatAccessTokenRespDto
   */
  public async getWechatMpAccessToken(
    requestBody: GetWechatAccessTokenDto
  ): Promise<GetWechatAccessTokenRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/get-wechat-access-token",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Get WeChat Mini Program, Official Account Access Token
   * @description Get GenAuth server cached WeChat Mini Program, Official Account Access Token
   * @returns GetWechatAccessTokenInfoRespDto
   */
  public async getWechatMpAccessTokenInfo(
    requestBody: GetWechatAccessTokenDto
  ): Promise<GetWechatAccessTokenInfoRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/get-wechat-access-token-info",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Get login logs
   * @description Get login logs
   * @returns GetLoginHistoryRespDto
   */
  public async getLoginHistory({
    appId,
    clientIp,
    success,
    start,
    end,
    page = 1,
    limit = 10,
  }: {
    /** Application ID, can filter by application ID. If not passed, get login history of all applications. **/
    appId?: string;
    /** Client IP, can filter by client IP at login time. If not passed, get login history of all login IPs. **/
    clientIp?: string;
    /** Whether login was successful, can filter by login success. If not passed, get records including both successful and failed login history. **/
    success?: boolean;
    /** Start time, in milliseconds timestamp **/
    start?: number;
    /** End time, in milliseconds timestamp **/
    end?: number;
    /** Current page number, starting from 1 **/
    page?: number;
    /** Number of items per page, maximum cannot exceed 50, default is 10 **/
    limit?: number;
  }): Promise<GetLoginHistoryRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-my-login-history",
      params: {
        appId: appId,
        clientIp: clientIp,
        success: success,
        start: start,
        end: end,
        page: page,
        limit: limit,
      },
    });
    return result;
  }
  /**
   * @summary Get logged in applications
   * @description Get logged in applications
   * @returns GetLoggedInAppsRespDto
   */
  public async getLoggedInApps(): Promise<GetLoggedInAppsRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-my-logged-in-apps",
    });
    return result;
  }
  /**
   * @summary Get accessible applications
   * @description Get accessible applications
   * @returns GetAccessibleAppsRespDto
   */
  public async getAccessibleApps(): Promise<GetAccessibleAppsRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-my-accessible-apps",
    });
    return result;
  }
  /**
   * @summary Get tenant list
   * @description Get tenant list
   * @returns GetTenantListRespDto
   */
  public async getTenantList(): Promise<GetTenantListRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-my-tenant-list",
    });
    return result;
  }
  /**
   * @summary Get role list
   * @description Get role list
   * @returns RoleListRespDto
   */
  public async getRoleList({
    namespace,
  }: {
    /** Code of the permission group (permission space) to which it belongs, get default permission group if not passed. **/
    namespace?: string;
  }): Promise<RoleListRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-my-role-list",
      params: {
        namespace: namespace,
      },
    });
    return result;
  }
  /**
   * @summary Get group list
   * @description Get group list
   * @returns GroupListRespDto
   */
  public async getGroupList(): Promise<GroupListRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-my-group-list",
    });
    return result;
  }
  /**
   * @summary Get authorized resource list
   * @description This interface is used to get the list of resources authorized to the user.
   * @returns AuthorizedResourcePaginatedRespDto
   */
  public async getAuthorizedResources({
    namespace,
    resourceType,
  }: {
    /** Code of the permission group (permission space) to which it belongs, get default permission group if not passed. **/
    namespace?: string;
    /** Resource type, such as DATA, API, MENU, BUTTON **/
    resourceType?: "DATA" | "API" | "MENU" | "BUTTON" | "UI";
  }): Promise<AuthorizedResourcePaginatedRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-my-authorized-resources",
      params: {
        namespace: namespace,
        resourceType: resourceType,
      },
    });
    return result;
  }
  /**
   * @summary Get user profile
   * @description This endpoint is used to get user profile, requires user's `access_token` in request header, GenAuth server will return corresponding fields based on the `scope` in user's `access_token`.
   * @returns UserSingleRespDto
   */
  public async getProfile({
    withCustomData = false,
    withIdentities = false,
  }: {
    /** Whether to get custom data **/
    withCustomData?: boolean;
    /** Whether to get identities **/
    withIdentities?: boolean;
  }): Promise<UserSingleRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-profile",
      params: {
        withCustomData: withCustomData,
        withIdentities: withIdentities,
      },
    });
    return result;
  }
  /**
   * @summary Update user profile
   * @description This interface is used to modify user's profile, including user's custom data. If you need to **modify email**, **modify phone number**, **modify password**, please use the corresponding separate interfaces.
   * @returns UserSingleRespDto
   */
  public async updateProfile(
    requestBody: UpdateUserProfileDto
  ): Promise<UserSingleRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/update-profile",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Bind email
   * @description If the user has **not bound an email**, this interface can be used for users to **self** bind email. If the user has already bound an email and wants to modify it, please use the **modify email** interface. You need to call the **send email** interface first to send the email verification code.
   * @returns CommonResponseDto
   */
  public async bindEmail(
    requestBody: BindEmailDto
  ): Promise<CommonResponseDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/bind-email",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Unbind email
   * @description User unbinds email. If the user has not bound other login methods (phone number, social login account), they will not be able to unbind email and will receive an error message.
   * @returns CommonResponseDto
   */
  public async unbindEmail(
    requestBody: UnbindEmailDto
  ): Promise<CommonResponseDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/unbind-email",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Bind phone number
   * @description If the user has **not bound a phone number**, this interface can be used for users to **self** bind phone number. If the user has already bound a phone number and wants to modify it, please use the **modify phone number** interface. You need to call the **send SMS** interface first to send the SMS verification code.
   * @returns CommonResponseDto
   */
  public async bindPhone(
    requestBody: BindPhoneDto
  ): Promise<CommonResponseDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/bind-phone",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Unbind phone number
   * @description User unbinds phone number. If the user has not bound other login methods (email, social login account), they will not be able to unbind phone number and will receive an error message.
   * @returns CommonResponseDto
   */
  public async unbindPhone(
    requestBody: UnbindPhoneDto
  ): Promise<CommonResponseDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/unbind-phone",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Get password strength and account security level score
   * @description Get user's password strength and account security level score, requires user's `access_token` in request header.
   * @returns GetSecurityInfoRespDto
   */
  public async getSecurityLevel(): Promise<GetSecurityInfoRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-security-info",
    });
    return result;
  }
  /**
   * @summary Update password
   * @description This endpoint is used for users to self update password. If the user has previously set a password, they need to provide the user's original password as credentials. If the user forgets their current password, please use the **forgot password** interface.
   * @returns CommonResponseDto
   */
  public async updatePassword(
    requestBody: UpdatePasswordDto
  ): Promise<CommonResponseDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/update-password",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Initiate email update verification request
   * @description When end users self update email, they need to provide corresponding verification means. This interface is used to verify whether the user's email update request is valid. Currently supports verification through **email verification code**, you need to call the send email interface first to send the corresponding email verification code.
   * @returns VerifyUpdateEmailRequestRespDto
   */
  public async verifyUpdateEmailRequest(
    requestBody: VerifyUpdateEmailRequestDto
  ): Promise<VerifyUpdateEmailRequestRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/verify-update-email-request",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Update email
   * @description End users self update email requires corresponding verification means, see [Initiate email update verification request](#tag/User Profile/API List/operation/ProfileV3Controller_verifyUpdateEmailRequest).
   * This parameter requires a one-time temporary credential `updateEmailToken`, which needs to be obtained from the **Initiate email update verification request** interface.
   * @returns IsSuccessRespDto
   */
  public async updateEmail(
    requestBody: UpdateEmailDto
  ): Promise<IsSuccessRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/update-email",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Initiate phone number update verification request
   * @description When end users self update phone number, they need to provide corresponding verification means. This interface is used to verify whether the user's phone number update request is valid. Currently supports verification through **SMS verification code**, you need to call the send SMS interface first to send the corresponding SMS verification code.
   * @returns VerifyUpdatePhoneRequestRespDto
   */
  public async verifyUpdatePhoneRequest(
    requestBody: VerifyUpdatePhoneRequestDto
  ): Promise<VerifyUpdatePhoneRequestRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/verify-update-phone-request",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Update phone number
   * @description End users self update phone number requires corresponding verification means, see [Initiate phone number update verification request](#tag/User Profile/API List/operation/ProfileV3Controller_updatePhoneVerification).
   * This parameter requires a one-time temporary credential `updatePhoneToken`, which needs to be obtained from the **Initiate phone number update verification request** interface.
   * @returns IsSuccessRespDto
   */
  public async updatePhone(
    requestBody: UpdatePhoneDto
  ): Promise<IsSuccessRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/update-phone",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Initiate forgot password request
   * @description When users forget their password, they can recover it through this endpoint. Users need to use relevant verification means for verification, currently supports **email verification code** and **phone verification code** two verification means.
   * @returns PasswordResetVerifyResp
   */
  public async verifyResetPasswordRequest(
    requestBody: VerifyResetPasswordRequestDto
  ): Promise<PasswordResetVerifyResp> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/verify-reset-password-request",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Forgot password
   * @description This endpoint is used for users to reset password after forgetting it through **phone verification code** or **email verification code**. This interface requires a temporary credential `passwordResetToken` for resetting password, this parameter needs to be obtained through the **Initiate forgot password request** interface.
   * @returns IsSuccessRespDto
   */
  public async resetPassword(
    requestBody: ResetPasswordDto
  ): Promise<IsSuccessRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/reset-password",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Initiate account deletion request
   * @description When users want to delete their account, they need to provide corresponding credentials. Currently supports **using email verification code**, **using phone verification code**, **using password** three verification methods.
   * @returns VerifyDeleteAccountRequestRespDto
   */
  public async verifyDeleteAccountRequest(
    requestBody: VerifyDeleteAccountRequestDto
  ): Promise<VerifyDeleteAccountRequestRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/verify-delete-account-request",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Delete account
   * @description This endpoint is used for users to self delete their account, requires a temporary credential deleteAccountToken for deleting account, this parameter needs to be obtained through the **Initiate account deletion request** interface.
   * @returns IsSuccessRespDto
   */
  public async deleteAccount(
    requestBody: DeleteAccounDto
  ): Promise<IsSuccessRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/delete-account",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Query list of public accounts that current logged in user can switch login to
   * @description This endpoint is used to query the list of public accounts that the current logged in user can switch login to. If there are no public accounts that can be switched to for login, an empty array is returned.
   * @returns GetPublicAccountDataRespDto
   */
  public async listPublicAccountsForSwitchLoggedIn({
    withOriginUser = false,
  }: {
    /** Whether to include current personal user basic information **/
    withOriginUser?: boolean;
  }): Promise<GetPublicAccountDataRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-user-select-login-public-accounts",
      params: {
        withOriginUser: withOriginUser,
      },
    });
    return result;
  }
  /**
   * @summary Get server public information
   * @description This endpoint can get server's public information, such as RSA256 public key, SM2 public key, GenAuth service version number, etc.
   * @returns SystemInfoResp
   */
  public async getSystemInfo(): Promise<SystemInfoResp> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/system",
    });
    return result;
  }
  /**
   * @summary Get country list
   * @description Dynamically get country list, can be used for country selection on login page and international SMS input box selection to reduce frontend static resource size.
   * @returns GetCountryListRespDto
   */
  public async getCountryList(): Promise<GetCountryListRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-country-list",
    });
    return result;
  }
  /**
   * @summary String type resource authorization
   * @description String type resource authorization, supports permission checking for one or more string resources
   * @returns CheckResourcePermissionsRespDto
   */
  public async checkPermissionByStringResource(
    requestBody: CheckPermissionStringResourceDto
  ): Promise<CheckResourcePermissionsRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/check-permission-string-resource",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Array type resource authorization
   * @description Array type resource authorization, supports permission checking for one or more array resources
   * @returns CheckResourcePermissionsRespDto
   */
  public async checkPermissionByArrayResource(
    requestBody: CheckPermissionArrayResourceDto
  ): Promise<CheckResourcePermissionsRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/check-permission-array-resource",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Tree type resource authorization
   * @description Tree type resource authorization, supports permission checking for one or more tree resources
   * @returns CheckResourcePermissionsRespDto
   */
  public async checkPermissionByTreeResource(
    requestBody: CheckPermissionTreeResourceDto
  ): Promise<CheckResourcePermissionsRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/check-permission-tree-resource",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Get user's authorized resource list under login application
   * @description Get user's specified resource permission list, user gets the list of resources owned under a certain application.
   * @returns GetUserAuthResourceListRespDto
   */
  public async getUserAuthorizedResourcesList(): Promise<GetUserAuthResourceListRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-user-auth-resource-list",
    });
    return result;
  }
  /**
   * @summary Get user's specified resource permission list
   * @description Get user's specified resource permission list, user gets the permission list of specified resources under a certain application.
   * @returns GetUserAuthResourcePermissionListRespDto
   */
  public async getUserAuthResourcePermissionList(
    requestBody: GetUserAuthResourcePermissionListDto
  ): Promise<GetUserAuthResourcePermissionListRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/get-user-auth-resource-permission-list",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Get user's authorized resource structure list
   * @description Get user's authorized resource list, user gets the authorized structure list of a certain resource under a certain application, returns the authorization list of corresponding resources through different resource types.
   * @returns GetUserAuthResourceStructRespDto
   */
  public async getUserAuthResourceStruct(
    requestBody: GetUserAuthResourceStructDto
  ): Promise<GetUserAuthResourceStructRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/get-user-auth-resource-struct",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Get WebAuthn authentication request initialization parameters
   * @description Get WebAuthn authentication request initialization parameters
   * @returns GetAuthenticationOptionsRespDto
   */
  public async initAuthenticationOptions(): Promise<GetAuthenticationOptionsRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/webauthn/authentication",
    });
    return result;
  }
  /**
   * @summary Verify WebAuthn authentication request credentials
   * @description Verify WebAuthn authentication request credentials
   * @returns VerifyAuthenticationResultRespDto
   */
  public async verifyAuthentication(
    requestBody: VerifyAuthenticationDto
  ): Promise<VerifyAuthenticationResultRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/webauthn/authentication",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Get webauthn credential creation initialization parameters
   * @description Get webauthn credential creation initialization parameters. **This interface requires user login status**
   * @returns GetRegistrationOptionsRespDto
   */
  public async initRegisterOptions(): Promise<GetRegistrationOptionsRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/webauthn/registration",
    });
    return result;
  }
  /**
   * @summary Verify webauthn binding registration authenticator credentials
   * @description Verify webauthn binding registration authenticator credentials
   * @returns VerifyRegistrationResultRespDto
   */
  public async verifyRegister(
    requestBody: VerifyRegistrationDto
  ): Promise<VerifyRegistrationResultRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/webauthn/registration",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary My device list
   * @description List of devices I have logged in to.
   * @returns TerminalSessionRespDto
   */
  public async list({
    page = 1,
    limit = 10,
  }: {
    /** Current page number, starting from 1 **/
    page?: number;
    /** Number of items per page, maximum cannot exceed 50, default is 10 **/
    limit?: number;
  }): Promise<TerminalSessionRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/mydevices/list",
      params: {
        page: page,
        limit: limit,
      },
    });
    return result;
  }
  /**
   * @summary Remove device
   * @description Remove a device.
   * @returns CommonResponseDto
   */
  public async unbind(
    requestBody: UnbindDeviceDto
  ): Promise<CommonResponseDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/mydevices/unbind",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Logout from device
   * @description Remove login status from a logged in device.
   * @returns CommonResponseDto
   */
  public async revoke(
    requestBody: RevokeDeviceSessionDto
  ): Promise<CommonResponseDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/mydevices/revoke-session",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Verify if account password is correct
   * @description Verify if account password is correct, when phone number, email, username are passed simultaneously, priority is email -> phone number -> username.
   * @returns ValidatePasswordRespDto
   */
  public async validatePassword(
    requestBody: ValidatePasswordDto
  ): Promise<ValidatePasswordRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/validate-password",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Decrypt Douyin Mini Program user information
   * @description Decrypt Douyin Mini Program user information
   * @returns DecryptDouyinMiniProgramDataRespDto
   */
  public async decryptDouyinMiniProgramData(
    requestBody: DecryptDouyinMiniProgramDataDto
  ): Promise<DecryptDouyinMiniProgramDataRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/decrypt-douyin-miniprogram-data",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Get list of applications that can apply for permissions
   * @description Get list of applications that can apply for permissions
   * @returns EnablePermissionApplyApplicationListRes
   */
  public async getEnablePermissionApplyApplicationList({
    appName,
  }: {
    /** Fuzzy search by application name **/
    appName?: string;
  }): Promise<EnablePermissionApplyApplicationListRes> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/applications-permission-applicable",
      params: {
        appName: appName,
      },
    });
    return result;
  }
  /**
   * @summary Get list of roles that can apply for permissions
   * @description Get list of roles that can apply for permissions
   * @returns EnablePermissionApplyRoleListRes
   */
  public async getEnablePermissionApplyRoleList({
    appId,
    page = 1,
    limit = 10,
    keyword,
  }: {
    /** GenAuth application ID **/
    appId: string;
    /** Current page number, starting from 1 **/
    page?: number;
    /** Number of items per page, maximum cannot exceed 50, default is 10 **/
    limit?: number;
    /** Used for fuzzy search by role code or name, optional. **/
    keyword?: string;
  }): Promise<EnablePermissionApplyRoleListRes> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/roles-permission-applicable",
      params: {
        page: page,
        limit: limit,
        keyword: keyword,
        appId: appId,
      },
    });
    return result;
  }
  /**
   * @summary Get universal invitation public configuration
   * @description Get universal invitation public configuration.
   * @returns GetUniversalInvitationPublicConfigRespDto
   */
  public async getUniversalInvitationPublicConfig({
    identifier,
  }: {
    /** Invitation link unique identifier **/
    identifier: string;
  }): Promise<GetUniversalInvitationPublicConfigRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-universal-invitation-public-config",
      params: {
        identifier: identifier,
      },
    });
    return result;
  }
  /**
   * @summary Apply to join through universal invitation
   * @description Apply to join through universal invitation.
   * @returns GetUniversalInvitationJoinRespDto
   */
  public async signupByUniversal(
    requestBody: UniversalInvitationUserJoinDto
  ): Promise<GetUniversalInvitationJoinRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/signup-by-invitation",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Generate policy invitation token
   * @description Generate policy invitation token
   * @returns GenerateInviteeTokenRespDto
   */
  public async generateInviteToken(
    requestBody: InvitationLinkDto
  ): Promise<GenerateInviteeTokenRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/generate-policy-invitation-token",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Get invitation registration context data
   * @description Get invitation registration context data
   * @returns GetInviteeContextRespDto
   */
  public async getInviteCodeContext({
    token,
  }: {
    /** Invitee registration token **/
    token: string;
  }): Promise<GetInviteeContextRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-policy-invitation-context",
      params: {
        token: token,
      },
    });
    return result;
  }
  /**
   * @summary Check identity verification code
   * @description Check identity verification code
   * @returns IsSuccessRespDto
   */
  public async verifyInviteCode(
    requestBody: VerifyInviteCodeDto
  ): Promise<IsSuccessRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/verify-invite-code",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Confirm join through policy invitation
   * @description Confirm join through policy invitation.
   * @returns IsSuccessRespDto
   */
  public async signupByPolicy(
    requestBody: PolicyInviteeJoinedDto
  ): Promise<IsSuccessRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/join-by-invitation",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Generate member invitation link
   * @description Generate universal invitation link for current user member.
   * @returns GenerateInvitationLinkRespDto
   */
  public async generateUniversalInvitationByMember(): Promise<GenerateInvitationLinkRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/generate-universal-invitation-link-by-member",
    });
    return result;
  }
  /**
   * @summary Reset all my invitation links
   * @description Clear all my invitation links.
   * @returns IsSuccessRespDto
   */
  public async clearMyAllUniversalInvitationLinks(): Promise<IsSuccessRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/clear-my-all-invitation-links",
    });
    return result;
  }
  /**
   * @summary WeChat mobile login
   * @description Mobile application: Use WeChat as external identity source for login.
   * @returns LoginTokenResponseDataDto
   */
  public async authByCodeIdentity(
    requestBody: WechatMobileAuthByCodeIdentityInput
  ): Promise<LoginTokenResponseDataDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v2/ecConn/wechatMobile/authByCodeIdentity",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary WeChat mobile: Use identity source user information
   * @description When binding inquiry is enabled: Bind to external identity source, create user based on user information in external identity source then bind to current identity source and login.
   * @returns WechatLoginTokenRespDto
   */
  public async registerNewUser(
    requestBody: BindByRegiserInputApi
  ): Promise<WechatLoginTokenRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v2/ecConn/wechatMobile/register",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary WeChat mobile: Email verification code mode
   * @description When binding inquiry is enabled: Bind to external identity source, verify user information based on input email, bind to current identity source and login after finding corresponding user; report "User does not exist" error if not found.
   * @returns WechatLoginTokenRespDto
   */
  public async bindByEmailCode(
    requestBody: BindByEmailCodeInputApi
  ): Promise<WechatLoginTokenRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v2/ecConn/wechatMobile/byEmailCode",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary WeChat mobile: Phone verification code mode
   * @description When binding inquiry is enabled: Bind to external identity source, verify user information based on input phone, bind to current identity source and login after finding corresponding user; report "User does not exist" error if not found.
   * @returns WechatLoginTokenRespDto
   */
  public async bindByPhoneCode(
    requestBody: BindByPhoneCodeInputApi
  ): Promise<WechatLoginTokenRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v2/ecConn/wechatMobile/byPhoneCode",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary WeChat mobile: Account password mode
   * @description When binding inquiry is enabled: Bind to external identity source, verify user information based on input account (username/phone/email) password, bind to current identity source and login after finding corresponding user; report "User does not exist" error if not found.
   * @returns WechatLoginTokenRespDto
   */
  public async bindByAccount(
    requestBody: BindByAccountInputApi
  ): Promise<WechatLoginTokenRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v2/ecConn/wechatMobile/byAccount",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary WeChat mobile: Multiple accounts scenario
   * @description When binding inquiry is enabled: Bind external identity source based on selected account, verify user information based on input account ID, bind to current identity source and login after finding corresponding user; report "User does not exist" error if not found.
   * @returns WechatLoginTokenRespDto
   */
  public async selectAccount(
    requestBody: BindByAccountsInputApi
  ): Promise<WechatLoginTokenRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v2/ecConn/wechatMobile/select",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary WeChat mobile: Account ID mode
   * @description When binding inquiry is enabled: Bind to external identity source, verify user information based on input account ID, bind to current identity source and login after finding corresponding user; report "User does not exist" error if not found.
   * @returns WechatLoginTokenRespDto
   */
  public async bindByAccountId(
    requestBody: BindByAccountIdInputApi
  ): Promise<WechatLoginTokenRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v2/ecConn/wechatMobile/byAccountId",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Get client applications associated with push login request
   * @description This endpoint is used when GenAuth token APP receives push login notification to check if current user's logged in application supports authorizing push login requests.
   * @returns GetPushCodeRelationAppsRespDto
   */
  public async getPushLoginRelationApps(
    requestBody: GetPushCodeRelationAppsDto
  ): Promise<GetPushCodeRelationAppsRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/get-pushlogin-relation-apps",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Get quick authentication QR code data
   * @description This endpoint is used in user profile center to get quick authentication parameters to generate QR code, which can be scanned by GenAuth token APP to complete quick authentication. **This interface requires user login status**.
   * @returns GeneFastpassQRCodeRespDto
   */
  public async geneFastpassQrcodeInfo(
    requestBody: SignInFastpassDto
  ): Promise<GeneFastpassQRCodeRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/gene-fastpass-qrcode-info",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Get list of applications for quick authentication
   * @description This endpoint is used after scanning "User Profile Center" - "Quick Authentication" QR code with GenAuth token APP to get list of client applications that support quick authentication.
   * @returns GetFastpassQRCodeRelationAppsRespDto
   */
  public async getFastpassParams({
    qrcodeId,
    appId,
  }: {
    qrcodeId: string;
    appId: string;
  }): Promise<GetFastpassQRCodeRelationAppsRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-fastpass-client-apps",
      params: {
        qrcodeId: qrcodeId,
        appId: appId,
      },
    });
    return result;
  }
  /**
   * @summary Query status of "Quick Authentication QR Code" in profile center
   * @description According to user scan order, there are five states: not scanned, scanned, logged in, QR code expired and unknown error. Frontend should give different feedback to user based on different states.
   * @returns CheckQRCodeStatusRespDto
   */
  public async getAppLoginQrCodeStatus({
    qrcodeId,
  }: {
    /** QR code unique ID **/
    qrcodeId: string;
  }): Promise<CheckQRCodeStatusRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-app-login-qrcode-status",
      params: {
        qrcodeId: qrcodeId,
      },
    });
    return result;
  }
  /**
   * @summary APP scan code login
   * @description This endpoint is used for successful APP scan code login authorization, corresponding to rendering QR code on "Profile Center" - "Quick Authentication" page and end user scanning and successfully logging in process.
   * @returns LoginTokenRespDto
   */
  public async qrCodeAppLogin(
    requestBody: AppQRCodeLoginDto
  ): Promise<LoginTokenRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/qrcode-app-login",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Pre-check if verification code is correct
   * @description Pre-check if verification code is valid, this check will not invalidate the verification code.
   * @returns PreCheckCodeRespDto
   */
  public async preCheckCode(
    requestBody: PreCheckCodeDto
  ): Promise<PreCheckCodeRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/pre-check-code",
      data: requestBody,
    });
    return result;
  }
  /**
   * @returns ListWebAuthnAuthenticatorDeviceDataDto
   */
  public async listCredentialsByPage(
    requestBody: ListDeviceCredentialDto
  ): Promise<ListWebAuthnAuthenticatorDeviceDataDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/webauthn/page-authenticator-device",
      data: requestBody,
    });
    return result;
  }
  /**
   * @returns WebAuthnCheckValidCredentialsByCredIdsRespDto
   */
  public async checkValidCredentialsByCredIds(
    requestBody: CheckDeviceCredentialIdDto
  ): Promise<WebAuthnCheckValidCredentialsByCredIdsRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/webauthn/check-valid-credentials-by-credIds",
      data: requestBody,
    });
    return result;
  }
  /**
   * @returns IsSuccessRespDto
   */
  public async removeAllCredentials(
    requestBody: RemoveDeviceCredentialDto
  ): Promise<IsSuccessRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/webauthn/remove-credentials-by-authenticator-code",
      data: requestBody,
    });
    return result;
  }
  /**
   * @returns IsSuccessRespDto
   */
  public async removeCredential(
    credentialId: string,
    requestBody: WebAuthnRemoveCredentialDto
  ): Promise<IsSuccessRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/webauthn/remove-credential/{credentialID}",
      data: requestBody,
    });
    return result;
  }
  /**
   * @returns any
   */
  public async webAuthnAdminInitialize(): Promise<any> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/webauthn/admin/initialize",
    });
    return result;
  }
  /**
   * @returns any
   */
  public async webAuthnAdminRegisterFinalize(): Promise<any> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/webauthn/admin/registration/finalize",
    });
    return result;
  }
  /**
   * @returns any
   */
  public async updateWebAuthnAdminCredential(
    credentialId: string,
    requestBody: UpdatePasskeyDto
  ): Promise<any> {
    const result = await this.httpClient.request({
      method: "PUT",
      url: "/api/v3/webauthn/admin/credentials/{credentialId}",
      data: requestBody,
    });
    return result;
  }
  /**
   * @returns any
   */
  public async deleteWebAuthnAdminCredential(
    credentialId: string,
    userId: string,
    appId: string
  ): Promise<any> {
    const result = await this.httpClient.request({
      method: "DELETE",
      url: "/api/v3/webauthn/admin/credentials/{credentialId}/{userId}/{appId}",
    });
    return result;
  }
  /**
   * @returns any
   */
  public async listSubjectAuth(): Promise<any> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v2/applications/subject/person/list",
    });
    return result;
  }
  /**
   * @returns any
   */
  public async listWebAuthnPersonCredentials({
    userId,
    page = 1,
    limit = 10,
    appId,
  }: {
    /** User ID **/
    userId: string;
    /** Page number **/
    page?: number;
    /** Items per page **/
    limit?: number;
    /** Application id **/
    appId?: string;
  }): Promise<any> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/webauthn/person/credentials",
      params: {
        page: page,
        limit: limit,
        userId: userId,
        appId: appId,
      },
    });
    return result;
  }
  /**
   * @summary Verify MFA Token
   * @description Verify MFA Token
   * @returns MfaTokenIntrospectResponse
   */
  public async verifyMfaToken(
    formData: MfaTokenIntrospectEndpointParams
  ): Promise<MfaTokenIntrospectResponse> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/mfa/token/introspection",
    });
    return result;
  }
  /**
   * @summary Initiate binding MFA authentication factor request
   * @description When user has not bound certain MFA authentication factor, can initiate binding MFA authentication factor request. Different types of MFA authentication factor binding requests need to send different parameters, see profile parameter for details. After initiating verification request, GenAuth server will require verification through different means according to corresponding authentication factor type and passed parameters. This interface will return enrollmentToken, you need to bring this enrollmentToken when requesting "Bind MFA Authentication Factor" interface and provide corresponding credentials.
   * @returns SendEnrollFactorRequestRespDto
   */
  public async sendEnrollFactorRequest(
    requestBody: SendEnrollFactorRequestDto
  ): Promise<SendEnrollFactorRequestRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/send-enroll-factor-request",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Bind MFA authentication factor
   * @description Bind MFA factor.
   * @returns EnrollFactorRespDto
   */
  public async enrollFactor(
    requestBody: EnrollFactorDto
  ): Promise<EnrollFactorRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/enroll-factor",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Unbind MFA authentication factor
   * @description Unbind user's bound MFA authentication factor based on Factor ID.
   * @returns ResetFactorRespDto
   */
  public async resetFactor(
    requestBody: ResetFactorDto
  ): Promise<ResetFactorRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/reset-factor",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Get all bound MFA authentication factors
   * @description GenAuth currently supports four types of MFA authentication factors: SMS, email verification code, OTP, face.
   * @returns ListEnrolledFactorsRespDto
   */
  public async listEnrolledFactors(): Promise<ListEnrolledFactorsRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/list-enrolled-factors",
    });
    return result;
  }
  /**
   * @summary Get a specific MFA authentication factor
   * @description Get the details of a specific MFA Factor bound to the user based on Factor ID.
   * @returns GetFactorRespDto
   */
  public async getFactor({
    factorId,
  }: {
    /** MFA Factor ID **/
    factorId: string;
  }): Promise<GetFactorRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/get-factor",
      params: {
        factorId: factorId,
      },
    });
    return result;
  }
  /**
   * @summary Get available MFA authentication factors
   * @description Get all enabled MFA authentication factors that the user has not bound yet. Users can bind new MFA authentication factors from the returned list.
   * @returns ListFactorsToEnrollRespDto
   */
  public async listFactorsToEnroll(): Promise<ListFactorsToEnrollRespDto> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/list-factors-to-enroll",
    });
    return result;
  }
  /**
   * @summary Verify user's MFA bound OTP
   * @description Verify the OTP bound to user's MFA.
   * @returns MfaOtpVerityRespDto
   */
  public async mfaOtpVerify(
    requestBody: MfaOtpVerityDto
  ): Promise<MfaOtpVerityRespDto> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/mfa-totp-verify",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Get Passkey login parameters
   * @description Get Passkey login parameters
   * @returns any
   */
  public async webAuthnLoginInitalize(): Promise<any> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/webauthn/login/initialize",
    });
    return result;
  }
  /**
   * @summary Login with Passkey
   * @description Login with Passkey
   * @returns any
   */
  public async webAuthnLoginFinalize(
    requestBody: FinalizeWebAuthnLoginDto
  ): Promise<any> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/webauthn/login/finalize",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Get Passkey binding parameters
   * @description Get Passkey binding parameters
   * @returns any
   */
  public async webAuthnRegisterInitalize(): Promise<any> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/webauthn/registration/initialize",
    });
    return result;
  }
  /**
   * @summary Get MFA Passkey binding parameters
   * @description Get MFA Passkey binding parameters
   * @returns any
   */
  public async webAuthnMfaBindInitialize(): Promise<any> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/webauthn/mfa-bind/initialize",
    });
    return result;
  }
  /**
   * @summary Get Passkey MFA login parameters
   * @description Get Passkey MFA login parameters
   * @returns any
   */
  public async webAuthnMfaVerifyInitalize(): Promise<any> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/webauthn/mfa-verify/initialize",
    });
    return result;
  }
  /**
   * @summary Bind Passkey
   * @description Bind Passkey
   * @returns any
   */
  public async webAuthnRegisterFinalize(): Promise<any> {
    const result = await this.httpClient.request({
      method: "POST",
      url: "/api/v3/webauthn/registration/finalize",
    });
    return result;
  }
  /**
   * @summary Get list of bound Passkeys
   * @description Get list of bound Passkeys
   * @returns any
   */
  public async listWebAuthnCredentials({
    page = 1,
    limit = 10,
  }: {
    /** Page number **/
    page?: number;
    /** Number of items per page **/
    limit?: number;
  }): Promise<any> {
    const result = await this.httpClient.request({
      method: "GET",
      url: "/api/v3/webauthn/credentials",
      params: {
        page: page,
        limit: limit,
      },
    });
    return result;
  }
  /**
   * @summary Update passkey
   * @description Update passkey
   * @returns IsSuccessRespDto
   */
  public async updateWebAuthnCredential(
    credentialId: string,
    requestBody: UpdatePasskeyDto
  ): Promise<IsSuccessRespDto> {
    const result = await this.httpClient.request({
      method: "PUT",
      url: "/api/v3/webauthn/credentials/{credentialId}",
      data: requestBody,
    });
    return result;
  }
  /**
   * @summary Delete passkey
   * @description Delete passkey
   * @returns any
   */
  public async deleteWebAuthnCredential(credentialId: string): Promise<any> {
    const result = await this.httpClient.request({
      method: "DELETE",
      url: "/api/v3/webauthn/credentials/{credentialId}",
    });
    return result;
  }

  // ==== AUTO GENERATED AUTHENTICATION METHODS END ====

  /**
   * @summary Socket reconnection
   * @returns
   */
  private reconnect(eventName: string) {
    return new Promise((resolve, reject) => {
      if (
        this.options.retryTimes &&
        this.wsMap[eventName].timeConnect < this.options.retryTimes
      ) {
        if (!this.wsMap[eventName].lockConnect) {
          this.wsMap[eventName].lockConnect = true;
          this.wsMap[eventName].timeConnect++;
          setTimeout(() => {
            this.wsMap[eventName].lockConnect = false;
            this.initWebSocket(eventName, true)
              .then((res) => {
                resolve(true);
              })
              .catch((e) => {
                reject(e);
              });
          }, 2000);
        }
      } else {
        reject(`Socket service connection timeout`);
      }
    });
  }

  /**
   * @summary Establish socket connection, listen to message callback event queue
   * @returns
   */
  private initWebSocket(eventName: string, retry?: boolean) {
    return new Promise((resolve, reject) => {
      if (!this.wsMap[eventName] || retry) {
        this.wsMap[eventName] = {
          socket: new WebSocket(
            `${this.options.socketUri}/events/v1/authentication/sub?code=${eventName}&token=${this.options.accessToken}`
          ),
          timeConnect: retry ? this.wsMap[eventName].timeConnect : 0,
          lockConnect: false,
        };

        this.wsMap[eventName].socket.on("open", () => {
          resolve(true);
        });

        this.wsMap[eventName].socket.on("message", (data: Buffer) => {
          try {
            if (this.eventBus[eventName]) {
              this.eventBus[eventName].forEach((callback) => {
                callback[0](data.toString("utf8"));
              });
            } else {
              // Unsubscribed event
              console.warn("Unsubscribed event:", eventName);
            }
          } catch (error) {
            return reject(
              `Data formatting error, check transmission data format!!! ${error}`
            );
          }
        });

        this.wsMap[eventName].socket.on("error", async (e) => {
          try {
            await this.reconnect(eventName);
            resolve(true);
          } catch (error) {
            return reject(`Socket connection error: ${e}`);
          }
        });

        this.wsMap[eventName].socket.on("close", async () => {
          try {
            await this.reconnect(eventName);
            resolve(true);
          } catch (error) {
            return reject(`Socket connection closed`);
          }
        });
      } else {
        resolve(true);
      }
    });
  }

  /**
   * @summary Event subscription
   * @description After subscribing, receive server message callbacks through socket connection
   * @returns
   */
  public sub(eventName: string, callback: Function, errCallback: Function) {
    /**
     * 1. Check if socket is connected
     * 2. Get socket instance
     * 3. Subscribe
     */
    if (typeof eventName !== "string") {
      throw new Error("Subscription event name must be string type!!!");
    }

    if (typeof callback !== "function") {
      throw new Error("Subscription event callback must be function type!!!");
    }

    if (!this.options.socketUri) {
      throw new Error(
        "Subscription event requires socketUri connection address!!!"
      );
    }

    if (!this.options.accessToken) {
      throw new Error("Subscription event requires accessToken!!!");
    }

    this.initWebSocket(eventName).catch((e) => {
      this.eventBus[eventName].forEach((item) => {
        item[1]?.(e);
      });
    });

    if (this.eventBus[eventName]) {
      this.eventBus[eventName].push([callback, errCallback]);
    } else {
      this.eventBus[eventName] = [[callback, errCallback]];
    }
  }

  /**
   * @summary Event publishing
   * @description Client calls to publish events to the event center
   * @returns
   */
  public async pub(eventName: string, data: string) {
    if (typeof eventName !== "string") {
      throw new Error("Event name must be string type!!!");
    }

    if (typeof data !== "string") {
      throw new Error("Published data must be string type!!!");
    }

    if (!this.options.accessToken) {
      throw new Error("accessToken is required");
    }

    return await this.httpClient.request({
      method: "POST",
      url: "/api/v3/pub-userEvent",
      data: {
        eventType: eventName,
        source: `${pkg.name}: ${pkg.version}`,
        eventData: data,
      },
    });
  }
}

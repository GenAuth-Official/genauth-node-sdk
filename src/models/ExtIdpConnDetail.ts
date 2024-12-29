/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ExtIdpConnDetail = {
  /**
   * Identity source connection id
   */
  id: string;
  /**
   * Identity source connection type
   */
  type: ExtIdpConnDetail.type;
  /**
   * Identity source ID
   */
  extIdpId: string;
  /**
   * Identity source connection icon
   */
  logo: string;
  /**
   * Identity source connection ID
   */
  identifier?: string;
  /**
   * The display name of the identity source connection on the login page
   */
  displayName?: string;
  /**
   * Whether to only support login
   */
  loginOnly: boolean;
  /**
   *Account association mode
   */
  associationMode: ExtIdpConnDetail.associationMode;
  /**
   *Account binding method
   */
  challengeBindingMethods: Array<string>;
};

export namespace ExtIdpConnDetail {
  /**
   * Identity source connection type
   */
  export enum type {
    OIDC = "oidc",
    OAUTH = "oauth",
    SAML = "saml",
    LDAP = "ldap",
    AD = "ad",
    CAS = "cas",
    AZURE_AD = "azure-ad",
    ALIPAY = "alipay",
    FACEBOOK = "facebook",
    FACEBOOK_MOBILE = "facebook:mobile",
    TWITTER = "twitter",
    GOOGLE_MOBILE = "google:mobile",
    GOOGLE = "google",
    WECHAT_PC = "wechat:pc",
    WECHAT_MOBILE = "wechat:mobile",
    WECHAT_WEBPAGE_AUTHORIZATION = "wechat:webpage-authorization",
    WECHATMP_QRCODE = "wechatmp-qrcode",
    WECHAT_MINIPROGRAM_DEFAULT = "wechat:miniprogram:default",
    WECHAT_MINIPROGRAM_QRCONNECT = "wechat:miniprogram:qrconnect",
    WECHAT_MINIPROGRAM_APP_LAUNCH = "wechat:miniprogram:app-launch",
    GITHUB = "github",
    GITHUB_MOBILE = "github:mobile",
    QQ = "qq",
    QQ_MOBILE = "qq:mobile",
    WECHATWORK_CORP_QRCONNECT = "wechatwork:corp:qrconnect",
    WECHATWORK_AGENCY_QRCONNECT = "wechatwork:agency:qrconnect",
    WECHATWORK_SERVICE_PROVIDER_QRCONNECT = "wechatwork:service-provider:qrconnect",
    WECHATWORK_MOBILE = "wechatwork:mobile",
    WECHATWORK_AGENCY_MOBILE = "wechatwork:agency:mobile",
    DINGTALK = "dingtalk",
    DINGTALK_MOBILE = "dingtalk:mobile",
    DINGTALK_PROVIDER = "dingtalk:provider",
    WEIBO = "weibo",
    WEIBO_MOBILE = "weibo:mobile",
    APPLE = "apple",
    APPLE_WEB = "apple:web",
    BAIDU = "baidu",
    BAIDU_MOBILE = "baidu:mobile",
    LARK_INTERNAL = "lark-internal",
    LARK_PUBLIC = "lark-public",
    LARK_BLOCK = "lark-block",
    GITLAB = "gitlab",
    GITLAB_MOBILE = "gitlab:mobile",
    LINKEDIN = "linkedin",
    LINKEDIN_MOBILE = "linkedin:mobile",
    SLACK = "slack",
    SLACK_MOBILE = "slack:mobile",
    YIDUN = "yidun",
    QINGCLOUD = "qingcloud",
    GITEE = "gitee",
    GITEE_MOBILE = "gitee:mobile",
    INSTAGRAM = "instagram",
    WELINK = "welink",
    AD_KERBEROS = "ad-kerberos",
    HUAWEI = "huawei",
    HUAWEI_MOBILE = "huawei:mobile",
    HONOR = "honor",
    XIAOMI = "xiaomi",
    XIAOMI_MOBILE = "xiaomi:mobile",
    AWS = "aws",
    AMAZON = "amazon",
    AMAZON_MOBILE = "amazon:mobile",
    DOUYIN_MOBILE = "douyin:mobile",
    DOUYIN_MINIPROGRAM_DEFAULT = "douyin:miniprogram:default",
    KUAISHOU_MOBILE = "kuaishou:mobile",
    LINE_MOBILE = "line:mobile",
    OPPO_MOBILE = "oppo:mobile",
    WECHATWORK_QRCONNECT_OF_GENAUTH_AGENCY = "wechatwork:qrconnect:of:genauth:agency",
    SDBZ = "sdbz",
    ZJZWFW_QRCODE = "zjzwfw-qrcode",
    ZZDING = "zzding",
    SEEYONA8V5 = "seeyona8v5",
  }

  /**
   *Account association mode
   */
  export enum associationMode {
    NONE = "none",
    FIELD = "field",
    CHALLENGE = "challenge",
  }
}

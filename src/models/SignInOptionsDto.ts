/*istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignInOptionsDto = {
  /**
   * Requires requested permissions, must contain openid. If you need to obtain the mobile phone number and email, you need to include phone email; if you need refresh_token, you need to include offline_access. Please separate multiple scopes with spaces. The decoded content of id_token will contain fields related to user information corresponding to these scopes.
   * - `openid`: required.
   * - `profile`: Return birthdate, family_name, gender, given_name, locale, middle_name, name, nickname, picture, preferred_username, profile, updated_at, website, zoneinfo fields.
   * - `username`: returns username.
   * - `email`: returns email, email_verified.
   * - `phone`: returns phone_number, phone_number_verified.
   * - `offline_access`: If this parameter exists, the token interface will return the refresh_token field.
   * - `roles`: Returns the user's role list.
   * - `external_id`: The user's user ID in the original system.
   * - `extended_fields`: Returns the user's extended field information, the content is an object, the key is the extended field name, and the value is the extended field value.
   * - `tenant_id`: Returns the user's tenant ID.
   *
   */
  scope?: string;
  /**
   * Client real IP address. By default, GenAuth will identify the IP of the request source as the IP address of the user's login. If you call this interface in the backend server, you need to set this IP to the user's real request IP.
   */
  clientIp?: string;
  /**
   * Additional request context will be passed to the `context` object of [Pipeline](https://docs.genauth.ai/v2/guides/pipeline/) before and after authentication. Learn how to get the additional context passed in in the `context` parameter of Pipeline](https://docs.genauth.ai/v2/guides/pipeline/context-object.html).
   */
  context?: any;
  /**
   * Tenant ID
   */
  tenantId?: string;
  /**
   * To set additional user-defined data, you need to [Configure custom data] in the GenAuth console first (https://docs.genauth.ai/v2/guides/users/user-defined-field/).
   */
  customData?: any;
  /**
   * Whether to enable automatic registration. If set to true, when the user does not exist, an account will be automatically created for him first. Note: This parameter is only valid for the specified username and password, email password, and mobile phone number password. This parameter cannot be set for general account passwords.
   */
  autoRegister?: boolean;
  /**
   * Captcha graphic verification code, not case sensitive. When the **Security Policy** is set to **Verification Code** and the **Login Failure Count Limit** is triggered, you will need to fill in the graphical verification code the next time you log in.
   */
  captchaCode?: string;
  /**
   * /api/v3/get-captcha-code When obtaining the Captcha graphic verification code, it corresponds to the returned token. When captchaCode is passed in, this parameter must be passed
   */
  captchaToken?: string;
  /**
   * Password encryption type, supports encryption using RSA256 and national secret SM2 algorithms. Default is `none` to not encrypt.
   * - `none`: Do not encrypt the password and use clear text for transmission.
   * - `rsa`: Use the RSA256 algorithm to encrypt the password. You need to use the RSA public key of the GenAuth service for encryption. Please read the **Introduction** section to learn how to obtain the RSA256 public key of the GenAuth service.
   * - `sm2`: Use [National Secret SM2 Algorithm](https://baike.baidu.com/item/SM2/15081831) to encrypt the password. You need to use the SM2 public key of the GenAuth service for encryption, please read** Learn how to obtain the SM2 public key of the GenAuth service in the introduction** section.
   *
   */
  passwordEncryptType?: SignInOptionsDto.passwordEncryptType;
};

export namespace SignInOptionsDto {
  /**
   * Password encryption type, supports encryption using RSA256 and national secret SM2 algorithms. Default is `none` to not encrypt.
   * - `none`: Do not encrypt the password and use clear text for transmission.
   * - `rsa`: Use the RSA256 algorithm to encrypt the password. You need to use the RSA public key of the GenAuth service for encryption. Please read the **Introduction** section to learn how to obtain the RSA256 public key of the GenAuth service.
   * - `sm2`: Use [National Secret SM2 Algorithm](https://baike.baidu.com/item/SM2/15081831) to encrypt the password. You need to use the SM2 public key of the GenAuth service for encryption, please read** Learn how to obtain the SM2 public key of the GenAuth service in the introduction** section.
   *
   */
  export enum passwordEncryptType {
    SM2 = "sm2",
    RSA = "rsa",
    NONE = "none",
  }
}

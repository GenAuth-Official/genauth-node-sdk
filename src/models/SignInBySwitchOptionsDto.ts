/*istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignInBySwitchOptionsDto = {
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
   * Additional request context will be passed to the `context` object of [Pipeline](https://docs.genauth.ai/v2/guides/pipeline/) before and after authentication. Learn how to get the additional context passed in in the `context` parameter of Pipeline](https://docs.genauth.ai/v2/guides/pipeline/context-object.html).
   */
  context?: any;
  /**
   * To set additional user-defined data, you need to [Configure custom data] in the GenAuth console first (https://docs.genauth.ai/v2/guides/users/user-defined-field/).
   */
  customData?: any;
};

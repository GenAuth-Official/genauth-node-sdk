/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 *
 *
 * Since most external identity source logins do not allow the user to directly enter the account and password in the third-party system to log in, the binding of external identity sources always requires jumping to the other party's login page for authentication. This endpoint will jump to the third-party login page first through the browser `302` jump method.
 * After the end user completes the authentication in the third-party system, the browser will jump to the GenAuth server, and the GenAuth server will bind this external identity source to the user. The final result will be passed to the developer through the browser Window Post Message.
 * You can place a button in your application system to guide the user to click it, and a Window Popup will pop up with the address of this endpoint. After the user completes the authentication in the third-party identity source, this Popup will be passed to the parent window through Window Post Message.
 *
 * To this end, we encapsulate the relevant methods in the `@genauth/web` SDK, saving developers a lot of details:
 *
 * ```typescript
 * import { GenAuth } from "@genauth/web"
 * const sdk = new GenAuth({
 * // Application authentication address, for example: https://domain.genauth.ai
 * domain: "",
 *
 * // GenAuth application ID
 * appId: "GENAUTH_APP_ID",
 *
 * // Login callback address, which needs to be specified in the console "Application Configuration - Login callback URL"
 * redirectUri: "your_redirect_uri"
 * });
 *
 *
 * // success indicates whether the binding operation is successful;
 * // errMsg is the specific reason for failure if the binding fails, such as the identity source has been bound to another account, etc.
 * // identities is the third-party identity information specifically bound for this binding operation
 * const { success, errMsg, identities } = await sdk.bindExtIdpWithPopup({
 * "extIdpConnIdentifier": "my-wechat"
 * })
 *
 * ```
 *
 * After successfully binding the external identity source, you can get the user's information in this third-party identity source. Take binding Feishu account as an example:
 *
 * ```json
 * [
 * {
 * "identityId": "62f20932xxxxbcc10d966ee5",
 * "extIdpId": "62f209327xxxxcc10d966ee5",
 * "provider": "lark",
 * "type": "open_id",
 * "userIdInIdp": "ou_8bae746eac07cd2564654140d2a9ac61", * "originConnIds": ["62f2093244fa5cb19ff21ed3"] * }, * { * "identityId": "62f726239xxxxe3285d21c93", * "extIdpId": "62f209327xxxxcc10d966ee5", * "provider": "lark", * "type": "union_id", * "userIdInIdp": "on_093ce5023288856aa0abe4099123b18b", * "originConnIds": ["62f2093244fa5cb19ff21ed3"] * },
 * {
 * "identityId": "62f72623e011cf10c8851e4c",
 * "extIdpId": "62f209327xxxxcc10d966ee5",
 * "provider": "lark",
 * "type": "user_id",
 * "userIdInIdp": "23ded785",
 * "originConnIds": ["62f2093244fa5cb19ff21ed3"]
 * }
 * ]
 * ```
 *
 * As you can see, we have obtained the user's identity information in Feishu:
 *
 * - `open_id`: ou_8bae746eac07cd2564654140d2a9ac61
 * - `union_id`: on_093ce5023288856aa0abe4099123b18b
 * - `user_id`: 23ded785
 *
 * After binding this external identity source, subsequent users can use this identity source to log in, see **Login** interface.
 *
 *
 */
export type LinkExtidpDto = {
  /**
   * External identity source connection unique identifier
   */
  extIdpConnIdentifier?: any;
  /**
   * GenAuth application ID
   */
  appId?: any;
  /**
   * User's id_token
   */
  idToken?: any;
};

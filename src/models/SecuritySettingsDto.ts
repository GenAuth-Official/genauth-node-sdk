/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChangeEmailStrategyDto } from "./ChangeEmailStrategyDto";
import type { ChangePhoneStrategyDto } from "./ChangePhoneStrategyDto";
import type { CookieSettingsDto } from "./CookieSettingsDto";
import type { LoginAnomalyDetectionConfigDto } from "./LoginAnomalyDetectionConfigDto";
import type { QrcodeLoginStrategyDto } from "./QrcodeLoginStrategyDto";
import type { RegisterAnomalyDetectionConfigDto } from "./RegisterAnomalyDetectionConfigDto";
import type { SelfUnlockAccountConfigDto } from "./SelfUnlockAccountConfigDto";

export type SecuritySettingsDto = {
  /**
   * Security domain (CORS)
   */
  allowedOrigins?: string;
  /**
   * GenAuth Token validity time (seconds)
   */
  genauthTokenExpiresIn: number;
  /**
   * Verification code length. Contains SMS verification code, email verification code and graphic verification code.
   */
  verifyCodeLength: number;
  /**
   * Number of verification code attempts. Within a verification code validity period (default is 60 s), if the number of times the user enters the verification code incorrectly exceeds this threshold, the current verification code will become invalid and needs to be resent.
   */
  verifyCodeMaxAttempts: number;
  /**
   * User modifies the security policy of the mailbox
   */
  changeEmailStrategy: ChangeEmailStrategyDto;
  /**
   * Security policy for users to modify their mobile phone numbers
   */
  changePhoneStrategy: ChangePhoneStrategyDto;
  /**
   * Cookie expiration time setting
   */
  cookieSettings?: CookieSettingsDto;
  /**
   * Whether to prohibit user registration. If enabled, users will not be able to register on their own, and only administrators can create accounts for them. For B2B and B2E type user pools, it is enabled by default.
   */
  registerDisabled: boolean;
  /**
   * Frequent registration detection configuration
   */
  registerAnomalyDetection: RegisterAnomalyDetectionConfigDto;
  /**
   * Whether the user is required to set a password after verification code registration (valid only for GenAuth login page and Guard, not for API calls).
   */
  completePasswordAfterPassCodeLogin: boolean;
  /**
   * Log in to the anti-riot configuration
   */
  loginAnomalyDetection: LoginAnomalyDetectionConfigDto;
  /**
   * When logging in using an email address, whether to disable login and send a verification email when logging in with an unverified email address. After the user receives the email and completes the verification, they can log in.
   */
  loginRequireEmailVerified: boolean;
  /**
   * User self-service unlocking configuration. Note: Only users who have bound their mobile phone number/email address can unlock it by themselves.
   */
  selfUnlockAccount: SelfUnlockAccountConfigDto;
  /**
   * Whether to enable login account selection on the GenAuth login page
   */
  enableLoginAccountSwitch: boolean;
  /**
   * APP scan code to log in security configuration
   */
  qrcodeLoginStrategy: QrcodeLoginStrategyDto;
};

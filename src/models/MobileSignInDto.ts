/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ import type { AuthenticateByAlipayDto } from "./AuthenticateByAlipayDto";
import type { AuthenticateByLarkInternalDto } from "./AuthenticateByLarkInternalDto";
import type { AuthenticateByLarkPublicDto } from "./AuthenticateByLarkPublicDto";
import type { AuthenticateByWechatDto } from "./AuthenticateByWechatDto";
import type { AuthenticateByWechatMiniProgramCodeDto } from "./AuthenticateByWechatMiniProgramCodeDto";
import type { AuthenticateByWechatMiniProgramPhoneDto } from "./AuthenticateByWechatMiniProgramPhoneDto";
import type { AuthenticateByWechatworkAgencyDto } from "./AuthenticateByWechatworkAgencyDto";
import type { AuthenticateByWechatworkDto } from "./AuthenticateByWechatworkDto";
import type { AuthenticateByYidunDto } from "./AuthenticateByYidunDto";
import type { SignInByMobileOptionsDto } from "./SignInByMobileOptionsDto";
export type MobileSignInDto = {
  /** * External identity source connection identifier */ extIdpConnidentifier: string
  /** * Mobile social login type:
   * - `wechat`: WeChat mobile application* - `alipay`: Alipay mobile application* - `wechatwork`: Enterprise WeChat mobile application* - `wechatwork_agency`: Enterprise WeChat mobile application (agency development mode) * - `lark_internal`: Lark mobile enterprise self-built application* - `lark_public`: Lark mobile application store application* - `yidun`: NetEase Yidun one-click login* - `wechat_mini_program_code`: WeChat mini program usage code Login* - `wechat_mini_program_phone`: WeChat mini program uses mobile phone number to log in*
   */;
  connection: MobileSignInDto.connection;
  /**
   * WeChat mobile social login data, required when `connection` is `wechat`*/
  wechatPayload?: AuthenticateByWechatDto;
  /**
   * Alipay mobile social login data, required when `connection` is `alipay`*/
  alipayPayload?: AuthenticateByAlipayDto;
  /**
   * Enterprise WeChat mobile social login data, required when `connection` is `alipay` Required when `wechatwork`*/
  wechatworkPayload?: AuthenticateByWechatworkDto;
  /**
   * WeChat for Enterprise (development mode) mobile social login data, required when `connection` is `wechatwork_agency`*/
  wechatworkAgencyPayload?: AuthenticateByWechatworkAgencyDto;
  /**
   * Social login data for the Feishu App Store mobile app, required when `connection` is `lark_public`*/
  larkPublicPayload?: AuthenticateByLarkPublicDto;
  /**
   * Feishu App Store application mobile social login data, required when `connection` is `lark_internal`*/
  larkInternalPayload?: AuthenticateByLarkInternalDto;
  /**
   * NetEase Yidun mobile social Login data, required when `connection` is `yidun`*/
  yidunPayload?: AuthenticateByYidunDto;
  /**
* Social login data for NetEase Yidun mobile terminal, required when `connection` is `wechat_mini_program_code`* /
wechatMiniProgramCodePayload?: AuthenticateByWechatMiniProgramCodeDto;
/**
* NetEase Yidun mobile social login data, when `connection` is `wechat_mini_program_phone` is required*/
  wechatMiniProgramPhonePayload?: AuthenticateByWechatMiniProgramPhoneDto;
  /**
   * Optional parameters*/
  options?: SignInByMobileOptionsDto;
};

export namespace MobileSignInDto {
  /**
   * Mobile social login type:
   * - `wechat` : WeChat mobile application* - `alipay`: Alipay mobile application* - `wechatwork`: WeChat mobile application for enterprises* - `wechatwork_agency`: WeChat mobile application for enterprises (agency development mode)
   * - `lark_internal`: Lark mobile terminal for enterprises Create an application* - `lark_public`: Lark mobile app store application* - `yidun`: NetEase Yidun one-click login* - `wechat_mini_program_code`: WeChat mini program uses code to log in* - `wechat_mini_program_phone`: WeChat mini program uses mobile phone number to log in*
   */
  export enum connection {
    WECHAT = "wechat",
    ALIPAY = "alipay",
    WECHATWORK = "wechatwork",
    WECHATWORK_AGENCY = "wechatwork_agency",
    LARK_INTERNAL = "lark_internal",
    LARK_PUBLIC = "lark_public",
    YIDUN = "yidun",
    WECHAT_MINI_PROGRAM_CODE = "wechat_mini_program_code",
    WECHAT_MINI_PROGRAM_PHONE = "wechat_mini_program_phone",
  }
}

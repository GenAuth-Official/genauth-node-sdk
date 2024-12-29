/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SignInByAlipayPayloadDto } from './SignInByAlipayPayloadDto';
import type { SignInByAmazonPayloadDto } from './SignInByAmazonPayloadDto';
import type { SignInByApplePayloadDto } from './SignInByApplePayloadDto';
import type { SignInByBaiduPayloadDto } from './SignInByBaiduPayloadDto';
import type { SignInByDingTalkPayloadDto } from './SignInByDingTalkPayloadDto';
import type { SignInByDouyinMiniProgramCodeAndPhonePayloadDto } from './SignInByDouyinMiniProgramCodeAndPhonePayloadDto';
import type { SignInByDouyinMiniProgramCodePayloadDto } from './SignInByDouyinMiniProgramCodePayloadDto';
import type { SignInByDouyinPayloadDto } from './SignInByDouyinPayloadDto';
import type { SignInByFacebookPayloadDto } from './SignInByFacebookPayloadDto';
import type { SignInByGiteePayloadDto } from './SignInByGiteePayloadDto';
import type { SignInByGithubPayloadDto } from './SignInByGithubPayloadDto';
import type { SignInByGitlabPayloadDto } from './SignInByGitlabPayloadDto';
import type { SignInByGooglePayloadDto } from './SignInByGooglePayloadDto';
import type { SignInByHuaweiPayloadDto } from './SignInByHuaweiPayloadDto';
import type { SignInByKuaishouPayloadDto } from './SignInByKuaishouPayloadDto';
import type { SignInByLarkBlockPayloadDto } from './SignInByLarkBlockPayloadDto';
import type { SignInByLarkInternalPayloadDto } from './SignInByLarkInternalPayloadDto';
import type { SignInByLarkPublicPayloadDto } from './SignInByLarkPublicPayloadDto';
import type { SignInByLinePayloadDto } from './SignInByLinePayloadDto';
import type { SignInByLinkedInPayloadDto } from './SignInByLinkedInPayloadDto';
import type { SignInByMobileOptionsDto } from './SignInByMobileOptionsDto';
import type { SignInByOPPOPayloadDto } from './SignInByOPPOPayloadDto';
import type { SignInByQQPayloadDto } from './SignInByQQPayloadDto';
import type { SignInBySlackPayloadDto } from './SignInBySlackPayloadDto';
import type { SignInByWechatMiniProgramCodeAndPhonePayloadDto } from './SignInByWechatMiniProgramCodeAndPhonePayloadDto';
import type { SignInByWechatMiniProgramCodePayloadDto } from './SignInByWechatMiniProgramCodePayloadDto';
import type { SignInByWechatMiniProgramPhonePayloadDto } from './SignInByWechatMiniProgramPhonePayloadDto';
import type { SignInByWechatPayloadDto } from './SignInByWechatPayloadDto';
import type { SignInByWechatworkAgencyPayloadDto } from './SignInByWechatworkAgencyPayloadDto';
import type { SignInByWechatworkDto } from './SignInByWechatworkDto';
import type { SignInByWeiboPayloadDto } from './SignInByWeiboPayloadDto';
import type { SignInByXiaomiPayloadDto } from './SignInByXiaomiPayloadDto';
import type { SignInByYidunPayloadDto } from './SignInByYidunPayloadDto';

export type SigninByMobileDto = {
    /**
     * External identity source connection identifier
     */
    extIdpConnidentifier: string;
   /**
     *Mobile social login type:
     * - `apple`: Apple mobile application
     * - `wechat`: WeChat mobile application
     * - `alipay`: Alipay mobile application
     * - `wechatwork`: Enterprise WeChat mobile application
     * - `wechatwork_agency`: Enterprise WeChat mobile application (agency development model)
     * - `lark_internal`: Feishu mobile enterprise self-built application
     * - `lark_public`: Feishu mobile app store application
     * - `lark_block`: Feishu widget
     * - `yidun`: NetEase Yidun one-click login
     * - `wechat_mini_program_code`: WeChat mini program uses code to log in
     * - `wechat_mini_program_phone `: WeChat mini program uses mobile phone number to log in
     * - `wechat_mini_program_code_and_phone `: WeChat mini program uses code and mobile phone number to log in
     * - `douyin_mini_program_code`: Douyin mini program uses code to log in
     * - `douyin_mini_program_code_and_phone `: Use code and phone number to log in to the Douyin mini program
     * - `google`: Google mobile social login
     * - `facebook`: Facebook mobile social login
     * - `qq`: QQ mobile social login
     * - `weibo`: Sina Weibo mobile social login
     * - `baidu`: Baidu mobile social login
     * - `linkedin`: LinkedIn mobile social login
     * - `dingtalk`: DingTalk mobile social login
     * - `github`: Github mobile social login
     * - `gitee`: Gitee mobile social login
     * - `gitlab`: GitLab mobile social login
     * - `douyin`: Douyin mobile social login
     * - `kuaishou`: Kuaishou mobile social login
     * - `xiaomi`: Xiaomi mobile social login
     * - `line`: LINE mobile social login
     * - `slack`: Slack mobile social login
     * - `oppo`: OPPO mobile social login
     * - `huawei`: Huawei mobile social login
     * - `amazon`: Amazon mobile social login
     *
     */
    connection: SigninByMobileDto.connection;
    /**
     * Apple mobile social login data, required when `connection` is `wechat`.
     */
    wechatPayload?: SignInByWechatPayloadDto;
    /**
     * WeChat mobile social login data, required when `connection` is `apple`.
     */
    applePayload?: SignInByApplePayloadDto;
    /**
     * Alipay mobile social login data, required when `connection` is `alipay`.
     */
    alipayPayload?: SignInByAlipayPayloadDto;
    /**
     * Enterprise WeChat mobile social login data, required when `connection` is `wechatwork`.
     */
    wechatworkPayload?: SignInByWechatworkDto;
    /**
     * Enterprise WeChat (generation development mode) mobile social login data, required when `connection` is `wechatwork_agency`.
     */
    wechatworkAgencyPayload?: SignInByWechatworkAgencyPayloadDto;
    /**
     * Feishu App Store application mobile social login data, required when `connection` is `lark_public`.
     */
    larkPublicPayload?: SignInByLarkPublicPayloadDto;
    /**
     * Feishu’s self-built mobile app social login data, required when `connection` is `lark_internal`.
     */
    larkInternalPayload?: SignInByLarkInternalPayloadDto;
    /**
     * Feishu widget mobile social login data, required when `connection` is `lark_block`.
     */
    larkBlockPayload?: SignInByLarkBlockPayloadDto;
    /**
     * NetEase Yidun mobile social login data, required when `connection` is `yidun`.
     */
    yidunPayload?: SignInByYidunPayloadDto;
    /**
     * WeChat mini program uses code to log in related data, which is required when `connection` is `wechat_mini_program_code`.
     */
    wechatMiniProgramCodePayload?: SignInByWechatMiniProgramCodePayloadDto;
    /**
     * WeChat mini program uses mobile phone number to log in related data, which is required when `connection` is `wechat_mini_program_phone`.
     */
    wechatMiniProgramPhonePayload?: SignInByWechatMiniProgramPhonePayloadDto;
    /**
     * WeChat mini program uses code and mobile phone number to log in related data, which is required when `connection` is `wechat_mini_program_code_and_phone`.
     */
    wechatMiniProgramCodeAndPhonePayload?: SignInByWechatMiniProgramCodeAndPhonePayloadDto;
    /**
     * Douyin mini program uses code to log in related data, which is required when `connection` is `douyin_mini_program_code`.
     */
    douyinMiniProgramCodePayload?: SignInByDouyinMiniProgramCodePayloadDto;
    /**
     * Douyin mini program uses code and mobile phone number to log in related data, which is required when `connection` is `douyin_mini_program_code_and_phone`.
     */
    douyinMiniProgramCodeAndPhonePayload?: SignInByDouyinMiniProgramCodeAndPhonePayloadDto;
    /**
     * Google mobile social login data, required when `connection` is `google`.
     */
    googlePayload?: SignInByGooglePayloadDto;
    /**
     * Facebook mobile social login data, required when `connection` is `facebook`.
     */
    facebookPayload?: SignInByFacebookPayloadDto;
    /**
     * QQ mobile social login data, required when `connection` is `qq`.
     */
    qqPayload?: SignInByQQPayloadDto;
    /**
     * Sina Weibo mobile social login data, required when `connection` is `weibo`.
     */
    weiboPayload?: SignInByWeiboPayloadDto;
    /**
     * Baidu mobile social login data, required when `connection` is `baidu`, and one of the attributes `code` and `access_token` of `baiduPayload` must be selected, the `code` value is preferred as the authorized login method .
     */
    baiduPayload?: SignInByBaiduPayloadDto;
    /**
     * LinkedIn mobile social login data, required when `connection` is `linkedin`.
     */
    linkedInPayload?: SignInByLinkedInPayloadDto;
    /**
     * DingTalk mobile social login data, required when `connection` is `dingtalk`.
     */
    dingTalkPayload?: SignInByDingTalkPayloadDto;
    /**
     * Github mobile social login data, required when `connection` is `github`.
     */
    githubPayload?: SignInByGithubPayloadDto;
    /**
     * Gitee mobile social login data, required when `connection` is `gitee`.
     */
    giteePayload?: SignInByGiteePayloadDto;
    /**
     *GitLab mobile social login data, required when `connection` is `gitlab`.
     */
    gitlabPayload?: SignInByGitlabPayloadDto;
    /**
     * Douyin mobile social login data, required when `connection` is `douyin`.
     */
    douyinPayload?: SignInByDouyinPayloadDto;
    /**
     * Kuaishou mobile social login data, required when `connection` is `kuaishou`.
     */
    kuaishouPayload?: SignInByKuaishouPayloadDto;
    /**
     * Xiaomi mobile social login data, required when `connection` is `xiaomi`.
     */
    xiaomiPayload?: SignInByXiaomiPayloadDto;
    /**
     * LINE mobile social login data, required when `connection` is `line`.
     */
    linePayload?: SignInByLinePayloadDto;
    /**
     * Slack mobile social login data, required when `connection` is `slack`.
     */
    slackPayload?: SignInBySlackPayloadDto;
    /**
     * OPPO mobile social login data, required when `connection` is `oppo`.
     */
    oppoPayload?: SignInByOPPOPayloadDto;
    /**
     *Huawei mobile social login data, required when `connection` is `huawei`.
     */
    huaweiPayload?: SignInByHuaweiPayloadDto;
    /**
     * Amazon mobile social login data, required when `connection` is `amazon`.
     */
    amazonPayload?: SignInByAmazonPayloadDto;
    /**
     * Optional parameters
     */
    options?: SignInByMobileOptionsDto;
    /**
     * Application ID. It needs to be passed when the application's "token exchange authentication method" is configured as `client_secret_post`.
     */
    client_id?: string;
    /**
     * Application key. It needs to be passed when the application's "token exchange authentication method" is configured as `client_secret_post`.
     */
    client_secret?: string;
};

export namespace SigninByMobileDto {

    /**
     *Mobile social login type:
     * - `apple`: Apple mobile application
     * - `wechat`: WeChat mobile application
     * - `alipay`: Alipay mobile application
     * - `wechatwork`: Enterprise WeChat mobile application
     * - `wechatwork_agency`: Enterprise WeChat mobile application (agency development model)
     * - `lark_internal`: Feishu mobile enterprise self-built application
     * - `lark_public`: Feishu mobile app store application
     * - `lark_block`: Feishu widget
     * - `yidun`: NetEase Yidun one-click login
     * - `wechat_mini_program_code`: WeChat mini program uses code to log in
     * - `wechat_mini_program_phone `: WeChat mini program uses mobile phone number to log in
     * - `wechat_mini_program_code_and_phone `: WeChat mini program uses code and mobile phone number to log in
     * - `douyin_mini_program_code`: Douyin mini program uses code to log in
     * - `douyin_mini_program_code_and_phone `: Use code and phone number to log in to the Douyin mini program
     * - `google`: Google mobile social login
     * - `facebook`: Facebook mobile social login
     * - `qq`: QQ mobile social login
     * - `weibo`: Sina Weibo mobile social login
     * - `baidu`: Baidu mobile social login
     * - `linkedin`: LinkedIn mobile social login
     * - `dingtalk`: DingTalk mobile social login
     * - `github`: Github mobile social login
     * - `gitee`: Gitee mobile social login
     * - `gitlab`: GitLab mobile social login
     * - `douyin`: Douyin mobile social login
     * - `kuaishou`: Kuaishou mobile social login
     * - `xiaomi`: Xiaomi mobile social login
     * - `line`: LINE mobile social login
     * - `slack`: Slack mobile social login
     * - `oppo`: OPPO mobile social login
     * - `huawei`: Huawei mobile social login
     * - `amazon`: Amazon mobile social login
     *
     */
    export enum connection {
        APPLE = 'apple',
        WECHAT = 'wechat',
        ALIPAY = 'alipay',
        WECHATWORK = 'wechatwork',
        WECHATWORK_AGENCY = 'wechatwork_agency',
        LARK_INTERNAL = 'lark_internal',
        LARK_PUBLIC = 'lark_public',
        LARK_BLOCK = 'lark_block',
        YIDUN = 'yidun',
        WECHAT_MINI_PROGRAM_CODE = 'wechat_mini_program_code',
        WECHAT_MINI_PROGRAM_PHONE = 'wechat_mini_program_phone',
        WECHAT_MINI_PROGRAM_CODE_AND_PHONE = 'wechat_mini_program_code_and_phone',
        GOOGLE = 'google',
        FACEBOOK = 'facebook',
        QQ = 'qq',
        WEIBO = 'weibo',
        BAIDU = 'baidu',
        LINKEDIN = 'linkedin',
        DINGTALK = 'dingtalk',
        GITHUB = 'github',
        GITEE = 'gitee',
        GITLAB = 'gitlab',
        DOUYIN = 'douyin',
        KUAISHOU = 'kuaishou',
        XIAOMI = 'xiaomi',
        LINE = 'line',
        SLACK = 'slack',
        OPPO = 'oppo',
        HUAWEI = 'huawei',
        AMAZON = 'amazon',
        DOUYIN_MINI_PROGRAM_CODE = 'douyin_mini_program_code',
        DOUYIN_MINI_PROGRAM_CODE_AND_PHONE = 'douyin_mini_program_code_and_phone',
    }


}

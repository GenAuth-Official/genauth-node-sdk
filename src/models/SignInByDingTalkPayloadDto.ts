/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignInByDingTalkPayloadDto = {
    /**
     * Code obtained from DingTalk mobile social login
     */
    code: string;
    /**
     * If the `code` obtained by social login on DingTalk mobile terminal needs to call the `sns/getuserinfo_bycode` interface to obtain the personal information of the authorized user, then the parameter `isSnsCode` passes `true`, otherwise `code` will be exchanged for `accessToken` Get user information again
     */
    isSnsCode?: boolean;
};

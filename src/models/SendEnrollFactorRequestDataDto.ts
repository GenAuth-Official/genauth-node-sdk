/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SendEnrollFactorRequestOtpDataDto } from './SendEnrollFactorRequestOtpDataDto';

export type SendEnrollFactorRequestDataDto = {
    /**
     * Temporary credential enrollmentToken, valid for one minute. This parameter needs to be brought when "Binding MFA Authentication Elements".
     */
    enrollmentToken: string;
    /**
     * When initiating binding of OTP type authentication elements, the interface will return this data.
     */
    otpData?: SendEnrollFactorRequestOtpDataDto;
};

/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ export type SendEmailOrPhoneNotificationDto =
  {
    /**
     * Mail */ sendEmailNotification?: string;
    /**
     * Phone number */ sendPhoneNotification?: string;
    /** * application id */ appId?: string;
  };

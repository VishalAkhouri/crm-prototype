import { NotificationType } from '../constants/notification-type.const';

export interface NotificationModel {
  code: string;
  message: string;
  type: NotificationType
}

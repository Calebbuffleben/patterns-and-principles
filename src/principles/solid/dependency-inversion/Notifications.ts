import { EmailService } from './services/notifications/EmailService';
import { SMSService } from './services/notifications/SMSService';
import { NotificationService } from './services/NotificationService';

const emailService = new EmailService();
const notificationService = new NotificationService(emailService);

notificationService.sendNotification('user@example.com', 'Welcome!');

// Switching to SMS
const smsService = new SMSService();
const smsNotificationService = new NotificationService(smsService);

smsNotificationService.sendNotification('+123456789', 'Welcome!');
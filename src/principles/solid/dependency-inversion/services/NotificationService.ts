export class NotificationService {
    constructor (private messageService: IMessageService) {}

    sendNotification(recipient: string, message: string) {
        this.messageService.sendMessage(recipient, message);
    }
}
export class SMSService implements IMessageService {
    sendMessage(recipient: string, message: string): void {
        console.log(`SMS sent to ${recipient}: ${message}`);
    }
}
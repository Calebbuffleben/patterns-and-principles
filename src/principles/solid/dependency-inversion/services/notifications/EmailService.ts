export class EmailService implements IMessageService {
    sendMessage(recipient: string, message: string): void {
        console.log(`Email sent to ${recipient}: ${message}`);
    }
}
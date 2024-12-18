export class EmailNotification implements Observer {
    private email: string;

    constructor(email: string) {
        this.email = email;
    }

    update(stockSymbol: string, price: number): void {
        console.log(`[Email to ${this.email}] Stock ${stockSymbol} price updated to $${price}`);
    }
}
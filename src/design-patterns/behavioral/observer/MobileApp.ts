export class MobileApp implements Observer {
    private appName: string;

    constructor(appName: string) {
        this.appName = appName;
    }

    update(stockSymbol: string, price: number): void {
        console.log(`[${this.appName}] Stock ${stockSymbol} price updated to $${price}`);
    }
}
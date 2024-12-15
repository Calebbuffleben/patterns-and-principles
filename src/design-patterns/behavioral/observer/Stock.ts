class Stock implements Subject {
    private observers: Observer[] = [];
    private stockSymbol: string;
    private price: number;

    constructor(stockSymbol: string, initialPrice: number) {
        this.stockSymbol = stockSymbol;
        this.price = initialPrice;
    }
}
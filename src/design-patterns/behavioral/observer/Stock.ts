class Stock implements Subject {
    private observers: Observer[] = [];
    private stockSymbol: string;
    private price: number;

    constructor(stockSymbol: string, initialPrice: number) {
        this.stockSymbol = stockSymbol;
        this.price = initialPrice;
    }

    setPrice(newPrice: number): void {
        this.price = newPrice;
        this.notifyObservers();
    }

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(): void {
        for(const observer of this.observers) {
            observer.update(this.stockSymbol, this.price)
        }
    }
}
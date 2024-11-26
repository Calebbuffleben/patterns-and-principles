
import { PaymentStrategy } from './PaymentStrategy';

export class PaymentContext {
    private strategy: PaymentStrategy;

    constructor(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    setPaymentStrategy(strategy: PaymentStrategy) : void {
        this.strategy = strategy;
    }

    processPayment(amount: number): void {
        this.strategy.pay(amount);
    }
}
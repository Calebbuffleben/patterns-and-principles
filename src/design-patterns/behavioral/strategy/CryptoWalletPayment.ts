import { PaymentStrategy } from "./PaymentStrategy";

export class CryptoWalletPayment implements PaymentStrategy {
    pay(amount: number) : void {
        console.log(`Paid ${amount} using Crypto Wallet.`);
    }
}
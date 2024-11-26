import { PaymentContext } from './PaymentContext';
import { CreditCardPayment } from './CreditCardPayment';
import { PayPalPayment } from './PayPalPayment';
import { CryptoWalletPayment } from './CryptoWalletPayment';

const amount = 100;

// Pay with Credit Card
const creditCardPayment = new CreditCardPayment();
const paymentContext = new PaymentContext(creditCardPayment);
paymentContext.processPayment(amount);

// Change to PayPal
const paypalPayment = new PayPalPayment();
paymentContext.setPaymentStrategy(paypalPayment);
paymentContext.processPayment(amount);

// Change to Crypto Wallet
const cryptoPayment = new CryptoWalletPayment();
paymentContext.setPaymentStrategy(cryptoPayment);
paymentContext.processPayment(amount);
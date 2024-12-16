import { Stock } from './Stock';
import { MobileApp } from './MobileApp';
import { EmailNotification } from './EmailNotification';

const appleStock = new Stock('AAPL', 150);

const mobileApp = new MobileApp('StockTracker');
const emailNotification = new EmailNotification('user@example.com');

appleStock.addObserver(mobileApp);
appleStock.addObserver(emailNotification);

appleStock.setPrice(155);

//Removing Observer
appleStock.removeObserver(mobileApp);
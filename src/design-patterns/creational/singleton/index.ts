import { Logger } from './Logger';

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log('This is the first log message.'); // Output: [LOG]: This is the first log message.
logger2.log('This is the second log message.'); // Output: [LOG]: This is the second log message.

console.log(logger1 === logger2); // Output: true
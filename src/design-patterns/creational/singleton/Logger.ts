class Logger {
    private static instance: Logger;

    private constructor() {
        // Private constructor prevents instantiation from outside.
    }

    static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }

        return Logger.instance;
    }

    log(message: string): void {
        console.log(`[LOG]: ${message}`);
    }
}

export { Logger };
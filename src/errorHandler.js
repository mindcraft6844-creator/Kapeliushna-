class AppError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
        this.name = 'AppError';
    }
}

function handleError(error) {
    console.error(`[ERROR ${error.code || 'UNKNOWN'}]: ${error.message}`);
    process.exit(1);
}

module.exports = { AppError, handleError };

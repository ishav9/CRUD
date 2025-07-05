const fs = require('fs');

const loggerRequest = (filename) => {   // correct spelling
    return (req, res, next) => {
        fs.appendFile(filename, `${new Date().toISOString()} - ${req.method} ${req.url}\n`, (err) => {
            if (err) {
                console.error("Error writing to log file:", err);
            }
        });
        next();
    };
};

module.exports = loggerRequest;

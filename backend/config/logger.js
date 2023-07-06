import { createLogger, format, transports } from "winston";

const logger = createLogger({
    transports: [
        //new (transports.Console)({handleExceptions: true}),
        new transports.File({
            filename: "error.log",
            handleExceptions: true,
            format: format.combine(
                format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
                format.align(),
                format.printf(
                    (info) =>
                        `${info.level}: ${[info.timestamp]}: ${info.message}`
                )
            ),
        }),
    ],
});

export default logger;

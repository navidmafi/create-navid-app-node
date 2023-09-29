import { createLogger, format, transports } from "winston";
const logger = createLogger({
    level: "info",
    format: format.json(),
    defaultMeta: { service: "user-service" },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new transports.File({ filename: "error.log", level: "error", dirname: "logs" }),
        new transports.File({ filename: "combined.log", dirname: "logs" })
    ]
});
if (process.env.NODE_ENV !== "production") {
    logger.add(new transports.Console({
        level: "silly",
        format: format.combine(format.timestamp({ format: "YYYY-MM-DD hh:mm:ss A" }), format.colorize(), format.errors({ stack: true }), format.prettyPrint(), format.printf((info) => {
            if (info.stack)
                return `${info.timestamp} [${info.level}] ${info.message} ${info.stack}`;
            return `${info.timestamp} [${info.level}] ${info.message}`;
        }))
    }));
}
export default logger;

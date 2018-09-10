const {getLogger, setupLoggers} = require('./logger'),
logger = getLogger()

logger.error("Test error log")

logger.info("Test info log")

logger.debug("Test debug log")

logger.warn("Test warn log")
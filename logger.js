const winston = require('winston')
const { createLogger, format, transports } = winston
const { combine, timestamp, label, printf } = format

const logFormat = printf(info => {
  return `${info.timestamp} [${info.label}] ${info.level}: ${info.message} `;
})

Object.prototype.toJSONString = function() {
  return JSON.stringify(this)
}

var instance = null

const setupLoggers = () => {
  const logger = createLogger({
    format: combine(
      label({ label: 'ExampleApp' }),
      timestamp(),
      logFormat
    ),
    transports: [new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'info.log', level: 'info' }),
    new winston.transports.File({ filename: 'debug.log', level: 'debug' }),
    new winston.transports.File({ filename: 'blackbox.log' })]
  })
  instance = logger
  
}

const getLogger = () => {
  if(instance === null || instance === undefined) {
    setupLoggers()
  }
  return instance
}

module.exports = {getLogger,setupLoggers}



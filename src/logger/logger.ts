import * as morgan from 'morgan';

export enum LogLevel {
  OFF,
  FATAL,
  ERROR,
  WARN,
  INFO,
  DEBUG,
  TRACE,
}

export class Logger {
  readonly morganOptions: morgan.Options = {
    stream: {
      write: (message: string) => this.debug(message),
    },
  };

  constructor(private configLogLevel: LogLevel) {}

  private log(logLevel: LogLevel, message?: any) {
    if (this.configLogLevel >= logLevel) {
      console.log(this.formatLog(logLevel, message));
    }
  }

  private formatLog(
    logLevel: LogLevel,
    message: any = 'undefined or null value provided to logger'
  ) {
    return [
      new Date().toISOString(),
      '|',
      LogLevel[logLevel].padEnd(6),
      ':',
      message.toString().trim(),
    ].join(' ');
  }

  trace(message: any) {
    this.log(LogLevel.TRACE, message);
  }

  debug(message: any) {
    this.log(LogLevel.DEBUG, message);
  }

  info(message: any) {
    this.log(LogLevel.INFO, message);
  }

  warn(message: any) {
    this.log(LogLevel.WARN, message);
  }

  error(message: any) {
    this.log(LogLevel.ERROR, message);
  }

  fatal(message: any) {
    this.log(LogLevel.FATAL, message);
  }
}

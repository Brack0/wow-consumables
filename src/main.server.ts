import * as express from 'express';
import * as morgan from 'morgan';
import { environment } from './environments/environment';
import { angularFallback } from './server/angular-routing';
import { Logger } from './logger';

const PORT = 4200;
const app = express();
const logger = new Logger(environment.logLevel);

// Http request logger
app.use(morgan('dev', logger.morganOptions));

// Serve static files
app.use(
  '/wow-consumables',
  express.static('dist/browser'),
  angularFallback(logger)
);

// Start express server
const server = app.listen(PORT, () => {
  logger.info('Express server running on port 4200');
});

// Close on kill signals
function gracefulShutdown() {
  server.close(() => {
    logger.info('server stopped');
  });
}
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

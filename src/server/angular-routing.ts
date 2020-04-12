import { Request, Response } from 'express';
import { join } from 'path';
import { Logger } from '../logger';

const staticFileExts: string[] = [
  // Bundled JS
  '.js',
  '.js.map',
  // Document
  '.html',
  // Stylesheets
  '.css',
  // Images
  '.ico',
  '.jpg',
  '.png',
  '.svg',
];

function isStaticFileRequest(request: Request) {
  return staticFileExts.some(staticFileExt =>
    request.url.endsWith(staticFileExt)
  );
}

export function angularFallback(logger: Logger) {
  return (request: Request, response: Response) => {
    if (!isStaticFileRequest(request)) {
      logger.info(
        `Redirecting from ${request.path} to index.html (fallback for Angular routed apps)`
      );
      response.sendFile('index.html', {
        root: join(__dirname, '../../browser'),
      });
    } else {
      response.status(404).send('No content');
    }
  };
}

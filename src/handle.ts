import { Router } from 'express';
import { Logger } from 'winston';
import path from 'path';

import { DATA, STATICS } from './constants';

export default (router: Router, logger: Logger) => (
  router.get(['/', '/:param'], (req, res) => {
    const { hostname, params: { param } } = req;
    const item = (DATA[hostname + (param ? `/${param}` : '')]) || '';

    const [type, value] = item.split(':');

    switch (type) {
      case 'url':
        res.status(302).redirect(`${req.protocol}://${value}`);
        logger.info(`[${hostname}/${param}] redirect to ${value}`);
        break;
      case 'file':
        res.sendFile(path.resolve(STATICS, value, 'index.html'));
        logger.info(`[${hostname}/${param}] use static file from ${value}`);
        break;
      default:
        res.status(400).json(
          { message: 'Invalid config, no parameters found.' }
        );
        logger.error(`[${hostname}/${param}] error on load config`);
        break;
    }
  })
);

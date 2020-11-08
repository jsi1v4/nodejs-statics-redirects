import express from 'express';
import helmet from 'helmet';

import { STATICS } from './constants';
import logger from './logger';
import handle from './handle';

const app = express();
const router = express.Router();

app
  .enable('trust proxy')
  .use(helmet.frameguard({ action: 'sameorigin' }))
  .use(helmet.xssFilter())

  .use('/static', express.static(STATICS))

  .use(handle(router, logger));

export default app;

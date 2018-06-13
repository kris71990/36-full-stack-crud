'use strict';

import { Router } from 'express';
import { json } from 'body-parser';
import HttpError from 'http-errors';
import Photo from '../models/photo';
import logger from '../lib/logger';

const jsonParser = json();
const photoRouter = new Router();

photoRouter.post('/pictures', jsonParser, (request, response, next) => { 
  console.log(request.body);
  return new Photo({
    ...request.body,
  })
    .save()
    .then((photo) => {
      logger.log(logger.INFO, 'POST - responding with a 200 status code and a new Dog');
      return response.json(photo);
    })
    .catch(next);
});

export default photoRouter;

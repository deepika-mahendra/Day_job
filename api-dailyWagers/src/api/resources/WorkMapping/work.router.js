const express = require('express');

import workController from './work.controller';

export const workRouter = express.Router();
workRouter.route('/').get(workController.findAll);
workRouter.route('/').post(workController.create);
workRouter.route('/:id')
.put(workController.update)
.delete(workController.delete)
.get(workController.findOne);
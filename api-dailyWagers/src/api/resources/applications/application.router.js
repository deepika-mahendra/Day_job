const express = require('express');

import applicationController from './application.controller';

export const applicationRouter = express.Router();
applicationRouter.route('/').get(applicationController.findAll);
applicationRouter.route('/').post(applicationController.create);
applicationRouter.route('/:id')
.put(applicationController.update)
.delete(applicationController.delete)
.get(applicationController.findOne);
applicationRouter.route('/:req_id/:employee_id')
.get(applicationController.findName)
const express = require('express');

import employerController from './employer.controller';

export const employerRouter = express.Router();
employerRouter.route('/').get(employerController.findAll);
employerRouter.route('/').post(employerController.create);
employerRouter.route('/:id')
.put(employerController.update)
.delete(employerController.delete)
.get(employerController.findOne);
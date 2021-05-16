const express = require('express');

import registrationController from './registration.controller';

export const registrationRouter = express.Router();
registrationRouter.route('/').get(registrationController.findAll);
registrationRouter.route('/').post(registrationController.create);
registrationRouter.route('/:id')
.put(registrationController.update)
.delete(registrationController.delete)
.get(registrationController.findOne);
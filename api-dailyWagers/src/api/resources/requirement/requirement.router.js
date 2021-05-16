const express = require('express');

import requirementController from './requirement.controller';

export const requireRouter = express.Router();
requireRouter.route('/').get(requirementController.findAll);
requireRouter.route('/').post(requirementController.create);
requireRouter.route('/:id')
.put(requirementController.update)
.delete(requirementController.delete)
.get(requirementController.findOne);
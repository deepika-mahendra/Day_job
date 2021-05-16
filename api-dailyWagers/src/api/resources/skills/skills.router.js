const express = require('express');

import skillsController from './skills.controller';

export const skillsRouter = express.Router();
skillsRouter.route('/').get(skillsController.findAll);
skillsRouter.route('/').post(skillsController.create);
skillsRouter.route('/:id')
.put(skillsController.update)
.delete(skillsController.delete)
.get(skillsController.findOne);
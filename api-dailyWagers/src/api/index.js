import express from 'express';
import { userRouter } from './resources/users/user.router';
import { registrationRouter } from './resources/registration/registration.router';
import { requireRouter } from './resources/requirement/requirement.router';
import {skillsRouter} from './resources/skills/skills.router';
import { employerRouter } from './resources/Employer/employer.router';
import { applicationRouter } from './resources/applications/application.router';
import { workRouter} from './resources/WorkMapping/work.router';
export const restRouter = express.Router();
restRouter.use('/user',userRouter);
restRouter.use('/employee',registrationRouter);
restRouter.use('/req',requireRouter);
restRouter.use('/skills',skillsRouter);
restRouter.use('/employer',employerRouter);
restRouter.use('/application',applicationRouter);
restRouter.use('/workmap',workRouter);
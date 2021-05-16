import Joi from 'joi';
export default{
    validationSchema(body){
        const schema = Joi.object().keys({
            employee_id:Joi.array().required(),
            req_id:Joi.string().required(),
            isActive:Joi.string().required(),
            created_dt:Joi.date().required(),
          
        });
        const {error,value} = Joi.validate(body,schema);
        if(error && error.details){
            return {error};
        }
        return{value};
        },
      
    }
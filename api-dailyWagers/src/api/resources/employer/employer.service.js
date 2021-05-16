import Joi from 'joi';
export default{
    validationSchema(body){
        const schema = Joi.object().keys({
            name:Joi.string().required(),
            location:Joi.string().required(),
            contact:Joi.number().required(),
            alternate:Joi.number().required(),
            Office_email:Joi.string().email().required(),
            point_of_contact:Joi.string().required(),
            type:Joi.string().required(),
        
            isActive:Joi.string(),
            created_dt:Joi.date(),
          
        });
        const {error,value} = Joi.validate(body,schema);
        if(error && error.details){
            return {error};
        }
        return{value};
        },
      
    }
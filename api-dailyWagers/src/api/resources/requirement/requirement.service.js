import Joi from 'joi';
export default{
    validationSchema(body){
        const schema = Joi.object().keys({
            title:Joi.string(),
            description:Joi.string(),
          employer:Joi.string(),
            location:Joi.string(),
           skill_req:Joi.string(),
           worker_req:Joi.number(),
            duration:Joi.number(),
            start_dt:Joi.date(),
            end_dt:Joi.date(),
            payment:Joi.number(),
            benifits:Joi.string(),
            url:Joi.string(),
            isActive:Joi.string(),
            created_date:Joi.date()
          
        });
        const {error,value} = Joi.validate(body,schema);
        if(error && error.details){
            return {error};
        }
        return{value};
        },
      
    }
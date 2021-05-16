import Joi from 'joi';
export default{
    validationSchema(body){
        const schema = Joi.object().keys({
            name:Joi.string().required(),
            email:Joi.string().email().required(),
            password:Joi.string().required(),
            contact:Joi.number().required(),
            role:Joi.string()
          
        });
        const {error,value} = Joi.validate(body,schema);
        if(error && error.details){
            return {error};
        }
        return{value};
        },

        validateLoginSchema(body){
            const schema = Joi.object().keys({
                email:Joi.string().email().required(),
                password:Joi.string().required(),
               
            });
            const {error,value} = Joi.validate(body,schema);
            console.log(error);
            if(error && error.details){
                return {error};
            }
            return{value};
        }
    }

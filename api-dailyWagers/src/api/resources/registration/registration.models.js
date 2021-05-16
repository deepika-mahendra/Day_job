import mongoose from 'mongoose';
import { date } from 'joi';
const schema = mongoose.Schema;
const registrationSchema = new schema({
    employee_id:{
        type:String,
        required:true
        
    },
    name:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    Pin:{
        type:Number,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    Adhar_no:{
        type:Number,
        required:true
    },
    experience:{
        type:Number,
        required:true
    },
    status:{
        type:String,
    
    },
    skill_req:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    created_date:{
        type:String,
        default:date.now
      
    },
    isActive:{
        type:String,
        default:true
    }
},{collection:'Employee'});
export default new mongoose.model('Emp',registrationSchema);
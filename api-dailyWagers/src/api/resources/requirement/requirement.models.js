import mongoose from 'mongoose';
import { urlencoded } from 'body-parser';
import { date } from 'joi';
const schema = mongoose.Schema;
const requirementSchema = new schema({
    title:{
        type:String,
      
    },
    description:{
        type:String,
       
    },
    employer:{
        type:String,
    },
    location:{
        type:String,
      
    },
    skill_req:{
        type:String,
      
    },
    worker_req:{
        type:Number,
      
    },
    duration:{
        type:Number,
      
    },
    start_dt:{
        type:Date,
      
    },
    end_dt:{
        type:Date,
      
    },
    payment:{
        type:Number,
      
    },
    benifits:{
        type:String,
      
    },
    url:{
        type:String,
      
    },
    isActive:{
        type:String,
        default:"True"
    },
    created_date:{
        type:Date,
        default:Date.now
       
    },
},{collection:'requirement'});
export default new mongoose.model('require',requirementSchema);
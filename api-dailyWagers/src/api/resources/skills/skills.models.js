import mongoose from 'mongoose';
import { urlencoded } from 'body-parser';

const schema = mongoose.Schema;
const skillSchema = new schema({
    name:{
        type:String,
        required:true
    },
    isActive:{
        type:String,
        default:"true"
        
    },
    created_date:{
        type:Date,
        default:Date.now
       
    },
},{collection:'skills'});
export default new mongoose.model('skills',skillSchema);
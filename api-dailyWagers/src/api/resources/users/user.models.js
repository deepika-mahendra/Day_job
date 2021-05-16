import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"user"
    },
    employee_id:{
        type:String,
    },
    contact:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    created_date:{
        type:Date,
      
    },
    isActive:{
        type:Boolean
    }
},{collection:'users'});
export default new mongoose.model('user',userSchema);
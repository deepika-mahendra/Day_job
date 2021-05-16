import mongoose from 'mongoose';
import user from '../users/user.models';
import require from '../requirement/requirement.models';
const schema = mongoose.Schema;
import mongoosePaginate from 'mongoose-paginate';
const workSchema = new schema({
    req_id:{
        ref:'require',
        type:schema.Types.ObjectId,
        required:true
    },
    employee_id:[{
        ref:'user',
        type:schema.Types.ObjectId,
        required:true
        
    }],
    isActive:{
        type:String,
        default:"True"
    },
    created_dt:{
        type:Date,
        default:Date.now
    },
},{collection:'workmapping'});
workSchema.plugin(mongoosePaginate);
export default new mongoose.model('Work',workSchema);
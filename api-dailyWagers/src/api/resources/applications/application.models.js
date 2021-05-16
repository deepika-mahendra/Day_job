import mongoose from 'mongoose';
import Emp from '../registration/registration.models';
import require from '../requirement/requirement.models';
const schema = mongoose.Schema;
import mongoosePaginate from 'mongoose-paginate';
const applicationSchema = new schema({
    req_id:{
        ref:'require',
        type:schema.Types.ObjectId,
        required:true
    },
    employee_id:{
        ref:'user',
        type:schema.Types.ObjectId,
        required:true,

    },
    isActive:{
        type:String,
        default:"True"
    },
    created_dt:{
        type:Date,
        default:Date.now
       
    },
},{collection:'application'});
applicationSchema.plugin(mongoosePaginate);
export default new mongoose.model('application',applicationSchema);
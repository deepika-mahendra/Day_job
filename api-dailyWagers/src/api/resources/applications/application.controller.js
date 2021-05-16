import application from './application.models';
import applicationService from './application.service';
import mongoose from 'mongoose';

export default{
    findAll(req,res,next){
        // res.json({msg:"FInd all users!!"})
        application.find().then(data => res.json(data))
        .catch(err => res.status(500).json(err));
    },
    async create(req,res){
          try {
              const {error,value}= applicationService.validationSchema(req.body);
              if(error && error.details){
                  return res.status(500).json(error);
              }
              //create user
            await application.create(value)
            .then(item => res.json(item))
            .catch(err=> res.status(500).json(err));
              console.log(value);
          } catch (err) {
              console.log(err);
          }
      },
    //   findOne(req,res,next){
    //     let {id} = req.params.id;
    //     application.findById(id)
    //     .populate('employee_id')
    //     .then(data => {
    //         res.json(data)
    //     })
    //     .catch(err => res.status(500).json(err));
    // },

    findOne(req,res,next){
        let {id} = req.params;
        const options = {
            populate:'employee_id ref_id'
          }
        application.paginate({'req_id':id},options).then(data=> res.json(data))
        .catch(err=>res.status(500).json(err))
        console.log(id)
    },
    update(req,res){
        const id = req.params.id
        application.findOneAndUpdate({_id:id},{$set:req.body},{new:true}).then(emp=>{
            if(!emp){
                return res.status(400).json({err: "emp not found."});
            }
            return res.json(emp);
        })
        .catch(err => res.status(500).json(err));
    },
    delete(req,res){
        const id = req.params.id;
        application.findByIdAndRemove(id).then(data => {
            if(!data){
                return res.status(400).json({err: "user not found."});
            }
            return res.json(data);
        })
        .catch(err => res.status(500).json(err));
    },
    findName(req,res,next){
        let {req_id} = req.params;
        let {employee_id} = req.params;
        application.find({$and:[{"req_id":req_id},{"employee_id":employee_id}]}).then(data=>res.json(data))
        .catch(err=>res.status(500).json(err))
    }
    

}
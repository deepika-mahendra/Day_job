import Work from './work.models';
import workService from './work.service';
export default{
    findAll(req,res,next){
        // res.json({msg:"FInd all users!!"})
        Work.find().then(data => res.json(data))
        .catch(err => res.status(500).json(err));
    },
    async create(req,res){
          try {
              const {error,value}= workService.validationSchema(req.body);
              if(error && error.details){
                  return res.status(500).json(error);
              }
              //create user
            await Work.create(value)
            .then(item => res.json(item))
            .catch(err=> res.status(500).json(err));
              console.log(value);
          } catch (err) {
              console.log(err);
          }
      },

//    findOne(req,res,next){
//         let {id} = req.params;
//         Work.find({'employee_id':id})
//         .populate('req_id')
//         .then(data => {
//             res.json(data)
//         })
//         .catch(err => res.status(500).json(err));
//     },

//  async findOne(req,res,next){
//         const {id} = req.params;
//        const options={
//            populate:'req_id'
//        }
//        await Work.paginate({'employee_id':id}).then(data=>req.json(data))
//         .catch(err => res.status(500).json(err));
//         console.log(id);
//     },
 findOne(req,res){
    const {id} = req.params;
     Work.find({'employee_id':id}).populate('req_id').then(user => {
        return res.json(user);
    })
    .catch(err => res.status(500).json(err));
},

    update(req,res){
        const id = req.params.id
        Work.findOneAndUpdate({_id:id},{$set:req.body},{new:true}).then(emp=>{
            if(!emp){
                return res.status(400).json({err: "emp not found."});
            }
            return res.json(emp);
        })
        .catch(err => res.status(500).json(err));
    },
    delete(req,res){
        const id = req.params.id;
        Work.findByIdAndRemove(id).then(data => {
            if(!data){
                return res.status(400).json({err: "user not found."});
            }
            return res.json(data);
        })
        .catch(err => res.status(500).json(err));
    },

}
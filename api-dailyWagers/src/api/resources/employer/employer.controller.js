import employer from './employer.models';
import employerService from './employer.service';
export default{
    findAll(req,res,next){
        // res.json({msg:"FInd all users!!"})
        employer.find().then(data => res.json(data))
        .catch(err => res.status(500).json(err));
    },
    async create(req,res){
          try {
              const {error,value}= employerService.validationSchema(req.body);
              if(error && error.details){
                  return res.status(500).json(error);
              }
              //create user
            await employer.create(value)
            .then(item => res.json(item))
            .catch(err=> res.status(500).json(err));
              console.log(value);
          } catch (err) {
              console.log(err);
          }
      },
      findOne(req,res){
        const id = req.params.id;
        employer.findById(id).then(data => {
            if(!data){
                return res.status(400).json({err: "emp not found."});
            }
            return res.json(data);
        })
        .catch(err => res.status(500).json(err));
    },
    update(req,res){
        const id = req.params.id
        employer.findOneAndUpdate({_id:id},{$set:req.body},{new:true}).then(emp=>{
            if(!emp){
                return res.status(400).json({err: "emp not found."});
            }
            return res.json(emp);
        })
        .catch(err => res.status(500).json(err));
    },
    delete(req,res){
        const id = req.params.id;
        employer.findByIdAndRemove(id).then(data => {
            if(!data){
                return res.status(400).json({err: "user not found."});
            }
            return res.json(data);
        })
        .catch(err => res.status(500).json(err));
    },

}
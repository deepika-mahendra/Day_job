// import '@babel/polyfill';
import express from "express";
import { restRouter } from './api';
import mongoose from'mongoose';
import  bodyParser from 'body-parser';
import cors from 'cors';
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dailyWagers',{
    useNewUrlParser: true,
   useUnifiedTopology: true
   },
   
   );
const app = express();
const PORT = 3000;
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use('/api',restRouter);



app.use((req,res,next)=>{
    const error = new Error("Not Found");
    error.status =404;
    error.message="Invalid route.";
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    return res.json({
        error:{
            message: error.message
        }
    })
});

app.use(function(res,req,next){
    console.log("Middleware before Api call");
    next();
})

app.listen(PORT,()=>{
    console.log(`Server is running at port number ${PORT}`);
})
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session')
const app = express();
const courseRoute = require('./Routes/Course.js')
const userRoute = require('./Routes/User.js')
const categoryRoute = require('./Routes/Category.js');
const User = require('./models/User.js');

const port = process.env.PORT || 5000;

//Connect DB
mongoose.connect("mongodb://127.0.0.1:27017/smart-db",{
    useUnifiedTopology:true,
}).then(()=>{
    console.log("DB connected successfuly");
})

//Global Variable
global.userIN = null;


//Middlewares
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}));
app.use(express.static('/public'))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret:'my_keyboard_cat',
    resave:false,
    saveUninitialized:true,
    cookie:{
        secure:false,
        httpOnly:true,
        maxAge:86400000
    }
}))



// app.use('/userin',(req,res)=>{
//     if(req.session.userID){
//         res.send({userIN : req.session.userID})
//     }
//     else{
//         res.status(400).json({
//             status:"fail"
//         })
//     }
// })

app.use("/userin",async(req,res)=>{
    if(req.session.userID){
        const user = await User.findById(req.session.userID);
        if(user){
            res.send({userIN:req.session.userID, role:user.role})
        }else{
            res.status(400).json({
                status:"fail"
            })
        }
    }else{
        res.status(400).json({
            status:"fail"
        })
    }
})

app.use('/logout',(req,res)=>{
    req.session.destroy(()=>{
        console.log("outsucces")
        res.send({userIN:null});
    })
})


app.use("/courses",courseRoute)

app.use("/users",userRoute)

app.use('/category',categoryRoute);


app.listen(port,()=>{
    console.log(`Server is running the ${port}`);
})
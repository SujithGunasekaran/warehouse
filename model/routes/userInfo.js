const router = require('express').Router();
let UserInfo = require('../userInfoModel');
var salt = 10;
var bcrypt = require('bcrypt');

/* Signup Page API */

router.route('/signup/addNewuser').post((req,res) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const newUserInfo = new UserInfo({username, email, password})
    UserInfo.findOne({username : username}, async function(user,err){
        if(user){
            res.status(300).send()
        }
        else{
            const salt = await bcrypt.genSalt(10)
            newUserInfo.password = await bcrypt.hash(newUserInfo.password, salt)
            await newUserInfo.save()
            .then(()=>{
                res.status(200).send()
            })
            .catch((err) => res.status(404).send())
        }
    })
})

/* Login Page API*/

router.route('/login').post((req,res) => {
   UserInfo.findOne({username : req.body.username})
   .then((user) =>{
        if(user)
        {
            bcrypt.compare(req.body.password, user.password, function (err, result) 
            {
                if (result == true) 
                {
                    res.status(200).json(user).send();
                } 
                else   
                {
                    res.status(400).send();
                }
            });
        }
        else
        {
            res.status(400).send()
        }
    })
})

/* Forgot Passowrd Page API */

router.route('/fogotPassword/recovery').post((req,res) => {
    UserInfo.findOne({ username : req.body.username, email : req.body.email})
    .then((user) =>{
        if(user)
        {
            res.status(200).json(user).send()
        }
        else
        {
            res.status(400).send()
        }
    })
    .catch((err) =>{
        res.status(404).send()
    })
 })

/* Password Update API */

router.route('/passwordUpdate').post((req,res)=>{
    const email = req.body.email
    const password = req.body.password
    const newUserPassword = ({email : email, password : password})
    UserInfo.findOne({email : email})
    .then(async (user) => {
        if(user){
            const salt = await bcrypt.genSalt(10)
            newUserPassword.password = await bcrypt.hash(newUserPassword.password,salt)
            await UserInfo.findOneAndUpdate({email : email},{$set:{password : newUserPassword.password}},{new : true})
            .then(() => {
                res.status(200).send()
            })
            .catch((err) => {
                res.status(400).send()
            })
        }
    })
    .catch((err) => {
        res.status(404).send()
    })
})


module.exports = router;
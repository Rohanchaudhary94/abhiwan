const express = require('express');
const router = express.Router();
const user = require('../model/User');

router.post('/register' , async(req,res) =>{
    const {user_id, email} = req.body;

    if(!user_id || !email) {
        res.status(422).json('please fill the data');
    }

    try {
        const preUser = await user.findOne({email: email});
        console.log(preUser);
        if(preUser) {
            res.status(422).json('user is already present');
        }else{
            const addUser = new user({
                user_id,email
            });

            await addUser.save();
            res.status(201).json(addUser);
            console.log(addUser);
        }
    } catch (error) {
        res.status(422).json(error);
        
    }
});

router.get('/getuser/:id' , async(req,res) => {
    try {
        const {id} = req.params;

        const userIndividual = await user.findById({_id:id});
        console.log(userIndividual);
        res.status(201).json(userIndividual)
    } catch (error) {
        res.status(422).json(error);
    }
})

module.exports = router;
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    players:[{
        user_id:{
            type:String,
            required: true
        },
        email:{
            type: String,
            required: true,
        
        },
    }]
})

const user =  mongoose.model('users', UserSchema);

module.exports = user;
const mongoose = require('mongoose');

const DB = 'mongodb://localhost:27017/abiwan';

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log(`database connection successful`);
}).catch((error) => {
    console.log('error'+ error.message);
})
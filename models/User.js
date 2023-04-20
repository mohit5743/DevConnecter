const mongoose = require('mongoose');

const UserSchema= new mongooseSchema({
    name :{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true

    },
    password:{
        type: String,
        require: true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports= User = mongoose.model('user',UserSchema);
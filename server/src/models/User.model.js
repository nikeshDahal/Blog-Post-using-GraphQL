const mongoose  = require('mongoose');
import Post from './Post.model'
import Comment from './Comment.model'
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    posts:[
        {
            type:String,
            ref:'Post'
        }
    ],
    comments:[
        {
            type:String,
            ref:'Comment'
        }
    ]  
});

const User = mongoose.model('user',UserSchema);
module.exports = User;
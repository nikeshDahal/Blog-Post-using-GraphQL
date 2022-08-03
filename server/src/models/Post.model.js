const mongoose  = require('mongoose')
import User from './User.model'
import Comment from '../models/Comment.model'
const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String
    },
    published:{
        type:Boolean
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    comments:[
        {
            type:String,
            ref:'Comment'

        }
    ]

})

const Post = mongoose.model('post',PostSchema)
module.exports = Post
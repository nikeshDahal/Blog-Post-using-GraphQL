const mongoose  = require('mongoose')
import User from './User.model'
import Post from './Post.model'
const CommentSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    commentedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    }

})

const Comment = mongoose.model('comment',CommentSchema)
module.exports = Comment
import Post from '../models/Post.model'
import Comment from '../models/Comment.model'
const User ={
    post:async(parent,args,ctx,info)=>{
        return await Post.find({author:parent._id})
    },
    comments:async(parent,args,ctx,info)=>{
        return await Comment.find({commentedBy:parent._id})
    }
  }
  export {
    User as default
  }

import User from '../models/User.model'
import Post from '../models/Post.model';
const Comment = {
    commentedBy:async(parent,args,ctx,info)=>{
        return await User.findOne({_id:parent.commentedBy});
    },
    post:async(parent,args,ctx,info)=>{
        return await Post.findOne({_id:parent.post})
    }
  }

export {Comment as default};


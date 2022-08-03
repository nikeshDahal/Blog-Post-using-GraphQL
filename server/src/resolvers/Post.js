import User from "../models/User.model";
import Comment from "../models/Comment.model";
const Post = {
  author: async (parent, args, ctx, info) => {
    return await User.findOne({_id:parent.author});
  },
  comments:async(parent,args,ctx,info)=>{
    return await Comment.find({post:parent._id})
  }
};
export { Post as default };

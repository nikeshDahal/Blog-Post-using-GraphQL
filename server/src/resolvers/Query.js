import Post from "../models/Post.model";
import User from "../models/User.model";
import Comment from "../models/Comment.model";
import mongoose from "mongoose";
const Query = {
  getAllUsers: async (parent, args, ctx, info) => {
    if (!args.query) {
      return await User.find();
    }
    let ID = mongoose.Types.ObjectId(args.query);
    const users = await User.aggregate(
      [
        {
          $match: { "_id": ID },
        },
      ]);
      console.log(users)
      return users;
  },
  getAllPosts: async (parent, args, ctx, info) => {
    if (!args.query) {
      return await Post.find()
    }
    console.log(args.query.toLocaleLowerCase()); //checking input arguments
    const posts = await Post.aggregate([
      // { $match:{ title: { $search:args.query.toLocaleLowerCase() } }  }
      {
        $match: { title: args.query.toLocaleLowerCase() },
      },
    ]);
    console.log(posts);
    return posts;
  },
  getAllComments(parent, args, ctx, info) {
    if(!args.query){
      return Comment.find() 
    }
  }
};
export { Query as default };

import Post from "../models/Post.model";
import User from "../models/User.model";
import Comment  from "../models/Comment.model";
import { v4 as uuidv4 } from "uuid";
import mongoose from "mongoose";
const Mutation = {
  createUser: async (parent, args, ctx, info) => {
    // const { db } = ctx;
    const { data } = args;
    console.log(data);
    const isEmailTaken = await User.findOne({ email: data.email });
    if (isEmailTaken) {
      throw new Error("email is taken");
    }
    const user = new User({ ...data });
    await user.save();
    return user;
  },
  deleteUser: async (parent, args, { db }, info) => {
    const user = await User.findOneAndDelete({
      _id: args.id,
    });
    if (!user) {
      throw new Error("could not find user");
    }
    console.log(user);
    return user;
    // console.log('delete user =>',user)
    // const userIndex = db.user.findIndex((user) => user.id === args.id);
    // if (userIndex === -1) {
    //   throw new Error("user not found");
    // }
    // const deletedUser = db.user.splice(userIndex, 1);
    // db.post = db.post.filter((post) => {
    //   const match = post.author === args.id;
    //   if (match) {
    //     db.comment = db.comment.filter((comment) => {
    //       return comment.post !== post.id;
    //     });
    //   }
    //   return !match;
    // });
    // db.comment = db.comment.filter((comment) => comment.author !== args.id);
    // return deletedUser[0];
  },
  updateUser: async (parent, args, ctx, info) => {
    //need some modifications .
    const isEmailTaken = await User.findOne({ email: args.data.email });
    if (isEmailTaken) {
      throw new Error("email is taken");
    }
    const user = await User.findOneAndUpdate(
      {
        _id: args.id,
      },
      {
        ...args.data,
      },
      {new:true}   
    );
    if (!user) {
      throw new Error("user not found");
    }
    return user;
    // const { id, data } = args;
    // const { db } = ctx;
    // const user = db.user.find((userItem) => userItem.id === id);
    // if (!user) {
    //   throw new Error("user not found");
    // }

    // if (typeof data.email === "string") {
    //   const isEmailTaken = db.user.some((user) => user.email === data.email);
    //   if (isEmailTaken) {
    //     throw new Error("email already taken");
    //   }
    //   user.email = data.email;
    // }
    // if (typeof data.name === "string") {
    //   user.name = data.name;
    // }
    // if (typeof data.age !== undefined) {
    //   user.age = data.age;
    // }
    // return user;
  },
  createPost: async (parent, args, ctx, info) => {
    const { db, pubsub } = ctx;
    const { data } = args;
    console.log(data.author)
    let ID = mongoose.Types.ObjectId(data.author);
    const isUserExists =await User.findOne({_id:ID})
    if(!isUserExists){
      throw new Error("no user found")
    }
    const isTitleTaken = await Post.findOne({ title: args.data.title });
    if (isTitleTaken) {
      throw new Error("title is taken");
    }
    const post = new Post({ ...data });
    await post.save();
    return post;

  },
  deletePost:async(parent, args, ctx, info) =>{

    const post = await Post.findOneAndDelete({
      _id: args.id,
    });
    if (!post) {
      throw new Error("could not find post");
    }
    console.log(post);
    return post;

    // const postIndex = db.post.findIndex((post) => post.id === args.id);
    // if (postIndex === -1) {
    //   throw new Error("post not found");
    // }
    // const deletedPost = db.post.splice(postIndex, 1); //to delete post
    // console.log(deletedPost[0]);

    // db.comment = db.comment.filter((comment) => {
    //   const match = comment.post === args.id;
    //   return !match;
    // });
    // return deletedPost[0];
  },
  updatePost: async(parent, args, ctx, info) => {

    const isTitleTaken = await Post.findOne({ title: args.data.title });
    if (isTitleTaken) {
      throw new Error("title is taken");
    }
    const post = await Post.findOneAndUpdate(
      {
        _id: args.id,
      },
      {
        ...args.data,
      },
      {new:true}   
    );
    if (!post) {
      throw new Error("post not found");
    }
    return post;
    // const { id, data } = args;
    // const { db } = ctx;
    // const post = db.post.find((postItem) => postItem.id === id);
    // if (!post) {
    //   throw new Error("user not found");
    // }
    // if (typeof data.name === "string") {
    //   post.name = data.name;
    // }
    // if (typeof data.title === "string") {
    //   const isTitleTaken = db.post.some(
    //     (postItem) => postItem.title === data.title
    //   );
    //   if (isTitleTaken) {
    //     throw new Error("title is already taken");
    //   }
    //   post.title = data.title;
    // }
    // if (typeof data.body === "string") {
    //   post.body = data.body;
    // }
    // if (typeof data.published === "boolean") {
    //   post.published = data.published;
    // }

    return post;
  },
  createComment:async(parent, args, ctx, info)=> {
    const {data}=args;
    let ID = mongoose.Types.ObjectId(data.commentedBy);
    const isUserExists =await User.findOne({_id:ID})
    if(!isUserExists){
      throw new Error("no user found")
    }
    let ID2 = mongoose.Types.ObjectId(data.post)
    const isPostExists = await Post.findOne({_id:ID2})
    if(!isPostExists){
      throw new Error('no post found')
    }
    const comment = new Comment({...data});
    await comment.save();
    return comment;
  },
  updateComment: async(parent, args, ctx, info) =>{
    const comment = await Comment.findOneAndUpdate(
      {
        _id:args.id
      },
      {
        ...args.data
      },
      {
        new:true
      }
    );
    if(!comment){
      throw new Error("comment not found");
    }
    return comment
  },

};

export { Mutation as default };

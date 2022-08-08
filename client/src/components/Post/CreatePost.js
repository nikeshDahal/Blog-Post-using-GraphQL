import classes from "../User/CreateUser.module.css";
import { useEffect, useState } from "react";
import  {CREATE_POST_MUTATION} from "../../GraphQL/Mutations/CreatePostMutation"
import { useMutation } from "@apollo/client";
import ListPost from "./ListPost";

const CreatePost = () => {
  const [authorID, setAuthorID] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [published, setPublished] = useState(false);
  const [error, setError] = useState("");
  const [click,setClick] = useState(false);
  const [createPost, { errorfromCreatePostMutation }] =
    useMutation(CREATE_POST_MUTATION);

  const submitButtonHandler = (event) => {
    event.preventDefault();
    console.log("clicked");
    if (
      authorID.trim().length === 0 ||
      title.trim().length === 0 ||
      body.trim().length === 0
    ) {
      setError({
        title: "An Error Occured",
        message: "please enter correct ID,  title and body of post to proceed",
      });
      return;
    }
    createPost({
      variables: {
        author:authorID,
        title:title,
        body:body,
        published:published,
      },
    });
    if (errorfromCreatePostMutation) {
      console.log(errorfromCreatePostMutation);
    }

    setAuthorID("");
    setTitle("");
    setBody("");
    setPublished("");
    setError("");
  };

  const authorIdHandler = (event) => {
    setAuthorID(event.target.value);
    setError("");
  };
  const titleHandler = (event) => {
    setTitle(event.target.value);
    setError("");
  };
  const bodyHandler = (event) => {
    setBody(event.target.value);
    setError("");
  };
  const publishedHandler = (event) => {
    setPublished(true);
    setError("");
  };

  const ListPostButtonHandler =()=>{
    console.log("list all post button fetched")
    setClick(true)
  }

  return (
    <div>
      <div className={classes.cardWrapper}>
        <h3>create post</h3>
        <h5>{error ? error.message : "welcome"}</h5>
        <div className={classes.card}>
          <form onSubmit={submitButtonHandler}>
            <div className={classes.formItems}>
              <label htmlFor="id">Author ID</label>
              <input
                id="ID"
                type="text"
                onChange={authorIdHandler}
                value={authorID}
              />
            </div>
            <div className={classes.formItems}>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                onChange={titleHandler}
                value={title}
              />
            </div>
            <div className={classes.formItems}>
              <label htmlFor="body">Body</label>
              <input
                id="Body"
                type="text"
                onChange={bodyHandler}
                value={body}
              />
            </div>
            <div className={classes.formItems}>
              <label htmlFor="published">published</label>
              <input
                id="published"
                type="checkbox"
                onChange={publishedHandler}
                value={published}
              />
            </div>
            <button type="submit">Add Post</button>
          </form>
        </div>
      </div>
      <div>
      <button className={classes.list_user_button} onClick={ListPostButtonHandler}> List post</button>
    </div>
    <div>{click?<ListPost/>:'want to see Post-List ??'}</div>
    </div>
  );
};
export default CreatePost;

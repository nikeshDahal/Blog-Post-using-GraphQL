import React from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_POSTS } from "../../GraphQL/Query/QueryPosts";
import { useEffect, useState } from "react";

const ListPost = () => {
  const { error, loading, data } = useQuery(LOAD_POSTS);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (data) {
      console.log(data);
      setPosts(data.getAllPosts);
      console.log("posts", data.getAllPosts);
    }
  }, [data]);
  return (
    <>
      <h2>list of Posts done by users</h2>
      <ol>
        <span> Details of Posts:</span>
        {posts.map((post) => {
          return (
            <div>
              <li key={post.id}>
                {`Post ID:  ${post._id}`}
                <br />
                {`title:  ${post.title}`}
                <br />
                {`body:  ${post.body}`}
                <br />
                {`published:  ${post.published}`}
                <br/>
                {`Posted by :`}
                <ul>
                {`name:  ${post.author.name}`}
                <br/>
                {`email :${post.author.email}`}
                <br/>
                {`age: ${post.author.age}`}
                </ul>
              </li>
              <br />
              
              <hr />
            </div>
          );
        })}
      </ol>
    </>
  );
};
export default ListPost;

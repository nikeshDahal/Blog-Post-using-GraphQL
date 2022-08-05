import React from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../../GraphQL/Query";
import { useEffect, useState } from "react";

const ListUser = () => {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (data) {
      console.log(data);
      setUsers(data.getAllUsers);
      console.log("users", data.getAllUsers);
    }
  }, [data]);
  return (
    <div>
      <h3>list of users are</h3>
      <ul>
        <span>Details of users :</span>
        {users.map((user) => {
          return (
            <div>
              <li key={user._id}>
                {` name : ${user.name} , email : ${user.email} , age : ${user.age}`}
              </li>
            </div>
          );
        })}
        <span>Posts done by users:</span>
        {users.map((user) => {
          return (
            <div>
              <li key={user._id}>
                {`title:${user.post.map((post) => `${post.title} posted by : ${post.author.name} ,`)}`}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default ListUser;

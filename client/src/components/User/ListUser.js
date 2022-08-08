import React from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../../GraphQL/Query/QueryUsers";
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
      <ol>
        <span>Details of users :</span>
        {users.map((user) => {
          return (
            <div>
              <li key={user._id}>
                {` ID:${user._id} `}
                <br />
                {`name : ${user.name} `}
                <br />
                {`email : ${user.email} `}
                <br />
                {`age : ${user.age}`}
                <br />
                {`Posts done by ${user.name} are :-`}
                <br />
                <ol>
                {
                  user.post.map((postItem) => {
                    if (postItem.author.name === user.name) {
                      return (
                        <div>
                          <li>
                          {`title : ${postItem.title}`}
                          <br/>
                          {`body : ${postItem.body}`}
                          <br/>
                          </li> 
                        </div>
                          
                      );
                    }
                  })
                }
                </ol>
                <hr />
              </li>
            </div>
          );
        })}
      </ol>
    </div>
  );
};
export default ListUser;

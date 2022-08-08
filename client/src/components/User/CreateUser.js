import ListUser from "./ListUser";
import classes from "./CreateUser.module.css";
import { useEffect, useState } from "react";
import { CREATE_USER_MUTATION} from "../../GraphQL/Mutations/CreateUserMutation";
import { useMutation } from "@apollo/client";
const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");
  const [click, setClick] = useState(false);
  const [createUser, { errorfromCreateUserMutation }] =
    useMutation(CREATE_USER_MUTATION);
  const submitButtonHandler = (event) => {
    event.preventDefault();
    console.log("clicked");
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "An Error Occured",
        message: "please enter username and age to proceed",
      });
      return;
    }

    createUser({
      variables: {
        name: name,
        email: email,
        age: age,
      },
    });
    if (errorfromCreateUserMutation) {
      console.log(errorfromCreateUserMutation);
    }
    setName("");
    setEmail("");
    setAge("");
  };
  const ListUserButtonHandler = () => {
    console.log("clicked");
    setClick(true);
  };

  const userNameHandler = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
    setError("");
  };
  const userEmailHandler = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
    setError("");
  };
  const userAgeHandler = (event) => {
    console.log(event.target.value);
    setAge(event.target.value);
    setError("");
  };

  return (
    <div>
      <div className={classes.cardWrapper}>
        <h3>create user</h3>
        <h5>{error ? error.message : "welcome"}</h5>
        <div className={classes.card}>
          <form onSubmit={submitButtonHandler}>
            <div className={classes.formItems}>
              <label htmlFor="username">Name</label>
              <input
                id="username"
                type="text"
                onChange={userNameHandler}
                value={name}
              />
            </div>
            <div className={classes.formItems}>
              <label htmlFor="username">Email</label>
              <input
                id="Email"
                type="email"
                onChange={userEmailHandler}
                value={email}
              />
            </div>
            <div className={classes.formItems}>
              <label htmlFor="age">Age</label>
              <input
                id="age"
                type="number"
                onChange={userAgeHandler}
                value={age}
              />
            </div>
            <button type="submit">Add User</button>
          </form>
        </div>
      </div>
      <div>
        <button className={classes.list_user_button} onClick={ListUserButtonHandler}> List User</button>
      </div>
      <div>{click?<ListUser/>:'want to see user-List ??'}</div>
    </div>
  );
};
export default CreateUser;

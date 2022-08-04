import classes from "./CreateUser.module.css";
import { useState } from "react";
const CreateUser = ({title,action}) => {
    const[enteredName,setEnteredName]=useState('')
    const[enteredEmail,setEnteredEmail]=useState('')
    const[enteredAge,setEnteredAge]=useState('')
    const [error,setError] = useState('')
  const submitButtonHandler = (event) => {
    event.preventDefault();
    console.log("clicked");
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
            title:"An Error Occured",
            message:"please enter username and age to proceed"
          })
          return;
    }
    console.log(
        {
            name:enteredName,
            email:enteredEmail,
            age:enteredAge
        })
    setEnteredName('');
    setEnteredEmail('');
    setEnteredAge('');
  };

  const userNameHandler = (event) => {
    console.log(event.target.value)
    setEnteredName(event.target.value);
    setError('')
  };
  const userEmailHandler = (event) =>{
    console.log(event.target.value)
    setEnteredEmail(event.target.value);
    setError('')

  }
  const userAgeHandler = (event) => {
    console.log(event.target.value);
    setEnteredAge(event.target.value);
    setError('')
    console.log("title",title)
  };

  return (
    <div className={classes.cardWrapper}>
      <h3 >create user</h3>
      <h5>{error ? error.message:"welcome"}</h5>
      <div className={classes.card}>
        <form onSubmit={submitButtonHandler}>
        <div className={classes.formItems}>
        <label htmlFor="username">Name</label>
        <input
          id="username"
          type="text"
          onChange={userNameHandler}
           value={enteredName}
        />
        </div>
        <div className={classes.formItems}>
          <label htmlFor="username">Email</label>
          <input
            id="Email"
            type="email"
            onChange={userEmailHandler}
             value={enteredEmail}
          />
        </div>
        <div className={classes.formItems}>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            onChange={userAgeHandler}
             value={enteredAge}
          />
        </div>
          <button type="submit">Add User</button>
        </form>
      </div>
    </div>
  );
};
export default CreateUser;

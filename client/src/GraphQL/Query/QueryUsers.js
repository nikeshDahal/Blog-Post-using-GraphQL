import { gql } from "@apollo/client";
export const LOAD_USERS =gql`
query{
  getAllUsers{
    _id
    name
    age
    email
    post{
      _id
      title
      body
      author{
        _id
        name
        email
        age
      }
    }
    comments{
      _id
      text
    }
  }
}

`
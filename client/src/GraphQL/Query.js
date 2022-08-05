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
      author{
        _id
        name
      }
    }
    comments{
      _id
      text
    }
  }
}

`
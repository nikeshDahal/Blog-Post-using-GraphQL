import { gql } from "@apollo/client";
export const LOAD_POSTS =gql`
query{
  getAllPosts{
    _id
    title
    body
    published
    author{
      _id
      name
      email
      age
    }
    comments{
      _id
      text 
      commentedBy{
        _id
        name
        
      }
      
    }
  
  }
}
`
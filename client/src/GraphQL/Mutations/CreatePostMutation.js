import { gql } from "@apollo/client";

export const CREATE_POST_MUTATION = gql`
  mutation createPost(
    $author: ID!
    $title: String!
    $body: String!
    $published: Boolean!
  ) {
    createPost(
      data: {
        author: $author
        title: $title
        body: $body
        published: $published
      }
    ) {
      _id
      title
      body
      published
      author {
        _id
        name
        email
        age
      }
    }
  }
`;

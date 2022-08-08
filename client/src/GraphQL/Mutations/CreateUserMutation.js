import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createUser($name: String!, $email: String!, $age: Int!) {
    createUser(data: { name: $name, email: $email, age: $age }) {
      _id
      name
      email
      age
      post {
        _id
        title
      }
    }
  }
`;

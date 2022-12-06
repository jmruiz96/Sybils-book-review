import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

// export const ADD_ADVENTURES = gql`
// mutation addAdventures($roomNames: [String]) {
//   addAdventures(roomNames: $roomNames) {
//     _id
//     adventures {
//       _id
//       roomNames
//     }
//   }
// }
// `;

// export const REMOVE_ADVENTURES = gql`
// mutation removeAdventures($adventureId: ID) {
//   removeAdventures(adventureId: $adventureId) {
//     _id
//     adventures {
//       _id
//       roomNames
//     }
//     email
//     name
//     password
//   }
// }
// `
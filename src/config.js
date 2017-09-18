//config.js
import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client';

// Create the apollo client
const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:4000/graphql',
    transportBatching: true,
    mode: 'cors'
  }),
  dataIdFromObject: r => r.id,
});

// create an instance of PolymerApollo
// created instance is a polymer behavior

// GraphQL query
export const postsQuery = gql`
query {
  games(gamename: "Sleuth") {
    gamename
    year
    gamePublishers {
      publishername
      country
      searchname
    }
    gameAuthors {
      authorid
      authorLastName
      authorGivName
      authorgames {
        gamename
      }
    }
  }
}`;

export const upvoteMutation = gql`
  mutation upvotePost($postId: Int!) {
    upvotePost(postId: $postId) {
      id
      votes
    }
  }
`;

export default apolloClient

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost/yourwebsite/graphql",
  }),
  cache: new InMemoryCache(),
});

export default client;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './helpers/reportWebVitals';
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
// 2
const httpLink = createHttpLink({
  uri: 'https://shoplink-graph.planoly.com/v1/graphql'
});

// 3
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your Page, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);

import './App.css';
import {ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import CPU from './components/CPU';

function App() {


  // Apollo Setup
  const client = new ApolloClient({
    uri:'http://localhost:4000/graphql',
    cache: new InMemoryCache()

  })

  return (
    <ApolloProvider client={client}>


    <div className='dashboard-container'>
    <CPU/>
    <CPU/>
    <CPU/>
    <CPU/>
    <CPU/>
    </div>
    </ApolloProvider>
  );
}

export default App;


import './App.css';
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from "react-router-dom";
import CreateUser from './components/User/CreateUser'
import CreatePost from './components/Post/CreatePost';
import Sidebar from './components/Sidebar/Sidebar';
import ListUser from './components/User/ListUser';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import {onError} from "@apollo/client/link/error"

const errorLink = onError(({graphqlErrors,networkError})=>{
  if(graphqlErrors){
    graphqlErrors.map(({message,location,path})=>{
      alert(`Graphql error ${message}`)
    });
  }
})
const link = from([
  errorLink,
  new HttpLink({uri:"http://localhost:4000"}),
]);

const client = new ApolloClient({
  cache:new InMemoryCache(),
  link:link,
})

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
    <Navbar/>
    <Routes>
    <Route path="/User" element={<CreateUser/> } />
    <Route path='/Post' element={<CreatePost/>}/>
  </Routes> 
  </div> 
    </ApolloProvider>
  );

}

export default App;

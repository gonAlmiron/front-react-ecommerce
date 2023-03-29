import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NavBar from './Layout/NavBar';
import Products from './components/Products/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatDos from './components/Chat/Chat';
import socketIO from 'socket.io-client';
import Home from './components/Home/Home';
const socket = socketIO.connect('http://localhost:3002', {transports: ['websocket']});


const App = () => {

  return (
    <BrowserRouter>

      <NavBar/>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/login' element={ <Login/>} />
        <Route path='/signup' element={ <SignUp/>} />
        <Route path='/products' element={ <Products/>} />
        <Route path='/chat' element={ <ChatDos socket={socket}/>} />
      </Routes>
     
      </BrowserRouter>

  );
}

export default App;

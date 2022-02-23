import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//component
import Header from './component/header/Header';
import Home from './component/home/Home';
import Cart from './component/cart/Cart';
import Login from './component/login/Login';
import  {TemplateProvider}  from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider'
import DetailView from './component/itemDetail/DetailView'


function App() {
  return (
 
   <ContextProvider>
    <BrowserRouter>
      <Header/>
       <Switch>
           <Route exact path='/' component={Home}/>
           <Route exact path='/cart' component={Cart}/>
           <Route exact path='/login' component={Login}/>
           <Route exact path='/saman/:id' component={DetailView}/>
       </Switch>
    </BrowserRouter>
    </ContextProvider>
    
  );
}

export default App;

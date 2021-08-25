import React, { useEffect } from 'react';
import Header from './components/header/Header';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Login from './pages/Login/Login';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home';
import { UseStateValue } from './stateprovider/Stateprovider';
import { auth } from './firebase';

const App = () => {
  const [{ basket },dispatch] = UseStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser,
        });
      }else{
        dispatch({
          type:"SET_USER",
          user:null,
        });
      }
    })
    return () => {
      unsubscribe();
    };
  }, [dispatch])
  return (
    <Router>
      <Switch>
      <Route exact path="/">
          <Header/>
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/checkout">
          <Header/>
          <Checkout/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

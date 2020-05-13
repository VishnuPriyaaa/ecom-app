import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage';
import {Switch,Route} from 'react-router-dom';
import ShopPage from './pages/shoppage/shoppage';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path ="/" component={HomePage}/>
        <Route path = "/shop" component={ShopPage} />
        <Route path = "/signin" component={SignInAndSignUpPage}/>
      </Switch>
      
    </div>
  );
}

export default App;

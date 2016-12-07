import React from 'react';
import { Provider } from 'react-redux';
import { Redirect, Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import HomePage from './homepage';

export default function Root({store}){
  function redirectIfLoggedIn(_, replace){
    if( store.getState().session.currentUser ){
      replace('/home');
    }
  }

  function redirectIfLoggedOut(_, replace){
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/log');
    }
  }



  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>

        <Route path="/" component={App} >
          <Route path="/home" component={HomePage} onEnter={redirectIfLoggedOut} />

          <Route path="/log" component={ SessionFormContainer } onEnter={redirectIfLoggedIn} />
        </Route>
        <Redirect from="/" to="/home"/> 
      </Router>
    </Provider>
  );
}


// window.signup({firstname: "harry", lastname: "potter", email: "harrypotter", password: "harrypotter", gender: "male", birthday: "1991"})(store.dispatch)

// window.logout()(store.dispatch)

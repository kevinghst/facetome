import React from 'react';
import { Provider } from 'react-redux';
import { Redirect, Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import HomePageContainer from './homepage/homepage_container';

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
        <Redirect from="/" to="/home"/>

        <Route path="/" component={App} >
          <Route path="/home" component={ HomePageContainer } onEnter={redirectIfLoggedOut} />

          <Route path="/log" component={ SessionFormContainer } onEnter={redirectIfLoggedIn} />
        </Route>
      </Router>
    </Provider>
  );
}


// window.signup({firstname: "harry", lastname: "potter", email: "harrypotter", password: "harrypotter", gender: "male", birthday: "1991"})(store.dispatch)

// window.logout()(store.dispatch)

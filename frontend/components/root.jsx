import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';

export default function Root({store}){
  function redirectIfLoggedIn(_, replace){
    if( store.getState().session.currentUser ){
      replace('/');
    }
  }

  // function redirectIfLoggedOut(_, replace){
  //   if( store.getState().session.currentUser === null ){
  //     replace('/log');
  //   }
  // }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>

        <Route path="/" component={App} >
          <Route path="/log" component={ SessionFormContainer } onEnter={redirectIfLoggedIn} />
        </Route>
      </Router>
    </Provider>
  );
}


// window.signup({firstname: "harry", lastname: "potter", email: "harrypotter", password: "harrypotter", gender: "male", birthday: "1991"})(store.dispatch)

// window.signout()(store.dispatch)

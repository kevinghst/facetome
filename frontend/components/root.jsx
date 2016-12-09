import React from 'react';
import { Provider } from 'react-redux';
import { Redirect, Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import HomePageContainer from './homepage/homepage_container';
import UserPageContainer from './userpage/userpage_container';
import UserProfileContainer from './userprofile/userprofile_container';

export default function Root({store}){
  function redirectIfLoggedIn(_, replace){
    if( store.getState().session.currentUser ){
      replace('/home');
    }
  }

  function redirectIfLoggedOut(_, replace){
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  }



  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Redirect from="/" to="/home"/>

        <Route path="/" component={App} >
          <Route path="/home" component={ HomePageContainer } onEnter={redirectIfLoggedOut} >
            <Route path="/home/:email" component={ UserPageContainer } onEnter={redirectIfLoggedOut} >
              <Route path="/home/:email/about" component={ UserProfileContainer } onEnter={redirectIfLoggedOut} />
            </Route>
          </Route>
          <Route path="/login" component={ SessionFormContainer } onEnter={redirectIfLoggedIn} />
        </Route>

      </Router>
    </Provider>
  );
}


// window.signup({firstname: "harry", lastname: "potter", email: "harrypotter", password: "harrypotter", gender: "male", birthday: "1991"})(store.dispatch)

// window.logout()(store.dispatch)

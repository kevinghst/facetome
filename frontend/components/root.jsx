import React from 'react';
import { Provider } from 'react-redux';
import { Redirect, Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import HomePageContainer from './homepage/homepage_container';
import UserPageContainer from './userpage/userpage_container';
import UserProfileContainer from './userprofile/userprofile_container';
import ImageUploadContainer from './imageupload/image_upload_container';
import FriendsContainer from './friends/friends_container';
import NewsFeed from './newsfeed/newsfeed_container';
import Wall from './wall/wall_container';

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
            <IndexRoute component={NewsFeed}/>
            <Route path="/home/:username" component={ UserPageContainer } onEnter={redirectIfLoggedOut} >
              <IndexRoute component={Wall}/>
              <Route path="/home/:username/about" component={ UserProfileContainer } onEnter={redirectIfLoggedOut} />
              <Route path="/home/:username/friends" component={ FriendsContainer } onEnter={redirectIfLoggedOut} />
            </Route>
          </Route>
          <Route path="/login" component={ SessionFormContainer } onEnter={redirectIfLoggedIn} />
        </Route>

      </Router>
    </Provider>
  );
}


// window.signup({firstname: "harry", lastname: "potter", username: "harrypotter", password: "harrypotter", gender: "male", birthday: "1991"})(store.dispatch)

// window.logout()(store.dispatch)

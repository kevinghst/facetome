
<Route path="/log" component={AuthContainer}>

<Route path="/" component={HomeContainer}>
  <Index Route component={PostsContainer}>
  <"Route path="/user" component={UserContainer}>
    <Index Route component={UserPostsContainer}>
    <Route path ="/user/about" component={ProfileComponent}
    <Route path ="/user/friends" component={FriendsComponent}




Login Logic
{SessionForm} => signup(user) => APIutil.signup(user) => UserControllerCreate => receiveCurrentUser

Profile Creation Logic
{UserProfile} => createprofile(profile) => APIutil.create(profile) => ProfileControllerCreate => fetchCurrentProfile

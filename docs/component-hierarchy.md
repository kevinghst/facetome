# Component Hierarchy

## Authform Container
* AuthForm

## HomeContainer X
* Home X
* PostsContainer (Route Index Child) X

## UserContainer X
* User X
* UserPostsContainer (Route Index Child) X
* SelectedFriends X
* ProfileInfo X

## PostsContainer X
* Posts X
* PostItem X
* PostForm X

## UserPostsContainer
* UserPosts
* UserPostItem
* PostForm
* SelectedFriends

## UserFriendsContainer X
* UserFriends X

## UserProfile Container
* UserProfile

## Routes:

| Path        | Component         
| ------------- |:-------------:|
| "/log"        | AuthFormContainer |
| "/"     | HomeContainer      |   
| "/ Index Route" | PostsContainer      |    
| "/user"   | UserContainer |
| "/user" indexRoute    | UserPostsContainer      |   
| "/user/friends" | UserFriendsContainer     |    
| "/user/about" | UserProfileContainer     |    

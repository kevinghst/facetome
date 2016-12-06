# Component Hierarchy

## Authform Container
* AuthForm

## HomeContainer
* Home
* PostsContainer (Route Index Child)

## UserContainer
* User
* UserPostsContainer (Route Index Child)
* SelectedFriends
* ProfileInfo

## PostsContainer
* Posts
* PostItem
* PostForm

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

# Component Hierarchy

## Authform Container
* AuthForm

## HomeContainer
* Home
* Posts (Route Index Child)

## UserContainer
* User
* UserPosts (Route Index Child)

## PostsContainer
* Posts
* PostItem
* SelectedFriends

## UserPostsContainer
* UserPosts
* UserPostItem

## UserFriendsContainer
* UserFriends

## Routes:

| Path        | Component         
| ------------- |:-------------:|
| "/log"        | AuthFormContainer |
| "/home"     | HomeContainer      |   
| "/home Index Route" | PostsContainer      |    
| "/home/user"   | UserContainer |
| "/home/user" indexRoute    | UserPostsContainer      |   
| "/home/user/friends" | UserFriendsContainer     |    

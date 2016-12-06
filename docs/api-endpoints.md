# API Endpoints

## HTML API

###Root
* GET / - loads React web app


## JSON API

### Users
* POST /api/users
* GET /api/user/:id

### Sessions
* POST /api/session
* DELETE /api/session

### Profiles
* POST /api/profiles
* GET /api/profiles/:id
* PATCH /api/profiles/:id

### Friends
* POST /api/user/:id/friends
* GET /api/user/:id/friends
* DELETE /api/friend/:id

### Posts
* POST /api/user/:id/posts
* GET /api/user/:id/posts
* GET /api/posts
* DELETE /api/post/:id

### Comments
* POST /api/post/:id/comments
* GET /api/post/:id/comments
* DELETE /api/comment/:id

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
* DELETE /api/user/:id/friend/:id

### Posts
####(not sure I'll need all of these, will refractor once I get to it later)
* POST /api/user/:id/posts
* GET /api/user/:id/posts
* GET /api/user/:id/post/:id
* POST /api/posts
* GET /api/post/:id
* DELETE /api/user/:id/post/:id
* DELETE /api/post/:id

### Comments
####(not sure I'll need all of these, will refractor once I get to it later)
* POST /api/post/:id/comments
* GET /api/post/:id/comments
* GET /api/post/:id/comment/:id
* DELETE /api/post/:id/comment/:id
* DELETE /api/comment/:id

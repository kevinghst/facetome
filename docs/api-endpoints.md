# API Endpoints

## HTML API

###Root
* GET / - loads React web app


## JSON API

### Users
* POST /api/users
* GET /api/users/:id

### Sessions
* POST /api/session
* DELETE /api/session

### Friends
* POST /api/users/:id/friends
* GET /api/users/:id/friends
* DELETE /api/friend/:id

### Posts
* POST /api/users/:id/posts
* GET /api/users/:id/posts
* GET /api/posts
* DELETE /api/post/:id
* GET /api/posts

### Comments
* POST /api/post/:id/comments
* GET /api/post/:id/comments
* DELETE /api/comment/:id

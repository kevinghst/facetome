# Schema Information

## users

| column name        | data type          | details |
| ------------- |:-------------:| -----:|
| id      | integer | not null, primary key|
| email     | string     |   not null, indexed, unique |
| firstname | string     |    not null |
| lastname     | string | not null |
| birthday    | string    |   not null |
| gender | string     |    not null |
| password_digest | string     |    not null |
| session_token | string     |    not null, indexed, unique |
| hometown | string     |    |
| occupation | string     |    |
| photo    | string      |    |


## friendships
| column name        | data type          | details |
| ------------- |:-------------:| -----:|
| id      | integer | not null, primary key|
| userId   | integer     |   not null, foreign key (reference users) |
| friendId | integer     |    not null, foreign key (reference users) |


## posts
| column name        | data type          | details |
| ------------- |:-------------:| -----:|
| id      | integer | not null, primary key|
| body   | text | not null |
| image    | string      |    |
| authorId | integer     |    not null, indexed |


## comments
| column name        | data type          | details |
| ------------- |:-------------:| -----:|
| id      | integer | not null, primary key|
| body   | string | not null |
| postId | integer     |    not null, indexed |
| authorId | integer     |    not null, indexed |

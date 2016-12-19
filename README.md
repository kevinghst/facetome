# FaceTome

Facetome is a web application for social networking. It was inspired by FaceBook and built using Ruby on Rails for backend and React.js for front-end.

Explore the website in full at https://facetome.herokuapp.com/#/login

### Login Page:
![alt text](https://github.com/kevinghst/facetome/blob/master/docs/production%20images/login.jpg)

### User Wall:
![alt text](https://github.com/kevinghst/facetome/blob/master/docs/production%20images/userwall.jpg)

### User Friends Page:
![alt text](https://github.com/kevinghst/facetome/blob/master/docs/production%20images/friendsPage.jpg)

### Technical Details:
#### Friendship requests


To enable users to request and accept friendships, I created two tables on Rails back-end - a requests table in addition to a friendship table.


Upon signing in to the homepage, the logged in user receives a list of users that have sent him a friend request as props through the homepage container. The profile picture thumbs and name links of these users are displayed in a list, which can be accessed by clicking the friendship icon on the top blue navigation bar.
Upon entering another user's wall, the logged in user receives both the list of users whom he had sent request to, as well as the list of users from which he had received a request. By checking whether the particular user which the logged in member is visiting is contained in one of those two groups, I used conditional logic to display either a label that says they are already friends, a button for friendship request, a label saying that the request had been sent, or a button for accepting friendship.

#### Friendship Icon


When the logged in user has any friendship requests coming from other users, a red badge with the number of such requests is displayed over the friendship icon on the blue navigation bar on the top of the user's homepage, and upon clicking it, the user can then see the list of the requestees' profile picture thumbs and name links.
In order to do this, I included a displayRequests key in the state of the homepage React component, which is a boolean variable with only True or False as its value. The list of friends' profile names and namelinks is only displayed if the displayRequests condition is false.


The displayRequests value is set to false by default, thus upon entering the page no such list is displayed. There is an onClick property within the friendship logo button that switches the current displayRequests value to its opposite. In this way, whenever the user clicks the friendship logo, the displayRequests is changed in the state, which triggers re-rendering of the component, as well as the showing or the hiding of the requestees' information.



### Features
* Sign up/in with username
* Upload/edit user profile, including profile photo
* Create/delete posts - photo optional
* Create/delete comments
* Display of newsfeed on user's homepage
* Display of posts directly related to user on his wall
* Creation of new friendships

### To-Do:
- [ ] Search for users
- [ ] Infinite scroll
- [ ] Likes for posts and comments
- [ ] Display of user's friends and profile on wall
- [ ] Chat
- [ ] Display of commercials

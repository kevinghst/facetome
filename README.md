# FaceTome

Facetome is a web application for social networking. It was inspired by FaceBook and built using Ruby on Rails for backend and React.js for front-end.

Explore the website in full at https://www.facetome.site


### Features
* Sign up/in with username
* Upload/edit user profile
* Create/delete/edit posts
* Create/delete comments
* Newsfeed and wall posts display
* Creation of friendships
* Live Chat
* Search
* Sticky Advertisement

### Preview
![alt text](https://github.com/kevinghst/facetome/blob/master/docs/production%20images/login.jpg)

---------------------------------------------------------------------------------------------------


![alt text](https://github.com/kevinghst/facetome/blob/master/docs/production%20images/wallpic.png)

---------------------------------------------------------------------------------------------------


![alt text](https://github.com/kevinghst/facetome/blob/master/docs/production%20images/chat.png)



### Technical Details:
#### Friendship requests

A two-step friendship creation process is instantiated using the Request and Friendship models on Rails backend.

Upon clicking the friendship request button, an Ajax request gets transmitted to the Request Controller on Rails and subsequently a new Request model object between the two users gets created. As a user logs into his homepage, the ComponentDidMount lifecycle method on React Component sends an Ajax request that fetch a list of all the users that have sent the current user a request, as well as a list of all the users whom the current user has sent request to from Rails and store them in the Redux store. As the current user enters another user's page, the name of the visited user is checked for inclusion in the two requests lists in the Redux store, and front-end conditional logic is used to display the current friendship status between the current user and the visited user.

Upon accepting another user's friendship request, first a DELETE request is sent to Rails to destroy the Request model object, before a new Friendship model object between the two users gets created.

#### Live Chat

Message and Conversation Models are set up on Rails to support the live chat functionality. Messages are created with sender_id and sendee_id attributes, and have belongs_to association with Conversation. A Conversation model object gets created between two users at the same time as the creation of their Friendship. As the current user logs into his homepage, a list of all conversations with his participation is fetched from Rails, and displayed under the Chat bar. Upon clicking on a conversation, the messanger bar pops out and displays all of the messages associated with the conversation in chronological order, as well as an input text box that is responsible for the creation of new message between the users.
Pusher is used to make chatting live.

#### Friendship Icon

When the current user has existing friendship requests from other users, a red badge with the number of requests is displayed over the friendship icon on on the top of the user's homepage. Upon clicking the icon, the user can then see a list of the requestees' profile pictures and name links.

To engineer this, a displayRequests key is placed in the state of the homepage React Component, with its value being a boolean variable and automatically set to false. The list of friends' profile names and namelinks is only displayed if the displayRequests condition is true. There is an onClick property on the friendship logo button that switches the current displayRequests value to its opposite. In this way, whenever the user clicks the friendship logo, the displayRequests is changed in the state, which triggers re-rendering of the component, and shows or hides the list of requesters depending on the value of the displayRequests key at that given time.

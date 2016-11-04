# Pix

[Live Link][pix]

[pix]: http://www.projectpix.io/

![logo]
[logo]: ./docs/images/pix_logo.png

Pix is a web application inspired by Instagram, which allows users to upload images, comment and like photos, and follow each other.

It is built upon Ruby on Rails backend, PostgreSQL database, and React & Redux architectural frontend framework.

## Features && Implementation

### Static-Page App
Pix is a single-page application.
From login to rest of the features that Pix has to offer, a user is able to experience everything without moving from the root index.

![login-page]
[login-page]: ./docs/images/login_page.png

This was made possible by React Router which renders different components based on url changes.

![logged-in-page]
[logged-in-page]: ./docs/images/logged_in_page.png

### Menu
`Menu` allows users to navigate through the application.
Each item on the menu triggers location changes.

And based on these changes, `Stream` populates itself with appropriate `Frames`.

![menu1]
[menu1]: ./docs/images/menu1.png

Menu has its own rendering logic.

Making use of React Component's state-render relationship,
Menu displays a new set of options when the gear-button is clicked.

![menu2]
[menu2]: ./docs/images/menu2.png

### Stream
`Stream` is a component that listens to location changes in `componentDidMount()` and `componentWillReceiveProps(nextProps)`.

When changes are detected, Stream dispatches `requestImages` action.

Dispatched actions go through the Redux cycle which involves middleware (for ajax requests) and reducers (for store mutation).

![stream]
[stream]: ./docs/images/stream.png

After a successful image request, the store contains an appropriate set of `image objects`.
An image-object's attributes include user information, comments, and likes.

## Frame

Frame is the most compact of components in Pix.

A frame contains:
 * DeleteButton
  * Confirmation  
 * Like / Unlike
 * CommentSection
  * Deletebutton
    * Confirmation
 * CommentSubmit

 ![frame]
 [frame]: ./docs/images/frame.png

### DeleteButton

When an image-object is passed down to a frame, DeleteButton figures out whether the current user is also the one who submitted the image. If it is the case, DeleteButton allows the user to have the option of deleting the frame.

When the button is clicked, Confirmation Component is rendered, prompting if the user is sure about his or her action. When confirmed, DeleteButton dispatches `deleteThis` action.

From `Image Middleware`, an Ajax request is made to delete the requested image. Associated `Likes` and `Comments` are automatically deleted with the image at the back-end level. Then, in `Image Reducer`, the requested image is eliminated from the store, making it possible for the user to see that the image has been successfully deleted.

### Like / Unlike

As `Frame` passes down the users who liked its photo, `Like` stores these users into its state. If the current user is included in the state, Like generates a `Like button` and an `Unlike button` otherwise.

When each of these buttons is clicked, `Like` dispatches `processLike` action.

### CommentSection

When `CommentSection` mounts, the component receives `comments` from Frame that belongs to the `image`. These comments are stored in an array as a state.

Each comment is rendered (top-to-bottom / from latest to oldest) based on their created date . Like `Frame`, each comment comes with a `DeleteButton`.

### CommentSubmit

`CommentSubmit` belongs directly to `Frame`, not `CommentSection`.
This is to prevent `actions` and `props` from getting too deep within the project. Also, from a developer's point of view, it made sense for users to be able to submit their comments indifferent to CommentSection's `state` (separation of concerns).

Due to its structure, comment submission logic had to be placed in `Frame`.

Frame has a state `commentBody` which can be overwritten by its `write()` method.

When a comment is submitted, Frame dispatches `postComment` action and the new comment goes through the Redux cycle, reaching back to Frame's props. This `newProps` is then passed down to `CommentSection`, updating its state as described above.

## User Search
![search]
[search]: ./docs/images/search.png

`UserSearch` allows the user to search other users. When the `input` changes, `UserSearch` auto completes the `input` and generates a list of closest matches below its input area by dispatching `requestUsers` action.

## Profile, UserBio, and Follow

Whenever a user's name is clicked, `hashHistory` or `Link` triggers an url change which leads to the user `profile` page.

![profile]
[profile]: ./docs/images/profile.png

Profile page includes, the user's name, number of followers, number of the people whom this user follows, Follow/Unfollow button.

Similar to `Like`, Follow/Unfollow buttons dispatch `requestFollow` when they are clicked.

## Infinite Scroll

Last notable feature of Pix is Stream's `Infinite Scroll`. React's Infinite Scroll allows `Stream` to
request images in increments based on the user's scrolling behaviors.

![infinite]
[infinite]: ./docs/images/infinite.png

This allows the components to load quickly even when the Stream is supposed to be filled with thousands of photos.  

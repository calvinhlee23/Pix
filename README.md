# Pix

[Live Link][pix]

[pix]: http://www.projectpix.io/

![logo]
[logo]: ./docs/pix_logo.png

Pix is a web application inspired by Instagram, which allows users to upload images, comment and like photos, and follow each other.

It is built upon Ruby on Rails backend, PostgreSQL database, and React & Redux architectural frontend framework.

## Features && Implementation

### Static-Page App
Pix is a single-page application. From log-in to fun stuff that Pix has to offer,
a user is able to experience everything on a root page.

![login-page]
[login-page]: ./docs/login_page.png

This was made possible with React router which renders different components based on url changes.

![logged-in-page]
[logged-in-page]: ./docs/logged_in_page.png

### Menu
Menu is the a key component of Pix which allows users to navigate through the application.
Each item on the menu triggers location change on the browser. And based on these changes, Stream populates itself with different types of Frames.

![menu1]
[menu1]: ./docs/menu1.png

Menu has its own rendering logic. Making use of React Component's state-render relationship,
Menu displays a new set of options when the gear-button is clicked.

![menu2]
[menu2]: ./docs/menu2.png

### Stream
Stream is a component that listens to location path changes through React's componentDidMount() and componentWillReceiveProps(nextProps).

When changes are detected, Stream dispatches requestImages-action.

Dispatched actions go through the Redux cycle which involves middlewares (for ajax requests) and reducers (for store mutation).

![stream]
[stream]: ./docs/stream.png

After requestImages, the store now contains appropriate "image objects".
And based on these objects, Stream now generates a "stream" of Frame components.

An image-object has its user information, comments, and likes.

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
 [frame]: ./docs/frame.png

### DeleteButton

When an image-object is passed down to a frame from the stream, the respective DeleteButton
detects whether the current user is also the one who submitted the image. If it is the case,
DeleteButton gives the user an option to delete the frame. When the button is clicked. Confirmation Component is rendered, prompting if the user is sure about the such a behavior.

When confirmed, DeleteButton dispatches DeleteThis action. In the image middleware, an Ajax request is made to delete the requested image. Associated likes, and comments are automatically deleted with the image at the backend level. Then, in image reducer, the requested image is eliminated from the store, making it possible for the user to see that the image has been successfully deleted.

### Like / Unlike

A Frame passes down an array of users who liked its photo. Then, Like component stores this information in its state. If the current user is included in its state, Like generates a Like button. Unlike button is generated otherwise. When each of these buttons is clicked, Like dispatches processLike action.

### CommentSection

CommentSection component receives all the comments from Frame. These comments are stored in an array as a state of the component. Each comment is rendered based on their created date (top-to-bottom / from latest to oldest). Also, each comment comes with a DeleteButton that behaves very similarly to Frame's DeleteButton.

### CommentSubmit

CommentSubmit belongs directly to Frame, not CommentSection. This was to avoid actions and props from getting too deep within the project. Also, from a developer's point of view, it made more sense for a user to be able to submit their comments regardless a CommentSection is properly rendered.

Due to its structure, comment submission logically had to be placed in Frame. Hence, Frame has a state named commentBody which can be overwritten by its write() method. When a comment is submitted, Frame dispatches postComment action. The new comment goes through the Redux cycle and reaches back to Frame's props. This props is then passed down to CommentSection, and finally, CommentSection updates its state as described above.

### User Search

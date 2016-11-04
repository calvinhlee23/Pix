# Yeeple

[Live link][yeeple]

[yeeple]: http://www.yeeple.io/

![logo]
[logo]: ./docs/images/yeeple_logo.png

Yeeple is a web application inspired by Yelp, which allows users to search for board games and read/write reviews. It is built with Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.

## Features & Implementation

### Single-Page App
![singlepage]
[singlepage]: ./docs/images/single_page_app.png

Yeeple is a single-page app where all content is delivered on one static page.

Using the React router, the root page will render different components based on the location pathname.

### Search/Filters
![filters]
[filters]: ./docs/images/filters.png
Using the `search/bar` component from the header or the front page, the user can search for boardgames by name or category. They can also choose to browse through the entire board game library by typing `all games` or `all` in the searchbox. Then, the user can use the filters on the left sidebar to filter out the results by number of players/playing time/age/difficulty level to find the exact type of games that they want.

### Categories
![categories]
[categories]: ./docs/images/categories.png
From the categories page, the user can browse through board games by categories. The left `categories/index` component lists out all the categories which the user can click through. The `CategoryActions` dispatches a `fetchCategory` action to fetch all the games in the currently selected category. When the selected category changes, the `CategoryListener` which listens to any changes to the currently selected category will trigger the `CategoryActions` once again to update the board game listing accordingly.

### Board Game Details Page
![boardgamedetails]
[boardgamedetails]: ./docs/images/boardgame_details.png
Each row in the `Boardgame` table contains specific information about each board game. Using the `boardgameId` provided by the pathname, `BoardgameActions` dispatches a `fetchBoardgame` action to fetch the corresponding information from the `Boardgame` table. The board game details page also renders the `reviews/index` component which displays all its reviews.

### Reviews/Ratings
![reviews]
[reviews]: ./docs/images/reviews.png
Clicking on the "Write a Review" button from the board game details page will trigger a `showForm` method which will render the `reviews/new` form component to the details page. The user can choose a meeple (star) rating, write a review title and description. Using the `window.localStorage` property, a form draft is saved inside the object so that the user can start on a review and come back later to finish writing the review. The data stored in the storage is cleared when the form is submitted. Form validations are in place using the `ErrorListener` and form submission redirect is triggered when change is emitted from the `ReviewStore`.

### Profile and Recent Activity
![profile]
[profile]: ./docs/images/profile.png
Each `User` has a row in the `Profile` table which references the user using the foreign key `user_id`. The `profile/show` component, on `componentDidMount` fetches the corresponding profile using the `ProfileActions.fetchProfile` action. The profile page also renders the `recent_activity` component which displays the recent reviews posted by the specific user. This is in contrast to the front page where it utilizes the same `recent_activity` component to render the recent activity for all users.

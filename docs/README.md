# Pix

[Heroku link][heroku]

  **URL:** https://projectpix.herokuapp.com/

[heroku]: https://projectpix.herokuapp.com/

## Pix is ...

A web application inspired by Instagram built using Ruby on Rails and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Images
- [ ] Comments & Likes
- [ ] Following & Photo feed
- [ ] Infinite Scroll/Pagination
- [ ] Production README [sample](docs/production_readme.md)

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days) (BACK END)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Image Model, Comments, Like & Likings (2 days) (BACK END)

**Objective:** Images can be posted/deleted. Comments can be posted/deleted with API. Comments will be rendered beneath the image that they belong to.

- [ ] `Image` model (has 'likes' as one of its attributes)
- [ ] `Comments` model
- [ ] `Like` model belongs to an image
- [ ] `Liking` model belongs to 'Like' and the 'User'
  - Image has one like.
  - Like has many Likings.
  - Liking belongs to Like and User
  - => User has many likings
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for comments (`comments controller`)
- [ ] JBuilder views for comments/likes/likings

### Phase 3: Stream (2 day)

**Objective:** An Image, likes, comments belong to a Frame Component. "Stream", aka photo feed, will consist of multiple Frames.

- [ ] the entire project is wrapped in `project` component
- [ ] `Frame` Component
 - a frame includes username, image, likes, comments
- [ ] `Stream`: photo feed will consist of frames
- [ ] `Sections`: dictates which stream to render:
  - ex) public photo streams & friends' streams.

### Phase 4: Search User (1 days)

**Objective:** Users can search public users.

- [ ] Search Bar
- [ ] Live-Interactive user-search list
- [ ] Searching notes by tag
- [ ] Style search
- [ ]

### Phase 5: Styling & Infinite/Pagination Scroll (2 days, W2 Th 6pm)

**objective:** Allow rich text editing of notes.

- [ ] Rails helpers to sanitize HTML before rendering.
- [ ] Style Quill components.
- [ ] Add Quill styling to seeded notes

### Phase 6: - Pagination / infinite scroll for Notes Index (1 day, W2 F 6pm)

**objective:** Add infinite scroll to Notes Index

- [ ] InfiniteScroll
- [ ] Style scroll components and transitions
- [ ] Ensure seed data demonstrates infinite scroll

### Bonus Features (TBD)
- [ ] `Trends` Stream
- [ ] `Direct messaging`

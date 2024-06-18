# AdMarketPlace Challenge

Hello! This is my submission for the AdMarketPlace
front end challenge.

## Requirements:

- [x] Utilize Typescript
- [x] on performance
- [x] Add unit tests wherever possible.
- [x] Try your best to create beautiful UI components.

### View1:

This is the index page. When this page is loaded, it should populate a list of posts from
<https://jsonplaceholder.typicode.com/posts>

- [x] Users should be able to select a post from the dropdown.
- [x] When a user selects a post from the dropdown, The user should be routed to View2

### View2:

- [x] In this view, We should display the posts title, body and the comments of the selected
      post. The comments can be retrieved from
      <https://jsonplaceholder.typicode.com/comments?postId=[postId]>
- [x] We should also let users add comments. When a comment is posted, A POST request
      should be sent to <https://jsonplaceholder.typicode.com/comments>
- [x] After a successful POST request, the comment should be appended to the list of
      comments. (NOTE: This POST request is not persistent)

### View3:

- [x] When a user navigates to View2 where the post does not exist or the api does not return
      any data, show an error message along with a link to navigate to the home page.

### View4:

- [x] When a user tries to navigate to any path that does not exist, show a 404 message
      along with a link to navigate back to home.

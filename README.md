# Porto

**Creators**: Andy Zhong, Kimberly Kruedelbach, Lawrence Hau, Roxie Schnoor, Zachary Rehbein.

![Homepage](/src/Images/Homepage.png)

Porto is a web app that was created using React to browse portfolios of all users in our own database created with Express. User can upload their own user information, project details, and images. A search feature is also available if our users are more interested in browsing the available works of other artists and creators, alike.

### Technology Used

- **React**: Utilized _HTML_, _CSS_, _JavaScript_ within the application to create functional components and aesthetically pleasing styling for a simple, modern design.
- **Bootstrap**: Implemented to create more fluid and structured styling throughout the app.
- **Google Fonts**: Used for all text, titles, and headers in the app.
- **Heroku**: This web app was deployed using Heroku.

### Install Instructions

- Fork and Clone this repository, along with the porto-server to provide the backend data.

In your terminal after cloning, run:

**`npm install`** or **`npm i`**
**`npm run start`** or **`npm start`**

### Features

- Search function to display profile based on search input.
- Utilizes database from backend server.
- Explore page to browse existing profiles.
- Profile page that displays user info, contact link, resume, and up to 4 projects with links to deployed sites.

### Approach

We wanted to create an app that could provide a real-world, practical use today. Creating a portfolio-based web application allowed us create content and functionality that we know would be useful if launched right now. More than that, this would provide a place where users could really branch out and connect with other creators and add ease-of-access to their own work.

### Challenges

- Upon starting this project, we decided that we would utilize Bootstrap styling for the frontend to help streamline the design across all components. While this provided a learning curve for everyone in the group, it was a HUGE time-saver after everything was all said and done.
- Getting the searchbar functionality to return the data that we were searching for was a major hurdle because of the use of our own database. Connecting the backend to the frontend with the search feature provided a pretty big challenge.

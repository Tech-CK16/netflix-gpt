# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

</br>
</br>

# Netflix-GPT

-   Create React App
-   configure Tailwind CSS
-   Header
-   Routing of App
-   Login Form
-   Sign up Form
-   Form Validation
-   useRef Hook
-   Firebase Setup
-   Deploying our app to production
-   Create SignUp user account
-   Implement Sign In user API
-   Created Redux Store with userSlice
-   Implemented Sign Out
-   Update Profile
-   Bug-fixex: if user is not logged in redirect it to signin/browser pages accordingly
-   unsubscribing to the onAuthStateChanged callback
-   added hardcoded values to the constants file
-   Registerd to TMDB API & create an app and get access token
-   set data from TMDB now playing movies list API
-   custom hook for now playing movies
-   created movie slice
-   update store with movies data
-   planning for Main container and secondary container
-   Featch data for Trailer video
-   Update store with Trailer Video Data
-   Embeded the youtube Video and make it autoplay and mute
-   Tailwind classes too make Main container to look awesome
-   Build Secondary Component
-   Build Movie List
-   Build Movie Card
-   TMDB Image CDN URL
-   Made the browser page amazing using tailwind
-   usePopularMovies Custom Hook
-   GPT Search feature
-   GPT Search Page
-   GPT Search Bar
-   Multi-language Feature in our App (\*)

## Features

-   Login/Sing up
    -   Sign In/ Sign Up form
    -   redirect to browse Page
-   Browse Page (after authentication)
    -   Header
    -   Main Movie
        -   Trailer in Background
        -   Title and description
        -   Movie suggestions
            -   MovieListen \* N
-   NetflixGPT
    -   Search Bar
    -   Movie Suggestions

## planning

-   MainContainer
    -   VideoBackground
    -   VideoTitle
-   SecondaryContainer
    -   MovieList \* n (Popular, Now PLaying, Trending, Horror)
        -   cards \* n

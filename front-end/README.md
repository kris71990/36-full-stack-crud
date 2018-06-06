# Pound Puppy Alert - Front-End

**Author** Kris Sakarias

**Version** 1.0.0 

## Overview
This is a front-end that communicates with the Pound Puppy Alert server/API - consult the back-end folder Readme for full information about the back-end, including .env variables. The front-end is built with React and Redux.

### Documentation

**In the .env File**
```
API_URL=http://localhost:3000
NODE_ENV=development
```


Starting the Backend Server and Webpack Dev Server:

`git clone https://github.com/kris71990/36-full-stack-crud`

`cd back-end` -> `npm i` -> `npm dbon` -> `npm run start`

`cd front-end` -> `npm i` -> `npm run watch`


**Component Structure**
```
Provider
  App 
    AuthRedirect
      Landing
        AuthForm
          Dashboard
            DogForm
```

- Provider - parent wrapper component redux uses to manage the application state

- App - Routes to other components 

- AuthRedirect - when app is rendered, the AuthRedirect will handle user authentication and usually will route to the Landing component

- Landing - the Landing component will render login and signup forms (AuthForm), which can be navigated between via links.

- AuthForm - If signing up, a signup form will render; a login form will render instead if it is desired. On form submit, actions will be dispatched from the Landing component and trigger API calls to the back-end. If authentication is successful, the dashboard is rendered.

- Dashboard - renders a DogForm component to add a dog that is available for adoption to the database. Dogs currently in the database will appear below the form.

- DogForm - all form fields are required
    - Name - Name of dog 
    - Breed - Breed of dog
    - Age - Age of dog
    - Zip Code - zip code location of dog 
    - Details - any additional information 

  A DogForm component will also render for each existing dog so information about the dog can be updated or deleted
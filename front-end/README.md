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
    Dashboard
      DogForm
```

- Provider - parent wrapper component redux uses to manage the application state

- App - renders the dashboard

- Dashboard - renders a DogForm component to add a dog that is available for adoption to the database. Dogs currently in the database will appear below the form.

- DogForm - all form fields are required
    - Name - Name of dog 
    - Breed - Breed of dog
    - Age - Age of dog
    - Zip Code - zip code location of dog 
    - Details - any additional information 

  A DogForm component will also render for each existing dog so information about the dog can be updated or deleted
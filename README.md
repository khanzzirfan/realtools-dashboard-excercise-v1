# Employees dashboard

## The project

## Prerequisites

- Node >= 8.10
- NPM >= 5.6
- Git

## Getting started

1. Clone the project repository
2. Install the dependencies `npm install`

## About the project

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- [JSON server](https://github.com/typicode/json-server) will give you a fake but realistic REST API using the static `src/server/db.json` file created after running `npm install`. If you make POST, PUT, PATCH or DELETE requests, changes will be automatically saved to `db.json`.

### Project stack

- React (Create React App)
- CSS with Styled-Components
- Tests with React Testing Library

### Project structure

```bash
src/
  components # Some components already built.
  server # The fake API mentioned above.
  theme # Some base styles used across the project.
  Playground.js # A simple showcase of the existing components.
```

## Available scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

[JSON server](https://github.com/typicode/json-server) will run concurrently in watch mode on port 4002 - [http://localhost:4002](http://localhost:4002).

### `npm test`

Launches the test runner in the interactive watch mode.\
Read the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run seed-db`

Resets `db.json` to the original initial data (`db.base.json`).\
This script runs automatically after `npm install`.

## Available endpoints

- `GET http://localhost:4002/people`: get the full list of people
- `GET http://localhost:4002/people?name_like={substring}`: search for people where the name includes `{substring}`
- `GET http://localhost:4002/people?employment={string}`: search for people where the employment type matches `string`
- `GET http://localhost:4002/people?name_like={substring}&employment={string}`: search for people by name and employment type
- `GET http://localhost:4002/people/{id}`: get the person with id `{id}`
- `POST http://localhost:4002/people`: create a new person
- `PATCH http://localhost:4002/people/{id}`: update the person with id `{id}`

## Implementation details

- Implemented the peoples page as provided in figma designs
- Accessbility has taken into consideration

### Tools used

- react-query: For fetching data and state management. Not using redux to avoid all the boilerplate code. React-query has lot of advantages such as fetching, caching, synchronizing data and updating server-state.
- jest-styled-components: A testing utility to test the styled-components. The best way I thought of testing styled components to take a snapshot with all styles. I have done snapshots for the styled components.
- jest-axe: A nice tool for testing accessibility of the page and components.
- msw: Mocking APIS for testing. This can also used for development when backend is not ready. Best way to test promise api calls instead of mocking functions.
- axios: promise base http client
- Chrome-vox: Tested manually on chrome for accessibility.
- Context API: used to save UI state. Useful to preserve state when user navigate edit or add page and then comes back to people page the filter is preserved
- Currency formatter: friendly library used to format currency for internationalization.

### tests

- All component folders has one test file related to component.
- Where there are more than one test file I grouped them under _tests_ folder.
- Most of the styled components has snapshots tests
- Test coverage is good above 90%. I did not touch Select field so I have not written any tests for that component.

### Design UX guidelines

- Empty table scenario is not provided when no rows available.
- Error info is not provided when failed to fetch employees. Therefore its not implemented in the current task.

### About Challenge

This test provided me few learning guide lines to use react-query and avoid redux. I learned cool react-query api.

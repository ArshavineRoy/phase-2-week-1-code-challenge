# Bank of Flatiron

## Phase 2 : Week 1 Code Challenge

[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)
[![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.javascript.com)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)
[![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

## Introduction

Bank of Flatiron is a React mini web app built as part of Phase 2: Week 1 code challenge to practice on components, props, state, events, and data fetching in React.

This application displays a list of your recent bank transactions, among other features.

## Dependencies

### Prerequisites

Before running this app, make sure you have the following installed on your system:

- Node.js (v18.15.0 or later)
- npm (v9.6.7 or later)

#### Front-end Dependencies

- React (v18.2.0)
- React DOM (v18.2.0)
- React Scripts (v5.0.1)

<!-- - ### Development Dependencies

Jest (v27.0.4) - For running unit tests.
- ESLint (v7.32.0) - For linting the code and maintaining code quality.
- Prettier (v9.19.0) - For code formatting consistency.-->

## Project Setup

### 1. Clone the repository

```
git clone https://github.com/ArshavineRoy/phase-2-week-1-code-challenge
```

### 2. Navigate to the project directory

```
cd phase-2-week-1-code-challenge
```

### 3. Install required dependencies

In the project directory, install the required dependencies

```
npm install
```

### 4. Install and start JSON server

#### Install JSON server

```
npm install -g json-server
```

#### Start JSON Server

```
json-server --watch db.json
```

- **Note:** Running this command will instruct `json-server` to use the `db.json` file in the terminal's current directory, so make sure to run this command from the same directory as this project.

#### Test the server by visiting this route in the browser

```
http://localhost:8001/transactions
```

Sample:

```json
[
  {
 "transactions": [
   {
     "id": 1,
     "date": "2019-12-01",
     "description": "Paycheck from Bob's Burgers",
     "category": "Income",
     "amount": 1000
   },
   {
     "id": 2,
     "date": "2019-12-01",
     "description": "South by Southwest Quinoa Bowl at Fresh & Co",
     "category": "Food",
     "amount": -10.55
   },
]
```

### 5. Start the development server

```
npm start
```

This runs the app in the development mode.

### 6. Open your browser and interact with the app

The app will open on your default browser automatically when `npm start` is run, but if it doesn't, open [http://localhost:3000](http://localhost:3000) to view it.

You may also see any lint errors or logs in the console.

### Tree view of the component parent-child structure

```text
└── App
    ├── Navbar
    ├── Body
    │   ├── Search
    │   └── Transactions
    └── Footer
```

## Code Challenge Deliverables

As a user should be able to:

- See a table of all transactions.

- Fill out and submit the form to add a new transaction. This should add the new transaction to the table _the new transaction does not have to be persisted to the backend_

- Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.

## Bonus Deliverables

As a user should be able to:

- Sort transactions alphabetically by category or description.

- Delete a transaction which will remove it from the table

## Author & License

Authored by [Arshavine Waema](https://github.com/ArshavineRoy).

Licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.

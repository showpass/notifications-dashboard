# notifications-dashboard

*Simple Parse server for Showpass.*

## Getting Started

### Pre-requisites
This project uses [docker-compose](https://docs.docker.com/compose/) for development.
Please set up your machine to to run the `docker-compose` command before proceeding.

### Usage
To run this project, simply start the project with `docker-compose`.

```
docker-compose build
docker-compose up
```

## Local Usage

Follow these steps if you wish to run the project without docker.

### Pre-requisites

The only pre-requisite for this project is [Node.js](https://nodejs.org/).

### Setup

To run, you will need to install the project's [NPM](https://www.npmjs.com/) dependencies.

```
npm install
```

### Run server

To start the server, simply run the NPM script.

```
npm start
```

### Testing

To run all tests, use the NPM script.

```
npm test
```

## Continuous Integration

To simplify deployment, continuous integration has been configured using [Circle CI](https://circleci.com/). Any
changes pushed to `master` branch will be automatically deployed to the live server.

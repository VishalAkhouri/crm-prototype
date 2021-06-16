# CRM Prototype

This is a sample project created in Angular 12 with Express and MongoDb backend

Github repository: [https://github.com/VishalAkhouri/crm-prototype]

## Structure of the project:
- the main angular project was generated using angular/cli v12.0.4
- added api-server code (nodeJs + express) as a library (temporarily) `/projects/api-server`
- api server connects to MongoDB database

## Install and start MongoDB:
- Need to first start MongoDB database 
- In case mongodb is not install, refer to [docker mongo](https://hub.docker.com/_/mongo) to install and start mongo database docker image
- note the url on which the mongodb has started --- example: localhost:27017');

## Starting API Server:
- change directory to /projects/ : `cd projects`
- run `npm install` from inside /projects
- start api-server
```
npm start (uses the default mongodb url as: localhost:27017)

or 

npm start --dburl=<mongodb-url-to-connect> (use format uri:port )
```

if the api-server starts successfully, the following lines will appear in the console log
```
Express server running on port 5000
mongoDb connection was successful!
```

## Starting angular project:
- from the root directory, start the application
```
npm start
```
- application can now be locally accessed at url:
```
http://localhost:4200/
```

## Starting angular project with production environment config:
```
npm run start-prod
````

## Unit tests (Jasmine + Karma)

```
npm run test
```

## End to end tests (Cypress)
```
npm run cypress:run
```

## Choices of technology:
 - Front end framework: Angular 12
 - Bootstrap 5 + Custom SCSS
 - State management: NgRx (Redux) + RxJs
 - Unit testing - Jasmine + Karma
 - E2E testing - Cypress

## The following needs to be implemented and will be factored in next iterations:

- Unit test coverage for all the included functionality
- E2E tests - create a new environment file for e2e tests to connect to a different e2e database
- Enhancements to list data table
  - Show details panel on clicking email address shown as link
  - filtering based on last name
- Add a notification panel common component

## Screenshots

![Add Customer](src/assets/images/add-customer.png?raw=true "Add Customer")


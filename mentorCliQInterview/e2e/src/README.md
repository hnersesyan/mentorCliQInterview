# Mocha Protractor with Chai Example


## Project dependencies:
* Visual Studio Code - Preferred IDE for coding (https://code.visualstudio.com/)
* Nodejs is an open-source, cross-platform JavaScript run-time environment (https://nodejs.org)
* ES6 ECMAScript 6 - ECMAScript 2015 for javascript language (https://www.w3schools.com/js/js_es6.asp)
* Mocha unit test runner for javascript runs on nodejs (https://mochajs.org/)
* Chai is a BDD / TDD assertion library for node (https://www.chaijs.com/)
* Eslint for code formatting and code standardization (https://eslint.org/) 
* Makes use of page objects for UI tests
* Protractor can test both Angular, and non-Angular applications

## Coding and Style Guidelines
* Reference : https://www.protractortest.org/#/style-guide


## Setup:
* Install Node (http://nodejs.org) (v8.x.x or later)
* Install chrome browser to test the UI (https://www.google.com/chrome/)
* `git clone git@github.com:hasmiknersesyan/mentorcliQ.git`
* `npm i` to install the project dependencies
* `npm i -g eslint to install eslint globally`
* Install `eslint` plugin for Visual Studio Code from VS code plugin manager toolbar
* run `npx webdriver-manager update` to updated webdriver-manager
* run  `npx webdriver-manager start` to start server

## Run tests:
### UI
* run tests locally `npm run test:ui` (run tests via Protractor and mocha using conf.js)

## Troubleshooting
* run `node -v` and make sure your node version is 8.x.x or greater


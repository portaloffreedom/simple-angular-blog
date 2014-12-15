# A blog app that fetches the posts from a backend

## Overview

This application was based on the angular-js tutorial:
[angular-phonecat](https://github.com/angular/angular-phonecat).

## Prerequisites

TODO

## Development guidelines

The following docs describe how you can test and develop further this application.


### Installing dependencies

TODO

### Running the app during development

- Run `npm start`
- navigate your browser to `http://localhost:8000/app/index.html` to see the app running in your browser.

### Running unit tests

(tests missing)

We recommend using [Jasmine][jasmine] and [Karma][karma] for your unit tests/specs, but you are free
to use whatever works for you.

- Start Karma with `npm test`
  - A browser will start and connect to the Karma server. Chrome is the default browser, others can
  be captured by loading the same url as the one in Chrome or by changing the `test/karma.conf.js`
  file.
- Karma will sit and watch your application and test JavaScript files. To run or re-run tests just
  change any of your these files.


### End to end testing

(tests missing)

We recommend using [Jasmine][jasmine] and [Protractor][protractor] for end-to-end testing.

Requires a webserver that serves the application. See Running the app during development, above.

- Serve the application: run `npm start`.
- In a separate console run the end2end tests: `npm run protractor`. Protractor will execute the
  end2end test scripts against the web application itself.
  - The configuration is set up to run the tests on Chrome directly. If you want to run against
    other browsers then you must install the webDriver, `npm run update-webdriver`, and modify the
  configuration at `test/protractor-conf.js`.

## Application Directory Layout

    app/                --> all of the files to be used in production
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      index.html        --> app layout file (the main html template file of the app)
      js/               --> javascript files
        app.js          --> the main application module
        controllers.js  --> application controllers
        directives.js   --> application directives
        services.js     --> custom angular services
      partials/         --> angular view partials (partial html templates) used by ngRoute
        post.html
        create-post.html
      bower_components  --> 3rd party js libraries, including angular and jquery

    scripts/            --> handy scripts
    test/               --> test source files and libraries
                            (Tests are now missing)
      karma.conf.js        --> config file for running unit tests with Karma
      protractor-conf.js   --> config file for running e2e tests with Protractor
      e2e/              --> end-to-end specs
      unit/             --> unit level specs/tests


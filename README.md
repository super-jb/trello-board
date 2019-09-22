# TrelloBoard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


ng --version
ng help
ng generate --help
ng add --help

ng add @angular/material
material.angular.io
material.angular.io/components

ng add @angular/fire

ng g module shared
ng g component shared/shell --export

ng g component home-page

ng g module user --routing
ng g component user/login-page
ng g directive user/google-signin
ng g c user/email-login

ng g guard user/auth
ng g service services/notification

ng g module kanban --routing
ng g service kanban/board
ng g c kanban/board
ng g c kanban/boards-list
ng g c kanban/dialogs/board-dialog --flat --entry-component -t -s
ng g c kanban/dialogs/task-dialog --flat --entry-component -t -s

firebase emulators:start --only firestore
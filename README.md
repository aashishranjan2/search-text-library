# SearchTextLibrary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0.

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

## Application(Component) Structure
AppComponent
|
 --> SearchBarComponent
|
 --> MainSectionComponent
|
 --> SideBarComponent
        |
         --> AddTextComponent

## Application Features
    It's an application to add a text and search for any string from the list of texts. Upon match, string will be highlighted wherever it is present in the application. You can add any number of texts and of any length.
    When an App loads initially, there is no pre-populated data.

### To add texts in the list
    In side bar, there is an input button provided that can used by a user to add texts. When the list of texts grows more, an scroller will start appearing which can be used to scroll through the list. Should you wish to delete any text from the list, use 'x' button.

### To search for a string match
    Another input/search field is present in search bar section where a user can look for a matching string.

### To display a text in the main section view
    You can click on any text to make it appear in the main section content view

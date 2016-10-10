# angular-2.0
Angular 2 Practice
- Modules
- Components
- Templates
- Metadata
- Data binding
- Directives
- Services
- Dependency injection

### Modules
- Angular apps are modular and Angular has its own modularity system called Angular modules or NgModules.
- Every Angular app has at least one module, the root module, conventionally named AppModule.
- An Angular module, whether a root or feature, is a class with an @NgModule decorator.
----
Decorators are functions that modify JavaScript classes. Angular has many decorators that attach metadata to classes so that it knows what those classes mean and how they should work. Learn more about decorators on the web.
-----

NgModule is a decorator function that takes a single metadata object whose properties describe the module. The most important properties are:

    declarations - the view classes that belong to this module. Angular has three kinds of view classes: components, directives, and pipes.

    exports - the subset of declarations that should be visible and usable in the component templates of other modules.

    imports - other modules whose exported classes are needed by component templates declared in this module.

    providers - creators of services that this module contributes to the global collection of services; they become accessible in all parts of the app.

    bootstrap - the main application view, called the root component, that hosts all other app views. Only the root module should set this bootstrap property.

```
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ Logger ],
  declarations: [ AppComponent ],
  exports:      [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
````

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
Angular apps are modular and Angular has its own modularity system called Angular modules or NgModules.

Every Angular app has at least one module, the root module, conventionally named AppModule.

An Angular module, whether a root or feature, is a class with an **@NgModule** decorator.

''**Decorators** are functions that modify JavaScript classes. Angular has many decorators that attach metadata to classes so that it knows what those classes mean and how they should work. Learn more about decorators on the web.''


NgModule is a decorator function that takes a single metadata object whose properties describe the module. The most important properties are:

- **declarations** - the view classes that belong to this module. Angular has three kinds of view classes: components, directives, and pipes.
- **exports** - the subset of declarations that should be visible and usable in the component templates of other modules.
- **imports** - other modules whose exported classes are needed by component templates declared in this module.
- **providers** - creators of services that this module contributes to the global collection of services; they become accessible in all parts of the app.
- **bootstrap** - the main application view, called the root component, that hosts all other app views. Only the root module should set this bootstrap property.

```sh
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
The export of AppModule is just to show how to export; it isn't actually necessary in this example. A root module has no reason to export anything because other components don't need to import the root module. 

**Bootstrapping**

Launch an application by bootstrapping its root module. During development you're likely to bootstrap the AppModule in a main.ts file like this one.
```
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
````
##### Angular libraries
- Each Angular library name begins with the @angular prefix.
- You can install them with the npm package manager and import parts of them with JavaScript import statements.
```
import { Component } from '@angular/core';
```
### Components
- A component controls a patch of screen called a view.
- You define a component's application logic—what it does to support the view—inside a class. The class interacts with the view through an API of properties and methods.

```
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private service: HeroService) { }

  ngOnInit() {
    this.heroes = this.service.getHeroes();
  }

  selectHero(hero: Hero) { this.selectedHero = hero; }
}
```
Angular creates, updates, and destroys components as the user moves through the application. Your app can take action at each moment in this lifecycle through optional lifecycle hooks, like ngOnInit() declared above.

### Templates
You define a component's view with its companion template. A template is a form of HTML that tells Angular how to render the component.
````
<h2>Hero List</h2>
<p><i>Pick a hero from the list</i></p>
<ul>
  <li *ngFor="let hero of heroes" (click)="selectHero(hero)">
    {{hero.name}}
  </li>
</ul>
<hero-detail *ngIf="selectedHero" [hero]="selectedHero"></hero-detail>
````
### Metadata
Metadata tells Angular how to process a class.

Looking back at the code for HeroListComponent, you can see that it's just a class. There is no evidence of a framework, no "Angular" in it at all.

In fact, HeroListComponent really is just a class. It's not a component until you tell Angular about it.

To tell Angular that HeroListComponent is a component, attach metadata to the class.

In TypeScript, you attach metadata by using a decorator. Here's some metadata for HeroListComponent:
```
@Component({
  moduleId: module.id,
  selector:    'hero-list',
  templateUrl: 'hero-list.component.html',
  providers:  [ HeroService ]
})
export class HeroListComponent implements OnInit {
/* . . . */
}
```
Here are a few of the possible @Component configuration options:

- moduleId: sets the source of the base address (module.id) for module-relative URLs such as the templateUrl.

- selector: CSS selector that tells Angular to create and insert an instance of this component where it finds a <hero-list> tag in parent HTML. For example, if an app's HTML contains <hero-list></hero-list>, then Angular inserts an instance of the HeroListComponent view between those tags.

- templateUrl: module-relative address of this component's HTML template, shown above.

- providers: array of dependency injection providers for services that the component requires. This is one way to tell Angular that the component's constructor requires a HeroService so it can get the list of heroes to display.

### Data binding
Angular supports data binding, a mechanism for coordinating parts of a template with parts of a component. Add binding markup to the template HTML to tell Angular how to connect both sides.

```
<li>{{hero.name}}</li>
<hero-detail [hero]="selectedHero"></hero-detail>
<li (click)="selectHero(hero)"></li>
```
- The {{hero.name}} interpolation displays the component's hero.name property value within the <li> tags.

- The [hero] property binding passes the value of selectedHero from the parent HeroListComponent to the hero property of the child HeroDetailComponent.

- The (click) event binding calls the component's selectHero method when the user clicks a hero's name.

Two-way data binding is an important fourth form that combines property and event binding in a single notation, using the ngModel directive. Here's an example from the HeroDetailComponent template:
```
<input [(ngModel)]="hero.name">
```
### Directives
Angular templates are dynamic. When Angular renders them, it transforms the DOM according to the instructions given by directives.

A directive is a class with directive metadata. In TypeScript, apply the @Directive decorator to attach metadata to the class.

A component is a directive-with-a-template; a @Component decorator is actually a @Directive decorator extended with template-oriented features.

While a component is technically a directive, components are so distinctive and central to Angular applications that this architectural overview separates components from directives.

Two other kinds of directives exist: structural and attribute directives.

***Structural directives*** alter layout by adding, removing, and replacing elements in DOM.
```
<li *ngFor="let hero of heroes"></li>
<hero-detail *ngIf="selectedHero"></hero-detail>
```

- *ngFor tells Angular to stamp out one <li> per hero in the heroes list.
- *ngIf includes the HeroDetail component only if a selected hero exists.

Attribute directives alter the appearance or behavior of an existing element. In templates they look like regular HTML attributes, hence the name.

The ngModel directive, which implements two-way data binding, is an example of an attribute directive. ngModel modifies the behavior of an existing element (typically an <input>) by setting its display value property and responding to change events.

```
<input [(ngModel)]="hero.name">
```
### Services
Service is a broad category encompassing any value, function, or feature that your application needs.

Almost anything can be a service. A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well.
### Dependency injection
Angular can tell which services a component needs by looking at the types of its constructor parameters. For example, the constructor of your HeroListComponent needs a HeroService:
```
constructor(private service: HeroService) { }
```
You can register providers in modules or in components.

In general, add providers to the root module so that the same instance of a service is available everywhere.

```
providers: [
  BackendService,
  HeroService,
  Logger
],
```

Alternatively, register at a component level in the providers property of the @Component metadata:
```
@Component({
  moduleId: module.id,
  selector:    'hero-list',
  templateUrl: 'hero-list.component.html',
  providers:  [ HeroService ]
})
```

Registering at a component level means you get a new instance of the service with each new instance of that component.

Points to remember about dependency injection:

- Dependency injection is wired into the Angular framework and used everywhere.

-  The injector is the main mechanism.
   - An injector maintains a container of service instances that it created.
   - An injector can create a new service instance from a provider.
- A provider is a recipe for creating a service.
- Register providers with injectors.





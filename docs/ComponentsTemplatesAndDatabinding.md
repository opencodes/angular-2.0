
## Component Lifecycle Hooks
### ngOnInit:
The ngOnInit method of a component is called directly after the constructor and before the ngOnChange is triggered for the first time. It is the perfect place for initialisation work.
### ngOnChanges:
The ngOnChanges will be called first when the value of a bound property changes. It executes, every time the value of an input property changes. It will receive a changes map, containing the current and previous values of the binding, wrapped in a SimpleChange.
{"brand":{"previousValue":"","currentValue":"BMW"}}
In the case above, one change to the input property brand is reported. The value of this property has been changed from an empty string to the string “BMW”.
### ngOnDestroy:
The ngDestroy is called in a component’s lifecycle just before the instance of the component is finally destroyed. It is the perfect place to clean the component — for example, to cancel background tasks.

If we do not use the ngOnDestroy method we will have the thread logging “hello” until the end or it crashes….
More advanced phases are:
### ngDoCheck:
ngDoCheck is triggered every time the input properties of a component or a directive are checked. We can use this lifecycle hook to extend the check with our own custom check logic. It can also be useful if we want to accelerate the change detection by checking the bare minimum and not using the default algorithm (although we usually do not use this).
### ngAfterContentInit:
The ngAfterContentInit lifecycle hook is called after ngOnInit when the component or directive’s content has been initialised; basically when all the bindings of the component have been checked for the first time.
### ngAfterContentChecked:
Called after every check of the component or directive’s content, effectively when all the bindings of the components have been checked; even if they haven’t changed.
### ngAfterViewInit:
Called after ngAfterContentInit when the component’s view has been initialised. Applies to components only.
### ngAfterViewChecked:
Called after every check of the component’s view. Applies to components only. When all the bindings of the children directives have been checked; even if they haven’t changed. It can be useful if the component is waiting for something coming from its child components.

## What's the difference between @ViewChild and @ContentChild?
Understand it using Shadow DOM and Light DOM terminology (it have come from web components, see here). In general:

Shadow DOM - is an internal DOM of your component that is defined by you (as a creator of the component) and hidden from an end-user. For example:
```
@Component({
  selector: 'some-component',
  template: `
    <h1>I am Shadow DOM!</h1>
    <h2>Nice to meet you :)</h2>
    <ng-content></ng-content>
  `;
})
class SomeComponent { /* ... */ }
```
Light DOM - is a DOM that an end-user of your component supply into your component. For example:
```
@Component({
  selector: 'another-component',
  directives: [SomeComponent],
  template: `
    <some-component>
      <h1>Hi! I am Light DOM!</h1>
      <h2>So happy to see you!</h2>
    </some-component>
  `
})
class AnotherComponent { /* ... */ }
```
So, the answer to your question is pretty simple:

The difference between @ViewChildren and @ContentChildren is that @ViewChildren look for elements in Shadow DOM while @ContentChildren look for them in Light DOM.

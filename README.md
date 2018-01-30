
### Notes from the [article](https://www.barbarianmeetscoding.com/blog/categories/angular2-step-by-step/) series ###
+ Webpack: 
    - modular bundler that takes all these files and modules, processes them 
	- makes them available in away that can be run in any browser.

+ Module:
	- typescript/es6 features
	- encapsulate, group, reuse, distribute and load code in JavaScript
	- export functionality to export functions

+ Component:
	- core building block of angular applications
	- reusable
	- self contained and has template(html), html element(selector) and variable(export class)

+ Decorator: like a attribute in C# or Java
	- like a function that is applied to whatever it decorates.

+ structural directive:
    - directive that is going to effect the DOM in some way adding or removing elements to it.
	- example: *ngFor
	-asterisk before directive denotes structural directive

+ Angular service:
	- a class that encapsulates some sort of functionality and provides it as service for the rest of your application.

+ `OnInit()`:
	- lifecycle hook
	- instead of creating files when component is constructor, we can delay getting data until it is initiated.

+ _how do you inject stuff in a service?_
	- same way as injecting components, by injecting the dependency in the constructor and registering in the providers property of the root component.
	- also we need to decorate the service with the Injectable decorator.
Why don’t we use the Injectable decorator in components?
	- because the Component decorator enables dependency injection directly.
interpolation binding
	- provides one way data binding from component to the template to display data.
	- example: `class { title: 'app works' }`, in .html `{{title}}`
event binding
	- one way data binding between the template and underlying component
	- `(click)="selectPerson(person)"`
property binding
	- `<app-child-component [childVariable]="parentVariable"> </app-child-component>`
+ `@Input()` decorator
	- makes a variable/property as an input to the Component, and will allow other components to sent variable into the component.

+ Routing in angular
	- route the user to different component based on the url that was typed in the browser, or that you direct them to through a link.
	- configure by:
		- `Routes` array with collection of routes
		- `RouterModule` export that provides the router configuration to the rest of the application.
	- `<router-outlet>`: lets you define where to load routed views!
	- `ActivatedRoute`: helps to get access to route parameter from URL.



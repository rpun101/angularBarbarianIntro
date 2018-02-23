
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

+ `#name` **template local variable** 
	- to keep DOM element elated references and logic out of component code.
	- references the DOM element itself
	- `<input type="text" name="name" [(ngModel)]="person.name" #name>`

+ **Angular 2+ data-bindings**
	- Interpolation: 
		+ component => template. 
		+ to display information from the component into the template. 
		+ `{{person.name}}`
	- Property bindings: 
		+ to bind data from component => template.  
		+ to bind component data to DOM element properties.
		+ `<img [src]="person.imageUrl">`
	- Event bindings: 
		+ template => component.  
		+ to bind template events to the component. 
		+ to execute arbitrary code as a response to an interaction between the user and the user interface of your application.
		+ `[click)="selectPerson(person)"`
	- **`[(ngModel)]`** 
		+ Two-way data binding
		+ syncs data both ways from the component to the template and back. 
		+ typically use it within form inputs. 
		+ `[(ngModel)]="person.name"`

+ **Validation in Angular**
	+ supports HTML5 validation constraints.
	+ `ngModel` directive keep tracks of class and values of DOM
	+ assign ngModel to **local template variable**, `#localTemplateVariableName`, to pass all ngModel values to it.  
	**Creating custom directive for validation**
	+ `ng generate directive max-validator`
	+ change the name for the selector
	+ import `AbstractControl`, `Validator`, `ValidationErrors` from `angular/forms`
	+ implement `Validator`, so we get validate method. e.g `validate(control: AbstractControl): ValidationErrors`
	+ register validation to Module DI by `NG_VALIDATORS` in @directive decoration under `providers`

+ **Submit Form**
	+ assign `ngForm` to local template variable
	+ to disable submit button if form is not valid
		- attribute `[disabled]="!personForm.form.valid"`

+ **ngModel**
	- `ngModel` lets you track the state and validity of your inputs
	- `ngModel` adds CSS classes to your inputs based on their state, whether they have been touched, changed or whether they are valid or not.
	+ Using `#name="ngModel"` in an input element creates a local template variable called #name and assigns the `ngModel` directive to it. You can then use the variable to access the `ngModel` directive properties like `valid`, `pristine`, `touched`, `dirty`, etc.

+ Enabling the **HTTP** Module in app
	- 
	```js
		import { Http, Response } from '@angular/http';
		/*
		Http: to make get, post ,put requests
		Response: is response from http service
		*/
		import { Observable } from 'rxjs/Observable';
		/*
		to use async pattern, replacement of promise
		*/
		import 'rxjs/add/operator/map';
		/*
		importing map operator which helps to transfomrs items into something our app understands!
		*/
	```  

import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person-details',
  template: `
  <section *ngIf="person">
  <h3> You selected {{person.name}} </h3>
  <div>
  {{person.name}} weighs {{person.weight}} pounds, and is {{person.height}} inch tall. </div>
</section>
  `,
  styles: []
})
export class PersonDetailsComponent implements OnInit {
  // to decorate the person property with @Input()
  @Input() person: Person;

  constructor() { }

  ngOnInit() {
  }

}

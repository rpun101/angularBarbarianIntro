import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Person } from '../person';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-person-details',
  template: `
  <section *ngIf="person">
    <h2 style="color:blue"> {{person.name}} </h2>
    <div>
    {{person.name}} weighs {{person.weight}} pounds, and is {{person.height}} inch tall. </div>
  </section>

  <button (click)="gotoPeopleList()"> Back to People List </button>
  `,
  styles: []
})
export class PersonDetailsComponent implements OnInit {
  person: Person;
  sub: any;
  constructor(private peopleService: PeopleService,
            private route: ActivatedRoute,
            private router: Router) {
              
             }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.person = this.peopleService.get(id);
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
  gotoPeopleList(){
    let link = ['/persons'];
    this.router.navigate(link);
   }

}

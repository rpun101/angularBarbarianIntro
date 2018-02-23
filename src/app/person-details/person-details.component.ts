import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Person } from '../person';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styles: []
})
export class PersonDetailsComponent implements OnInit {
  professions: string[] = ['jedi', 'bounty hunter', 'princess', 'sith lord'];
  person: Person;
  sub: any;
  constructor(private peopleService: PeopleService,
            private route: ActivatedRoute,
            private router: Router) {
              
             }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.peopleService.get(id)
        .subscribe(p => this.person = p);
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
  gotoPeopleList(){
    let link = ['/persons'];
    this.router.navigate(link);
   }
  savePersonDetails(){
    //alert(`saved!!! ${JSON.stringify(this.person)}`);
    this.peopleService
      .save(this.person)
      .subscribe(r => console.log(`saved!!! ${JSON.stringify(this.person)}`));
  }

}

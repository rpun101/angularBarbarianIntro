import { Injectable } from '@angular/core';
import { Person } from './person';

const PEOPLE: Person[] = [
  {id:1, name: "Luke Skywalker", height: 177, weight: 70, profession : ''},
  {id:2, name: 'Darth Vader', height: 200, weight: 100, profession : ''},
  {id:3, name: 'Han solo', height: 185, weight: 85, profession : ''},
  {id:4, name: 'Leila SkyDark roamer', height: 165, weight: 90, profession : ''}
];

@Injectable()
export class PeopleService {

  constructor() { }

  getAll(): Person[] {
    return PEOPLE.map(p => this.clone(p));
  }

  get(id:number): Person{
    return this.clone(PEOPLE.find(p => p.id === id));
  }
  
  save(person:Person){
    let originalPerson = PEOPLE.find(p => p.id == person.id);
    if(originalPerson) Object.assign(originalPerson, person);
  }

  private clone(object: any){
    //to avoid sharing the same object references between the different components in the app so that we can simulate “saving” in a way more faithful to reality.
    return JSON.parse(JSON.stringify(object));
  }

}

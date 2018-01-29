import { Injectable } from '@angular/core';
import { Person } from './person';

const PEOPLE: Person[] = [
  {id:1, name: "Luke Skywalker", height: 177, weight: 70},
  {id:2, name: 'Darth Vader', height: 200, weight: 100},
  {id:3, name: 'Han solo', height: 185, weight: 85},
  {id:4, name: 'Leila SkyDark roamer', height: 165, weight: 90}
];

@Injectable()
export class PeopleService {

  constructor() { }

  getAll(): Person[] {
    return PEOPLE;
  }

  get(id:number): Person{
    return PEOPLE.find(p => p.id === id);
  }

}

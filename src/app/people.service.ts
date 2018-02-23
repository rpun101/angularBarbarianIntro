import { Injectable } from '@angular/core';
import { Person } from './person';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

const PEOPLE: Person[] = [
  {id:1, name: "Luke Skywalker", height: 177, weight: 70, profession : ''},
  {id:2, name: 'Darth Vader', height: 200, weight: 100, profession : ''},
  {id:3, name: 'Han solo', height: 185, weight: 85, profession : ''},
  {id:4, name: 'Leila SkyDark roamer', height: 165, weight: 90, profession : ''}
];

@Injectable()
export class PeopleService {
  private baseUrl: string = "https://swapi.co/api";

  constructor(private http: Http) { }

  getAll(): Observable<Person[]> {
    let people$ = this.http
        .get(`${this.baseUrl}/people` , {headers: this.getHeaders()})
        .map(mapPersons);

    return people$;

  }

  private getHeaders(){
    //need this because firefox default is text/html
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  get(id:number): Observable<Person>{
    let person$ = this.http
                      .get(`${this.baseUrl}/people/${id}`,  {headers: this.getHeaders()})
                      .map(mapPerson);
    return person$;
  }
  
  save(person:Person): Observable<Response>{
    //WARNING: this does not work because SWapi is readonly
    return this.http
      .put(`${this.baseUrl}/people/${person.id}`, JSON.stringify(person), {headers: this.getHeaders()});
  }

  private clone(object: any){
    //to avoid sharing the same object references between the different components in the app so that we can simulate “saving” in a way more faithful to reality.
    return JSON.parse(JSON.stringify(object));
  }

}

function mapPerson(response:Response): Person{

  return toPerson(response.json());
}

function mapPersons(response:Response): Person[] {


  return response.json().results.map(toPerson);    
}

function toPerson(r:any):Person {
 let person = <Person>({
   id: extractId(r),
   url: r.url,
   name: r.name,
   weight: Number.parseInt(r.mass),
   height: Number.parseInt(r.height),
 });
 console.log('Parsed person:', person);
 return person;
}

function extractId(personData:any) {
  let extractedId = personData.url.replace('https://swapi.co/api/people/', '').replace('/','');
  return parseInt(extractedId);
}


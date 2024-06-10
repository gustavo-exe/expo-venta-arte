import { Injectable } from '@angular/core';
import { data } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  allProfiles(){
    return data;
  }

  getById(idProfile:string){
    return data.filter(x=> x.idProfile === idProfile)
  }
}

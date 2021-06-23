import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiReferenceService {

  registation:string="api/user/registration";
  login:string="api/user/login";
  constructor() { }
}

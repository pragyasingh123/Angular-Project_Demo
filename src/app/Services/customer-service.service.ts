import { Injectable } from '@angular/core';
import {HttpClientserviceService} from '../utility/http-clientservice.service';
import {ApiReferenceService} from '../utility/api-reference.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(  private httpclientService : HttpClientserviceService, private apiPath:ApiReferenceService) { 

    
  }

  registerCustomer(customerRegisterRequest:any){
    return this.httpclientService.HttpPostRequest(customerRegisterRequest,this.apiPath.registation);
  }
}

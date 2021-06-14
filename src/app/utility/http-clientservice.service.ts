import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { ApiReferenceService } from './api-reference.service';

@Injectable({
  providedIn: 'root'
})
export class HttpClientserviceService {

  constructor(private httpclient:HttpClient) {
   }

   public HttpPostRequest(request:any,apiServicepath:string){

    return this.httpclient.post(environment.apiUrl+ apiServicepath,JSON.stringify(request))
   }

   public HttpGetRequest(apiServicepath:string){
     return this.httpclient.get(environment.apiUrl+apiServicepath);
   }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { LoginRequest } from '../models/login-request';
import { ResponseData } from '../models/common/response';
import { CustomerServiceService } from '../Services/customer-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRequest:LoginRequest
  responseData:ResponseData;
 isSubmission:boolean=false;
 
  constructor(public customerService: CustomerServiceService) { }

   

  ngOnInit(): void {
   
  }

  loginForm: FormGroup= new FormGroup({
    username: new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required]),

  })


  submitForm() {
    this.isSubmission=true;
    if(this.loginForm.valid){
      var loginFormData= this.loginForm.value;
      this.loginRequest= new LoginRequest();
      this.loginRequest.userPassword=loginFormData.password;
      this.loginRequest.userName=loginFormData.username;
      this.customerLogin(this.loginRequest);
    }
  }
   
   customerLogin (loginFormData: any) {
     this.customerService.loginCustomer(this.loginRequest).subscribe(res =>{

      if(res!=null){
        this.responseData= res as ResponseData;
        if(this.responseData.responseCode=="200"){


        }
      }
     })

   }

  

  

}

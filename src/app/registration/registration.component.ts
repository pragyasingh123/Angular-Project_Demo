import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { RegistrationRequest } from 'src/app/models/registration-request';
import { PasswordStrengthValidator } from "src/app/utility/custom-validation/password-strength.validation";
import { RegistationResponse } from 'src/app/models/registation-response';
import { ResponseData } from 'src/app/models/common/response';
import {CustomerServiceService} from 'src/app/Services/customer-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  IsShow:boolean;
  customerRegisterRequest: RegistrationRequest;
  customerRegisterResponse: RegistationResponse;
  isSubmitted:boolean = false;
  isSuccessfullySubmitted =false;
  responseData: ResponseData;
  constructor(private formbuilder: FormBuilder, public customerService:CustomerServiceService) {
    this.IsShow=false;
   }

  ngOnInit(): void {
  }

  registrationForm:any = this.formbuilder.group({
     userTitle :new FormControl(''),
    firstName:new FormControl('', [Validators.required]),
    surname:new FormControl('', [Validators.required]),
    email:new FormControl('', [Validators.required, Validators.email]),
    cnf_email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required, Validators.minLength(8),PasswordStrengthValidator]),
    cnf_password:new FormControl('', [Validators.required, Validators.minLength(8)]),
    postcode:new FormControl('')
   
  });
  ShowDiv(){
    this.IsShow=true;
  }


  onRegistrationSubmit(){
  this.isSubmitted=true;
  if(this.registrationForm.valid){
    var data =this.registrationForm.value;
    this.customerRegisterRequest = new RegistrationRequest();
    var registerFormData = this.registrationForm.value;
    this.customerRegisterRequest.emailID = registerFormData.email;
    this.customerRegisterRequest.firstName = registerFormData.firstName;
    this.customerRegisterRequest.lastName = registerFormData.surname;
    this.customerRegisterRequest.password = registerFormData.password;
    this.customerRegisterRequest.country=registerFormData.userTitle;
    this.customerRegisterRequest.city=registerFormData.postcode;
   this.registerUser(this.customerRegisterRequest)
  }
  }
 

  registerUser(CustomerRegisterRequest:any){
    this.customerService.registerCustomer(this.customerRegisterRequest).subscribe(res=>{
      if(res!=null){
        this.responseData= res as ResponseData;
        this.isSuccessfullySubmitted=true;
      }
    })
 
  }







  // registerCustomer(CustomerRegisterRequest: any) {
  //   this.customerService.registerCustomer(this.customerRegisterRequest).subscribe(res => {
  //     if (res != null) {
  //       this.responseData = res as ResponseData;
  //       if (this.responseData.responseCode == '200') {
  //         this.customerRegisterResponse = this.responseData.data;
  //         if (this.customerRegisterResponse.registrationsuccessful) {
          
           

  //         }
  //       }
     
  //     }
  //   });


 // }
 


}

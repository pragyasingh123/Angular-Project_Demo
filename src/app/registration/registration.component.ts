import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { RegistrationRequest } from 'src/app/models/registration-request';
import { PasswordStrengthValidator } from "src/app/utility/custom-validation/password-strength.validation";
import { RegistationResponse } from 'src/app/models/registation-response';
import { ResponseData } from 'src/app/models/common/response';

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

  responseData: ResponseData;
  constructor(private formbuilder: FormBuilder) {
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
    this.customerRegisterRequest.email = registerFormData.email;
    this.customerRegisterRequest.firstname = registerFormData.firstName;
    this.customerRegisterRequest.lastname = registerFormData.surname;
    this.customerRegisterRequest.title = "Miss";
    this.customerRegisterRequest.password = registerFormData.password;
   
  }
  }
 

  registerUser(){
    

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

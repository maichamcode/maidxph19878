import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import {FormBuilder} from '@angular/forms'
import { IAuth } from 'src/interfaceAuth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor (private authService:AuthService,private router:Router,private fb:FormBuilder){}
  form = this.fb.group({
   email:[''],
   password:['']
  })

  onHandleSubmit(){
    if(this.form.valid){
      const product:IAuth = {
        email:this.form.value.email || "",
        password:this.form.value.password || "",
      }
      this.authService.signUp(product).subscribe(data=>{
        this.router.navigate(['/'])
        alert("Dang ky thanh cong")
      })
    }

  }
}


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import {FormBuilder} from '@angular/forms'
import { IAuth } from 'src/interfaceAuth';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
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
      this.authService.signIn(product).subscribe(data=>{
        this.router.navigate(['product'])
        alert("Dang nhap thanh cong")
      })
    }

  }
}

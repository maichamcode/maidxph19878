import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/services/product.service';
import {FormBuilder,Validators} from '@angular/forms'
import { IProduct } from 'src/interface';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  constructor (private productService:ProductService,private router:Router,private fb:FormBuilder){}
  form = this.fb.group({
    name:['',[Validators.required]],
    image:[''],
    price:[0],
    quality:[0],
    desc:['']
  })
  //
  get validate (){
    return this.form.controls
  }


  onHandleSubmit(){
    if(this.form.valid){
      const product:IProduct = {
        name:this.form.value.name || "",
        image:this.form.value.image || "",
        price:this.form.value.price || 0,
        quality:this.form.value.quality || 0,
        desc:this.form.value.desc || "",
      }
      this.productService.addProduct(product).subscribe(data=>{
        this.router.navigate(['product'])
        alert("Them thanh cong")
      })
    }

  }
}

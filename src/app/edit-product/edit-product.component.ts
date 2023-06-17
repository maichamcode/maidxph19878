import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/services/product.service';
import {FormBuilder} from '@angular/forms'
import { IProduct } from 'src/interface';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  product:IProduct = {
    name:"",
    image:"",
    price:0,
    quality:0,
    desc:""
  }
  form = this.fb.group({
    name:[''],
    image:[''],
    price:[0],
    quality:[0],
    desc:['']
  })
  constructor (private productService:ProductService,private route:ActivatedRoute,private router:Router,private fb:FormBuilder){
    this.route.paramMap.subscribe(param=>{
      const id = Number(param.get('id'))
      this.productService.getProductById(id).subscribe(data=>{
        console.log(id);
        this.product = data
        this.form.patchValue({
          name:this.product.name,
          image:this.product.image,
          price:this.product.price,
          quality:this.product.quality,
          desc:this.product.desc,
        })
      })
    })
  }


  onHandleSubmit(){
    if(this.form.valid){
      const product:IProduct = {
        id:this.product.id,
        name:this.form.value.name || "",
        image:this.form.value.image || "",
        price:this.form.value.price || 0,
        quality:this.form.value.quality || 0,
        desc:this.form.value.desc || "",
      }
      this.productService.editProduct(product).subscribe(data=>{
        this.router.navigate(['product'])
        alert("Sua thanh cong")
      })
    }

  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // productId: string | undefined;
  // product: any;
  // productForm: FormGroup | undefined;

  // constructor(
  //   private route: ActivatedRoute,
  //   private http: HttpClient,
  //   private formBuilder: FormBuilder
  // ) { }

  // ngOnInit(): void {
  //   this.productId = this.route.snapshot.paramMap.get('id');
  //   this.getProduct();
  //   this.productForm = this.formBuilder.group({
  //     name: [''],
  //     price: [''],
  //     stars: [''],
  //     cookTime: [''],
  //     imageUrl: [''],
  //     category: ['']
  //   });
  // }

  // getProduct() {
  //   this.http.get(`/api/foods/${this.productId}`)
  //     .subscribe((data: any) => {
  //       this.product = data;
  //       this.productForm.patchValue({
  //         name: data.name,
  //         price: data.price,
  //         stars: data.stars,
  //         cookTime: data.cookTime,
  //         imageUrl: data.imageUrl,
  //         category: data.category
  //       });
  //     });
  // }

  // onSubmit() {
  //   const updatedProduct = {
  //     name: this.productForm.get('name').value,
  //     price: this.productForm.get('price').value,
  //     stars: this.productForm.get('stars').value,
  //     cookTime: this.productForm.get('cookTime').value,
  //     imageUrl: this.productForm.get('imageUrl').value,
  //     category: this.productForm.get('category').value
  //   };
  //   this.http.put(`/api/products/${this.productId}`, updatedProduct)
  //     .subscribe((data: any) => {
  //       console.log('Product updated successfully');
  //       // show success message to user
  //     }, error => {
  //       console.error('Error updating product:', error);
  //       // show error message to user
  //     });
  // }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { FOODS_URL } from 'src/app/shared/constants/uls';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  foods:Food[] =[];
 
    name: string | undefined  ;
  price: number | undefined;
  tags: string | undefined;
 imageUrl: string | undefined;
 stars: number | undefined;
 origins: string[] | undefined;
 cookTime:string  | undefined;
 
 selectedFile: File | undefined;
  constructor(private http: HttpClient,
    private foodService: FoodService, 
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer) {
    let foodsObservalbe:Observable<Food[]>;
    }
    

    onSubmit() {
    const foods = {
      name: this.name,
      tags: this.tags,
       price: this.price,
      imageUrl: this.imageUrl,
      stars:this.stars,
      origins:this.origins,
       cookTime:this.cookTime,
    };
 this.http.post(FOODS_URL,foods).subscribe(response => {
         console.log('Product created successfully');
        },
        (error) => {
          console.error('Error submitting form:', error);
        });
  }

  // onFileSelected(event: any) {
  //   this.selectedFile = event.target.files[0];
  // }
  

  ngOnInit(): void {
    this.foodService.getAll().subscribe((foods) => {
      this.foods = foods;
    });
  }
}

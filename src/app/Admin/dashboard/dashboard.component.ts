import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit{
    foods:Food[] =[];
    constructor(private foodService: FoodService, activatedRoute: ActivatedRoute,private http: HttpClient) {
      let foodsObservalbe:Observable<Food[]>;
      activatedRoute.params.subscribe((params) =>
      {
        if (params.searchTerm)
        foodsObservalbe = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
          else if (params.tag)
          foodsObservalbe = this.foodService.getAllFoodsByTag(params.tag);
          else  foodsObservalbe = foodService.getAll();
          foodsObservalbe.subscribe((serverFoods) => {
            this.foods = serverFoods;
          })
        })
      }
    ngOnInit(): void {
      this.loadProducts();
    }
    deleteProduct(id: string): void {
      this.foodService.deleteProduct(id)
        .subscribe(
          () => this.loadProducts(),
          error => console.error(error)
        );
    }
    private loadProducts(): void {
      // Load the product list from the API
    } 
}

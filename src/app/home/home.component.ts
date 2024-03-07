import { Component, OnInit } from '@angular/core';
import { RecipeapiService } from '../recipeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  cuisineName:string=""
  recipeName:string=""
  recipeList: any[] = [];
  filterData:any=""
  p: number = 1;



  constructor(private rs:RecipeapiService){}

  ngOnInit(): void {

    this.rs.getRecipe().subscribe((data:any)=>{
      this.recipeList = data.recipes;
      console.log(this.recipeList);
    
  })

}

getMealTypes(): string[] {
  const mealTypesSet = new Set<string>();
  this.recipeList.forEach(recipe => {
      mealTypesSet.add(recipe.mealType);
  });
  return Array.from(mealTypesSet);
}

get pagedRecipeList() {
  return this.recipeList.slice((this.p - 1) * 10, this.p * 10);
}



getCuisines(): string[] {
    const cuisinesSet = new Set<string>();
    this.recipeList.forEach(recipe => {
        cuisinesSet.add(recipe.cuisine);
    });
    return Array.from(cuisinesSet);
}

}




  
  
  


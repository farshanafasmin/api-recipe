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

changeFilterData(data: any) {
  this.filterData = data
}
}




  
  
  


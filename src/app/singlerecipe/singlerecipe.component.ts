import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeapiService } from '../recipeapi.service';

@Component({
  selector: 'app-singlerecipe',
  templateUrl: './singlerecipe.component.html',
  styleUrls: ['./singlerecipe.component.css']
})
export class SinglerecipeComponent implements OnInit {
  id:any=""
  singleRecipe:any={}
constructor(private route:ActivatedRoute,private rs:RecipeapiService){}

ngOnInit(): void {
  this.route.params.subscribe((data:any)=>{
    this.id=data.id
    console.log(this.id);
    
    this.rs.getRecipe().subscribe((response:any)=>{
console.log(response);

      this.singleRecipe=response.recipes.find((i:any)=>i.id==this.id)
      console.log(this.singleRecipe);
      
    })

  })
}

}

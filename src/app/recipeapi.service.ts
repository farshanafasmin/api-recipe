import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeapiService {

  constructor(private http:HttpClient) { }

  serviceData:number=1000

  serviceMethod(){
    alert("service method worked")
  }
  
  getRecipe():Observable<any>{
    return this.http.get('https://dummyjson.com/recipes')
  }
}





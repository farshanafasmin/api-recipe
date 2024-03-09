import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allRecipeArray:any[],filterStatus:string): any {
    
    if(!allRecipeArray || !filterStatus){
      return allRecipeArray
    }
    else{

      return allRecipeArray.filter((item:any)=>item.mealType==filterStatus)
      
 
    }
  }
 
}
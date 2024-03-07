import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recipesearch'
})
export class RecipesearchPipe implements PipeTransform {

  transform(DataArray: any[], searchString: string, searchKey: string): any{

    const result:any=[]

    if (!DataArray || !searchString || !searchKey) {

      return DataArray

    }
    else {
      DataArray.forEach((item: any) => {
        if (item.name.trim().toLowerCase().includes(searchString.trim().toLowerCase())) {

          result.push(item)
        }
        if (item.cuisine.trim().toLowerCase().includes(searchString.trim().toLowerCase())) {

          result.push(item)
        }

      })

    }

    return result

  }

}

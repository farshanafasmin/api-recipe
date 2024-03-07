import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(allRecipe: any[], filterData: any): any {
    console.log("Filter Data:", filterData);

    if (!allRecipe) {
        console.log("No recipes available.");
        return [];
    }

    // Filter by meal type if filterData is provided
    if (filterData && filterData.mealType) {
        const filteredRecipes = allRecipe.filter(item => {
            console.log("Item Meal Type:", item.mealType);
            return item.mealType === filterData.mealType;
        });
        console.log("Filtered Recipes:", filteredRecipes);
        return filteredRecipes;
    } else {
        console.log("No meal type filter applied.");
        return allRecipe;
    }
}

}

import { IngredientModel } from "./IngredientModel";

export class RecipeModel {

    constructor(
      public name: string,
      public description: string,
      public imagePath: string,
      public ingredients: IngredientModel[] = []) {

    }

}

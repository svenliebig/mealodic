# Recipes

Users can create meal recipes and assign them to meal plans or to derive shopping lists from them. Recipes contain ingredients, which will be derived directly from the recipe steps. The user only has to write the recipe steps and the ingredients will be automatically determined.

Recipes are globally available to all users and families and are treated as a shared resource.

## Creating a Recipe

When a user creates or edits a recipe they can give the recipe a name, a description (origin, cuisine, etc.), upload pictures and configure the recipe steps. The user can just use human language to describe the recipe, with the help of a local LLM we will scan the steps and convert the recipe into a structured format that we will call [RMD (Recipe Markdown)](#recipe-markdown).

## Serving Units

When the user creates a recipe they can choose a serving unit for the recipe. For example the user can decide the recipe is 2 servings with the amounts they selected for their ingredients. Based on this we can calculate the nutritions per meal once the ingredients have nutritional information and user can scale the recipe to their needs.

## Recipe Markdown

The structure for recipes will be be internal, the user only see's text when they write the recipe steps. The LLM will then convert this into a structured format text we call RMD (Recipe Markdown).

### Ingredient References

In RMD it's possible to reference ingredients by names. Names of ingredients need to be unique in the application, for example `Lentils`, `Lentils (brown)`, `Lentils (green)`, etc. The user will just write text and on save we put the input into an LLM.

The reference will look like this: `[@ingredient](INGREDIENT_ID;INGREDIENT_AMOUNT;INGREDIENT_UNIT)`

The INGREDIENT_ID is a unique identifier for the ingredient, the INGREDIENT_AMOUNT is the amount of the ingredient and the INGREDIENT_UNIT is the selected unit of the ingredient.

#### Ingredient Units

The user will input any kind of unit they may like, for example `cup`, `tbsp`, `cloves`, etc. The LLM will convert this into a standard unit if possible and the user can switch between the shown units if they wish.

Cups are converted to liter or milliliters and shown as such.

Example:

User Input: `Add 1 cup of Lentils (brown), 1 tbsp of Olive Oil and 2 cloves of fine chopped Garlic, mix and cook for 20 minutes.`
Processed Input: `Add [@ingredient](132412-131;1;liter), [@ingredient](132412-132;1;tbsp) and fine chopped [@ingredient](132412-133;2;cloves), mix and cook for 20 minutes.`

When goes again into the edit view of the recipe, the text will be converted back to a slightly modified version of the original input. For example: `Add 1 liter of Lentils (brown), 1 tbsp of Olive Oil and fine chopped Garlic (2 cloves), mix and cook for 20 minutes.`

If the user just references an ingredient that was processed before, for example: `Add some of the garlic we chopped previously`, the LLM will not add units and amounts, however it will reference the ingredient by name. Like this: `Add some of the [@ingredient](132412-133) we chopped previously, mix and cook for 20 minutes.`
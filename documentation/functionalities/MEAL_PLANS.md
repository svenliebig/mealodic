# Meal Plans

Individual users or families can create different meal plans that show the user what they should eat on what day. A meal plan can have up to five meals per day, maybe more in the future. A meal plan contains seven days (weekly by default), the user can choose the starting week day of the meal plan.

## Creating

When creating a meal plan the user can give the meal plan a name and is forwarded to the meal plan UI. In the UI the user can add meals to the meal plan by dragging and dropping them into the calendar view. The user can also view the meals details by clicking on them, on go to the recipe view/edit view through the UI in the meal details.

The user can choose the portions (servings) for each meal, the application will calculate the total amount of ingredients needed for the meal plan based on the servings and the ingredients in the recipes.

### Adding Meals (Recipes)

The user can add recipes from a recipe menu, the menu will show all recipes the user and family member have created as well as all favorites and custom lists the user created. The user can drag and drop the recipes into the calendar view.

## Meal Types

The meal plan can have different meal types, for example:

- Breakfast
- Morning Snack
- Lunch
- Afternoon Snack
- Dinner

Depending on the time of the day the meal plan will have different meal types.

## Missing Recipes

If recipes are referenced in the meal plan that got deleted by the author or by an admin, the meal plan will show a warning instead in place of the meal position and the user can choose to remove the recipe from the meal plan.

## Shopping Lists

When the user creates a shopping list from a meal plan, the application will generate a shopping list based on the ingredients of the meals in the meal plan. The shopping list will show the ingredients and the amount of the ingredients needed. The user can also edit the shopping list by adding or removing ingredients or changing the amount of the ingredients.

### Calculating Ingredients

The shopping list will go through all the recipes in the meal plan and calculate the total amount of ingredients needed for the meal plan. The application will also calculate the total amount of ingredients needed for the meal plan based on the servings and the ingredients in the recipes. For example if two tomatoes are need on monday and 4 on friday, the shopping list will show 6 tomatoes.

### Sorting

The shopping list will be sorted by the ingredient type, for example all vegetables will be at the top, then all fruits, then all meats, etc.

### Adding Ingredients

The user can add ingredients by referencing or just plain text the user wants to add. We don't want to be too restrictive here so the use can add special needs reminder if they need to.

### Ignoring Ingredients

The user can ignore specific ingredients from shopping lists entirely by clicking on the ingredient and selecting the `Ignore` option. The ingredient will then be removed from the shopping list and future shopping lists will not include it. The user can see all it's ignored ingredients in the profile settings under Shopping List > Ignored Ingredients.
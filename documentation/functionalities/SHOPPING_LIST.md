# Shopping List

When the user creates a shopping list from a meal plan, the application will generate a shopping list based on the ingredients of the meals in the meal plan. The shopping list will show the ingredients and the amount of the ingredients needed. The user can also edit the shopping list by adding or removing ingredients or changing the amount of the ingredients.

## Calculating Ingredients

The shopping list will go through all the recipes in the meal plan and calculate the total amount of ingredients needed for the meal plan. The application will also calculate the total amount of ingredients needed for the meal plan based on the servings and the ingredients in the recipes. For example if two tomatoes are need on monday and 4 on friday, the shopping list will show 6 tomatoes.

## Sorting

The shopping list will be sorted by the ingredient type, for example all vegetables will be at the top, then all fruits, then all meats, etc.

## Adding Ingredients

The user can add ingredients by referencing or just plain text the user wants to add. We don't want to be too restrictive here so the use can add special needs reminder if they need to.

## Ignoring Ingredients / Pantry management

The user can ignore specific ingredients from shopping lists entirely by clicking on the ingredient and selecting the `Ignore` option. The ingredient will then be removed from the shopping list and future shopping lists will not include it. The user can see all it's ignored ingredients in the profile settings under Shopping List > Ignored Ingredients. This feature is useful to manage things that the user will always have at home.

## Deleting Shopping Lists

The user can delete a shopping lists in the shopping list section. If the shopping list has unchecked items, the user will be asked to confirm the deletion.

## Checking Items

The user can check items off the shopping list by clicking on the item and selecting the `Check` option. The item will then be shown  strikethrough and dimmed and moved to the bottom of it's category. Items will not be removed from a shopping lists in that sense but only marked as checked. When the user has everything on the shopping list checked, the shopping list will be marked as completed and shown in a different color in the bottom of the shopping list section. The user can delete the shopping list without a warning.
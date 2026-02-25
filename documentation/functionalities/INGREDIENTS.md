# Ingredients

Ingredients can be created individually in the ingredients section or when creating a recipe and adding a new ingredient that the application doesn't know yet. Ingredients are globally available to all users and families and are treated as a shared resource.

## Ingredient Types

Ingredients can have types, for example:

- 🥩 Meat
- 🐟 Fish
- 🥬 Vegetable
- 🍎 Fruit
- 🧂 Spice
- 🌿 Herb
- 🌾 Grain

The types are determined automatically by a local LLM. Not every ingredient has to have a type, for example a `Egg` would not have a type. The LLM will prefill the type based on the ingredient name and the user can change it if they wish.

## Deletion

Only admins can delete ingredients. When deleting an ingredient, the user is informed which recipes are affected by the deletion. If any recipes are affected, the user needs to select a replacement ingredient. If no replacement ingredient is selected, the ingredient can not be deleted.

When deleted the ingredient is marked as deleted and will not be shown in any shopping lists or meal plans. The admin can see the deleted ingredients in the admin panel under Ingredients > Deleted Ingredients and restore them if they wish.

## Future

These are features the application should be open for in the future and therefor should be designed in a way that it's easy to add these features later.

### Nutritional Information

Ingredients should have nutritional information, so the application can calculate the calories, protein, carbohydrates, fat, etc. for the ingredient and the entire recipe later.

### Spoiling

Ingredients should have a spoiling time, so the application can calculate the expiration date for the ingredient uncooked. Not every ingredient needs an expiry time, for example salt would not need one, but eggs could have an expiry time of that is appropriate for the ingredient. The idea is, when the user creates a meal plan and a shopping list, than the application can give warnings if the for example the user wants to shop for fish on monday, but cooks it on saturday, than the application can warn the user that the fish might be spoiled by then.

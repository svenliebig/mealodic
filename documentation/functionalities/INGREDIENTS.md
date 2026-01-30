# Ingredients

Ingredients can be created individually in the ingredients section or when creating a recipe and adding a new ingredient that the application doesn't know yet.

## Ingredient Types

Ingredients can have types, for example:

- 🥩 Meat
- 🐟 Fish
- 🥬 Vegetable
- 🍎 Fruit
- 🧂 Spice
- 🌿 Herb
- 🌾 Grain

The types are determined automatically be a local LLM. Not every ingredient has to have a type, for example a `Egg` would not have a type.

## Future

These are features the application should be open for in the future and therefor should be designed in a way that it's easy to add these features later.

### Nutritional Information

Ingredients should have nutritional information, so the application can calculate the calories, protein, carbohydrates, fat, etc. for the ingredient and the entire recipe later.

### Spoiling

Ingredients should have a spoiling time, so the application can calculate the expiration date for the ingredient uncooked. Not every ingredient needs an expiry time, for example salt would not need one, but eggs could have an expiry time of that is appropriate for the ingredient. The idea is, when the user creates a meal plan and a shopping list, than the application can give warnings if the for example the user wants to shop for fish on monday, but cooks it on saturday, than the application can warn the user that the fish might be spoiled by then.
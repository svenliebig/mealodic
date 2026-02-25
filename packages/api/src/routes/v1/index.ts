import { Router } from "express";
import healthRouter from "./health.js";
import recipesRouter from "./recipes.js";
import ingredientsRouter from "./ingredients.js";
import familiesRouter from "./families.js";
import mealPlansRouter from "./meal-plans.js";
import shoppingListsRouter from "./shopping-lists.js";
import usersRouter from "./users.js";

const router = Router();

router.use("/health", healthRouter);
router.use("/recipes", recipesRouter);
router.use("/ingredients", ingredientsRouter);
router.use("/families", familiesRouter);
router.use("/meal-plans", mealPlansRouter);
router.use("/shopping-lists", shoppingListsRouter);
router.use("/users", usersRouter);

export default router;

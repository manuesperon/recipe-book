import { Prisma } from '@prisma/client';

export type IconProps = {
  width?: number;
  height?: number;
  className?: string;
};

const recipeWithIngredients = Prisma.validator<Prisma.RecipeDefaultArgs>()({
  select: {
    title: true,
    description: true,
    duration: true,
    image: true,
    ingredients: {
      select: { amount: true, unit: { select: { abbreviation: true, label: true } }, ingredient: true },
    },
  },
});

// Custom Recipet type that includes ingredients, based on query defined in recipeWithIngredients.
export type RecipeWithIngredients = Prisma.RecipeGetPayload<typeof recipeWithIngredients>;

const ingredientWithUnit = Prisma.validator<Prisma.IngredientsOnRecipesDefaultArgs>()({
  select: { amount: true, unit: { select: { abbreviation: true, label: true } }, ingredient: true },
});
export type IngredientWithUnit = Prisma.IngredientsOnRecipesGetPayload<typeof ingredientWithUnit>;

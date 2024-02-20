import { apiUrl } from '@/utils/constants';
import { Recipe } from '@prisma/client';
import RecipeCard from './RecipeCard';

type RecipeListProps = {
  featured?: boolean;
};

const getFeaturedRecipes = async (featured: boolean) => {
  const res = await fetch(`${apiUrl}/recipes?featured=${featured}`, { cache: 'no-store' });
  if (!res.ok) return null;

  return res.json();
};

const RecipeList = async ({ featured = false }: RecipeListProps) => {
  const recipes = await getFeaturedRecipes(featured);

  return (
    <>
      {recipes === null ? (
        <p className="text-xl">Sorry, there was an error fetching the recipes, please reload the page.</p>
      ) : (
        <div className="w-[100%] grid gap-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {recipes?.map((recipe: Recipe) => (
            <RecipeCard recipe={recipe} key={recipe.id}></RecipeCard>
          ))}
        </div>
      )}
    </>
  );
};

export default RecipeList;

import ClockIcon from '@/components/icons/ClockIcon';
import Button from '@/components/ui/Button';
import Checkbox from '@/components/ui/Checkbox';
import { IngredientWithUnit, RecipeWithIngredients } from '@/types';
import { apiUrl } from '@/utils/constants';
import { getFormattedIngredient, getTimeString } from '@/utils/formatting';
import Image from 'next/image';

const getRecipe = async (id: string) => {
  const res = await fetch(`${apiUrl}/recipes/${id}`, { cache: 'no-store' });
  if (!res.ok) return null;

  return res.json();
};

const RecipePage = async ({ params }: { params: { id: string } }) => {
  const recipe = await getRecipe(params.id);
  const { title, image, ingredients, description, duration } = recipe as RecipeWithIngredients;

  return (
    <div className="flex flex-col items-center">
      <div className="w-[100%] xl:flex ">
        <div className="flex basis-1/2 flex-col gap-8 xl:px-8">
          <h1 className="relative w-fit after:absolute after:-bottom-4 after:left-0 after:h-2 after:animate-slideFromLeft after:bg-yellow-main">
            {title}
          </h1>
          <div className="relative h-[200px] w-[100%] overflow-hidden md:h-[400px] xl:hidden">
            <Image
              src={image ?? '/recipe-placeholder.png'}
              alt="recipe-photo"
              fill={true}
              className="w-[100%] object-cover"
            />
          </div>
          <div>
            <p className="text-xl italic">{description}</p>
            <div className="mt-2 flex items-baseline">
              <ClockIcon height={10} width={10} className="mr-2 fill-cream transition-all duration-500" />
              <span>{getTimeString(duration)}</span>
            </div>
          </div>

          <div className="w-[100%] border border-cream"></div>

          <div>
            <h2>Ingredient list</h2>
            <p className="mt-2 text-xl italic">Make sure you have everything before you start cooking</p>
            <div className="mt-4 border border-dashed border-yellow-main p-4">
              {ingredients.map(({ ingredient: { id, name }, amount, unit }: IngredientWithUnit) => (
                <Checkbox key={id} label={getFormattedIngredient(name, amount, unit.abbreviation ?? '')} />
              ))}
            </div>
          </div>
          <Button className="mx-auto w-[250px]">Start cooking</Button>
        </div>
        <div className="relative hidden basis-1/2 px-2 xl:block">
          <Image
            src={image ?? '/recipe-placeholder.png'}
            alt="recipe-photo"
            fill={true}
            className="w-[100%] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RecipePage;

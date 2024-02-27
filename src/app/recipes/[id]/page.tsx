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
        <div className="xl:px-8 basis-1/2 flex flex-col gap-8">
          <h1 className="relative w-fit after:animate-slideFromLeft after:absolute after:bg-yellow-main after:h-2 after:-bottom-4 after:left-0">
            {title}
          </h1>
          <div className="md:h-[400px] h-[200px] w-[100%] overflow-hidden relative xl:hidden">
            <Image
              src={image ?? '/recipe-placeholder.png'}
              alt="recipe-photo"
              fill={true}
              className="w-[100%] object-cover"
            />
          </div>
          <div>
            <p className="text-xl italic">{description}</p>
            <div className="flex items-baseline mt-2">
              <ClockIcon height={10} width={10} className="mr-2 transition-all duration-500 fill-cream" />
              <span>{getTimeString(duration)}</span>
            </div>
          </div>

          <div className="w-[100%] border border-cream"></div>

          <div>
            <h2>Ingredient list</h2>
            <p className="italic text-xl mt-2">Make sure you have everything before you start cooking</p>
            <div className="border border-dashed border-yellow-main mt-4 p-4">
              {ingredients.map(({ ingredient: { id, name }, amount, unit }: IngredientWithUnit) => (
                <Checkbox key={id} label={getFormattedIngredient(name, amount, unit.abbreviation ?? '')} />
              ))}
            </div>
          </div>
          <Button className="w-[250px] mx-auto">Start cooking</Button>
        </div>
        <div className="px-2 basis-1/2 xl:block hidden relative">
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

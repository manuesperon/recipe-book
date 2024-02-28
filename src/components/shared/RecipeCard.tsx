import { Recipe } from '@prisma/client';
import Image from 'next/image';
import ClockIcon from '../icons/ClockIcon';
import Link from 'next/link';
import { getTimeString } from '@/utils/formatting';

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const { id, title, image, description, duration } = recipe;

  const titleHeadingStyles =
    'title relative mb-2 w-fit  origin-left overflow-visible bg-underline bg-[length:0_5px] bg-[0_100%] bg-no-repeat pb-2 text-yellow-main transition-all';

  return (
    <Link
      href={`/recipes/${id}`}
      className="flex w-[100%] max-w-[1000px] cursor-pointer flex-col border-b border-cream shadow-xl duration-300 hover:border-yellow-main [&_.title]:hover:bg-[length:100%_5px]"
    >
      <Image
        src={image ?? '/recipe-placeholder.png'}
        width={150}
        height={150}
        alt="recipe-photo"
        className="relative w-[100%] shadow-xl"
      />
      <div className="flex flex-1 flex-col justify-between gap-2 py-2 text-left lg:py-6">
        <div>
          <h2 className={titleHeadingStyles}>{title}</h2>
          <p className="line-clamp-2 text-lg lg:text-xl">{description}</p>
        </div>
        <div className="flex items-baseline">
          <ClockIcon height={10} width={10} className="mr-2 fill-cream transition-all duration-500" />
          <span>{getTimeString(duration)}</span>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;

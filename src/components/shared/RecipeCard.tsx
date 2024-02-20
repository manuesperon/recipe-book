import { Recipe } from '@prisma/client';
import Image from 'next/image';
import ClockIcon from '../icons/ClockIcon';
import Link from 'next/link';
import { getTimeString } from '@/utils/formatting';

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const { id, title, description, duration } = recipe;

  const titleHeadingStyles =
    'title text-yellow-main mb-2 pb-2  w-fit relative overflow-visible bg-underline bg-no-repeat bg-[length:0_5px] bg-[0_100%] transition-all origin-left';

  return (
    <Link
      href={`/recipes/${id}`}
      className="flex flex-col w-[100%] max-w-[1000px] shadow-xl border-b border-cream cursor-pointer duration-300 hover:border-yellow-main [&_.title]:hover:bg-[length:100%_5px]"
    >
      <div className="flex flex-col justify-between flex-1 gap-2 py-2 text-left lg:py-6">
        <div>
          <h2 className={titleHeadingStyles}>{title}</h2>
          <p className="text-lg lg:text-xl line-clamp-2">{description}</p>
        </div>
        <div className="flex items-baseline">
          <ClockIcon height={10} width={10} className="mr-2 transition-all duration-500 fill-cream" />
          <span>{getTimeString(duration)}</span>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;

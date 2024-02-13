import Link from 'next/link';
import { Sacramento } from 'next/font/google';
import PlusIcon from '../icons/PlusIcon';
import BookIcon from '../icons/BookIcon';

const sacramento = Sacramento({ subsets: ['latin'], weight: ['400'] });

const Header = () => {
  const headerItemStyles =
    'relative after:w-[100%] after:transition after:ease-in-out after:absolute after:scale-x-0 after:origin-center after:bg-yellow-main after:h-[2px] after:left-0 after:-bottom-1';
  return (
    <header className="h-16 bg-grey-dark fixed w-[100%] z-10 flex justify-around items-center border-b-2 border-yellow-main">
      <Link className={`text-2xl font-bold ${sacramento.className}`} href="/">
        <div className="text-yellow-main">Recipe Book</div>
      </Link>
      <div className="flex items-center">
        <Link className="flex items-center mr-4 [&>span]:hover:after:scale-x-100" href="/recipes">
          <BookIcon className="fill-cream mr-1" width={14} height={14} />
          <span className={headerItemStyles}>All recipes</span>
        </Link>
        <Link
          className="flex items-center [&>svg]:hover:rotate-180 [&>span]:hover:after:scale-x-100"
          href="/add-recipe"
        >
          <PlusIcon className="fill-cream mr-1 transition-all duration-500" width={14} height={14} />
          <span className={headerItemStyles}>Add new recipe</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;

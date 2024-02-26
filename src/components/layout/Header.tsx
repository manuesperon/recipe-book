'use client';

import Link from 'next/link';

import { Sacramento } from 'next/font/google';

import PlusIcon from '../icons/PlusIcon';
import BookIcon from '../icons/BookIcon';
import XIcon from '../icons/XIcon';
import BurgerIcon from '../icons/BurgerIcon';

import { useState } from 'react';
import clsx from 'clsx';

const sacramento = Sacramento({ subsets: ['latin'], weight: ['400'] });

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const headerItemStyles =
    'relative after:w-[100%] after:transition after:ease-in-out after:absolute after:scale-x-0 after:origin-center after:bg-yellow-main after:h-[2px] after:left-0 after:-bottom-1';
  return (
    <header className="h-16 bg-grey-dark fixed w-[100%] z-10 flex sm:justify-around justify-between sm:px-0 px-4 items-center border-b-2 border-yellow-main">
      <Link className={`text-2xl font-bold ${sacramento.className}`} href="/">
        <div className="text-yellow-main">Recipe Book</div>
      </Link>
      <div className="items-center hidden sm:flex">
        <Link className="flex items-center mr-4 [&>span]:hover:after:scale-x-100" href="/recipes">
          <BookIcon className="mr-1 fill-cream" width={14} height={14} />
          <span className={headerItemStyles}>All recipes</span>
        </Link>
        <Link
          className="flex items-center [&>svg]:hover:rotate-180 [&>span]:hover:after:scale-x-100"
          href="/add-recipe"
        >
          <PlusIcon className="mr-1 transition-all duration-500 fill-cream" width={14} height={14} />
          <span className={headerItemStyles}>Add new recipe</span>
        </Link>
      </div>

      {/* Mobile menu */}
      <button className="block rounded-full sm:hidden padding-4" onClick={() => setShowMobileMenu(!showMobileMenu)}>
        {showMobileMenu ? (
          <XIcon width={20} height={20} className="fill-cream" />
        ) : (
          <BurgerIcon width={20} height={20} className="fill-cream" />
        )}
      </button>
      <div
        className={clsx(
          'absolute left-0 right-0 py-4 overflow-hidden transition-all border-b-2 bg-grey-dark border-yellow-main px-9 sm:hidden',
          {
            'h-36 top-16': showMobileMenu,
            'h-0 -top-20': !showMobileMenu,
          },
        )}
      >
        <div className="flex flex-col justify-around h-[100%]">
          <Link className="flex items-center" href="/recipes">
            <BookIcon className="mr-1 fill-cream" width={16} height={16} />
            <span className="text-xl">All recipes</span>
          </Link>
          <Link className="flex items-center" href="/add-recipe">
            <PlusIcon className="mr-1 transition-all duration-500 fill-cream" width={16} height={16} />
            <span className="text-xl">Add new recipe</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

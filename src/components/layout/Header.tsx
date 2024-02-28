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
    'relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-[100%] after:origin-center after:scale-x-0 after:bg-yellow-main after:transition after:ease-in-out';
  return (
    <header className="fixed z-10 flex h-16 w-[100%] items-center justify-between border-b-2 border-yellow-main bg-grey-dark px-4 sm:justify-around sm:px-0">
      <Link className={`text-2xl font-bold ${sacramento.className}`} href="/">
        <div className="text-yellow-main">Recipe Book</div>
      </Link>
      <div className="hidden items-center sm:flex">
        <Link className="mr-4 flex items-center [&>span]:hover:after:scale-x-100" href="/recipes">
          <BookIcon className="mr-1 fill-cream" width={14} height={14} />
          <span className={headerItemStyles}>All recipes</span>
        </Link>
        <Link
          className="flex items-center [&>span]:hover:after:scale-x-100 [&>svg]:hover:rotate-180"
          href="/recipes/add"
        >
          <PlusIcon className="mr-1 fill-cream transition-all duration-500" width={14} height={14} />
          <span className={headerItemStyles}>Add new recipe</span>
        </Link>
      </div>

      {/* Mobile menu */}
      <button className="padding-4 block rounded-full sm:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
        {showMobileMenu ? (
          <XIcon width={20} height={20} className="fill-cream" />
        ) : (
          <BurgerIcon width={20} height={20} className="fill-cream" />
        )}
      </button>
      <div
        className={clsx(
          'absolute left-0 right-0 overflow-hidden border-b-2 border-yellow-main bg-grey-dark px-9 py-4 transition-all sm:hidden',
          {
            'top-16 h-36': showMobileMenu,
            '-top-20 h-0': !showMobileMenu,
          },
        )}
      >
        <div className="flex h-[100%] flex-col justify-around">
          <Link className="flex items-center" href="/recipes">
            <BookIcon className="mr-1 fill-cream" width={16} height={16} />
            <span className="text-xl">All recipes</span>
          </Link>
          <Link className="flex items-center" href="/recipes/add">
            <PlusIcon className="mr-1 fill-cream transition-all duration-500" width={16} height={16} />
            <span className="text-xl">Add new recipe</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

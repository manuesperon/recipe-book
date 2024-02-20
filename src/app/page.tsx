import RecipeList from '@/components/shared/RecipeList';
import Button from '@/components/ui/Button';
import { Sacramento } from 'next/font/google';
import Link from 'next/link';
import { Suspense } from 'react';

const sacramento = Sacramento({ subsets: ['latin'], weight: ['400'] });

const Home = () => {
  return (
    <div className="relative flex flex-col items-center gap-8 text-center">
      <h1>
        Featured <span className={`text-yellow-main ${sacramento.className}`}>Recipes</span>
      </h1>
      <p className="text-lg md:text-xl">
        Here is a list of the most popular recipes, click{' '}
        <Link
          href="/recipes"
          className="underline transition-colors duration-300 decoration-yellow-main underline-offset-4 hover:text-yellow-main"
        >
          here
        </Link>{' '}
        to see all the recipes
      </p>
      <div className="w-[100%] border-2 border-red-main"></div>
      <Suspense fallback={<div className="text-xl">Loading recipes...</div>}>
        <RecipeList featured />
      </Suspense>

      <div className="border-l-2 border-yellow-main h-36"></div>

      <Link href="/recipes">
        <Button>Explore my recipe collection</Button>
      </Link>
    </div>
  );
};

export default Home;

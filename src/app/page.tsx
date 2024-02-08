import Button from '@/components/ui/Button';
import { Sacramento } from 'next/font/google';
import Link from 'next/link';

const sacramento = Sacramento({ subsets: ['latin'], weight: ['400'] });

const Home = () => {
  return (
    <div className="relative flex flex-col items-center max-w-3xl gap-8 text-center">
      <h1 className={`text-yellow-main ${sacramento.className}`}>Recipe book</h1>
      <p className="text-xl">
        Recipe book is my personal pet project where I store all my recipes, feel free to have a look
      </p>
      <Link href="/recipes">
        <Button>Explore my recipe collection</Button>
      </Link>
    </div>
  );
};

export default Home;

import Link from 'next/link';
import { Sacramento } from 'next/font/google';

const routes = [
  { url: '/recipes', title: 'All recipes' },
  { url: '/add-recipe', title: 'Add new recipe' },
];

const sacramento = Sacramento({ subsets: ['latin'], weight: ['400'] });

const Header = () => {
  return (
    <header className="h-16 bg-grey-dark fixed w-[100%] z-10 flex justify-around items-center border-b-2 border-yellow-main">
      <Link className={`text-2xl font-bold ${sacramento.className}`} href="/">
        <div className="text-yellow-main">Recipe Book</div>
      </Link>
      <div>
        {routes.map(({ url, title }, i) => (
          <Link className="mr-4 last:mr-0" key={i} href={url}>
            {title}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;

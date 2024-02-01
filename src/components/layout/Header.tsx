import Link from 'next/link';

const routes = [
  { url: '/recipes', title: 'All recipes' },
  { url: '/add-recipe', title: 'Add new recipe' },
];

const Header = () => {
  return (
    <nav className="flex justify-around p-4">
      <Link className=" text-2xl" href="/">
        Recipe Book 📖
      </Link>
      <div>
        {routes.map(({ url, title }, i) => (
          <Link className=" mr-4 last:mr-0" key={i} href={url}>
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Header;

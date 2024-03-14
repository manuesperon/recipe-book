'use client';

import { Sacramento } from 'next/font/google';
import AddRecipeForm from './AddRecipeForm';

const sacramento = Sacramento({ subsets: ['latin'], weight: ['400'] });

const AddRecipePage = () => {
  return (
    <div className="relative flex flex-col items-center gap-8">
      <h1>
        Add new <span className={`text-yellow-main ${sacramento.className}`}>Recipe</span>
      </h1>
      <AddRecipeForm />
    </div>
  );
};

export default AddRecipePage;

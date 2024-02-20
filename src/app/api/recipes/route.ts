import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const featured = searchParams.get('featured') === 'true';

  const recipes = await prisma.recipe.findMany({
    // In the case where featured is true, fetch featured recipes only, otherwise fetch all recipes
    where: { ...(featured ? { featured } : {}) },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return NextResponse.json(recipes);
};

export { GET };

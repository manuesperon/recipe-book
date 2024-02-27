import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const id = parseInt(params.id);

  const recipe = await prisma.recipe.findUniqueOrThrow({
    select: {
      title: true,
      description: true,
      duration: true,
      image: true,
      ingredients: {
        select: { amount: true, unit: { select: { abbreviation: true, label: true } }, ingredient: true },
      },
    },
    where: { id },
  });

  return NextResponse.json(recipe);
};

export { GET };

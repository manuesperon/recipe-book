/*
  Warnings:

  - Added the required column `description` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `published` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "featured" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "published" BOOLEAN NOT NULL;

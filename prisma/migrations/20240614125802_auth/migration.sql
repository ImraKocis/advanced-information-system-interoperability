/*
  Warnings:

  - You are about to drop the column `hashRt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "users_username_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "hashRt",
DROP COLUMN "username",
ADD COLUMN     "hashedRt" TEXT;

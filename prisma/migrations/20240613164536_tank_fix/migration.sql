-- CreateEnum
CREATE TYPE "TankType" AS ENUM ('HEAVY_TANK', 'MEDIUM_TANK', 'LIGHT_TANK', 'TANK_DESTROYER', 'SPG');

-- AlterTable
ALTER TABLE "Tank" ADD COLUMN     "type" "TankType";

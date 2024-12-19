-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cohort" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

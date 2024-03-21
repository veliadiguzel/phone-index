-- CreateTable
CREATE TABLE "phone" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "interphone" TEXT NOT NULL,
    "search" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "phone_interphone_key" ON "phone"("interphone");

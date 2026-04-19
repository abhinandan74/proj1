-- CreateTable
CREATE TABLE "Meetup" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "time" TEXT NOT NULL DEFAULT '10:00 AM',
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL DEFAULT 'Virtual Event',
    "capacity" INTEGER NOT NULL DEFAULT 100,
    "category" TEXT NOT NULL DEFAULT 'Tech',
    "image" TEXT NOT NULL DEFAULT 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Rsvp" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "meetupId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "company" TEXT,
    "status" TEXT NOT NULL DEFAULT 'attending',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Rsvp_meetupId_fkey" FOREIGN KEY ("meetupId") REFERENCES "Meetup" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

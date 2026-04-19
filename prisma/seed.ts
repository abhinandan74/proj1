import { PrismaLibSql } from '@prisma/adapter-libsql';
import { PrismaClient } from '../generated/prisma/client.js';

const adapter = new PrismaLibSql({ url: 'file:./prisma/dev.db' });
const prisma = new PrismaClient({ adapter });

async function main() {
  // Clear existing data
  await prisma.rsvp.deleteMany();
  await prisma.meetup.deleteMany();

  const meetups = await prisma.meetup.createMany({
    data: [
      {
        title: 'AI & Copilot Deep Dive',
        date: '2026-05-10',
        time: '10:00 AM',
        description: 'Join us for an in-depth exploration of AI-powered development tools. Learn how GitHub Copilot can accelerate your development workflow with live coding demonstrations, best practices, and real-world examples.',
        location: 'Virtual Event - Zoom',
        capacity: 500,
        category: 'AI & ML',
        image: 'https://images.unsplash.com/photo-1677442d019cecf8d6b174f84e75b9b8b5c5c5c5?w=800&q=80'
      },
      {
        title: 'Next.js 15 Workshop',
        date: '2026-06-14',
        time: '2:00 PM',
        description: 'Dive deep into the latest features of Next.js 15! Explore App Router improvements, Server Actions, Suspense patterns, and performance optimizations. Perfect for developers looking to build modern web applications.',
        location: 'Virtual Event - Zoom',
        capacity: 300,
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80'
      },
      {
        title: 'Open Source Sprint',
        date: '2026-07-12',
        time: '11:00 AM',
        description: 'Contribute to real open-source projects with experienced maintainers guiding you. This is a hands-on event where you\'ll hack on actual GitHub issues, learn best practices, and make a real impact in the community.',
        location: 'Virtual Event - Zoom',
        capacity: 200,
        category: 'Open Source',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80'
      },
      {
        title: 'TypeScript Advanced Patterns',
        date: '2026-08-09',
        time: '3:00 PM',
        description: 'Master advanced TypeScript patterns and techniques. Learn about generics, utility types, decorators, and advanced type manipulation to write more robust and maintainable code.',
        location: 'Virtual Event - Zoom',
        capacity: 250,
        category: 'TypeScript',
        image: 'https://images.unsplash.com/photo-1535439210842-2940872d29d0?w=800&q=80'
      }
    ],
  });

  // Add some sample RSVPs
  const rsvpData = [
    { meetupId: 1, name: 'John Doe', email: 'john@example.com', company: 'Tech Corp', phone: '+1234567890' },
    { meetupId: 1, name: 'Jane Smith', email: 'jane@example.com', company: 'Dev Inc', phone: '+1234567891' },
    { meetupId: 1, name: 'Mike Johnson', email: 'mike@example.com', company: 'Innovation Labs' },
    { meetupId: 2, name: 'Sarah Williams', email: 'sarah@example.com', company: 'Cloud Solutions' },
    { meetupId: 2, name: 'Tom Brown', email: 'tom@example.com', phone: '+1234567892' },
    { meetupId: 3, name: 'Emily Davis', email: 'emily@example.com', company: 'StartUp X' },
    { meetupId: 4, name: 'Alex Chen', email: 'alex@example.com', company: 'Tech Hub' },
  ];

  await prisma.rsvp.createMany({
    data: rsvpData
  });

  console.log('✅ Seeded 4 meetups with sample RSVPs');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());

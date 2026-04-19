import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class MeetupsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const meetups = await this.prisma.meetup.findMany({
      include: {
        _count: {
          select: { rsvps: true }
        }
      },
      orderBy: {
        date: 'asc'
      }
    });

    return meetups.map(meetup => ({
      ...meetup,
      rsvpCount: meetup._count.rsvps,
      _count: undefined
    }));
  }

  async findById(id: number) {
    return this.prisma.meetup.findUnique({
      where: { id },
      include: {
        rsvps: {
          select: {
            id: true,
            name: true,
            email: true,
            company: true,
            status: true,
            createdAt: true
          }
        },
        _count: {
          select: { rsvps: true }
        }
      }
    });
  }
}

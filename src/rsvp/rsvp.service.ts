import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import type { RsvpDto } from '@repo/shared';

@Injectable()
export class RsvpService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: RsvpDto) {
    return this.prisma.rsvp.create({
      data: {
        meetupId: dto.meetupId,
        name: dto.name,
        email: dto.email,
        company: dto.company,
        phone: dto.phone,
      },
    });
  }

  async findByMeetup(meetupId: number) {
    return this.prisma.rsvp.findMany({
      where: { meetupId },
      select: {
        id: true,
        name: true,
        email: true,
        company: true,
        status: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' }
    });
  }

  async getRsvpCount(meetupId: number) {
    return this.prisma.rsvp.count({
      where: { meetupId }
    });
  }
}

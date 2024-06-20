import { Injectable } from '@nestjs/common';
import { SpotStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSpotDto } from './dto/create-spot.dto';
import { UpdateSpotDto } from './dto/update-spot.dto';

@Injectable()
export class SpotsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createSpotDto: CreateSpotDto & { eventId: string }) {
    const event = await this.prismaService.event.findUnique({
      where: { id: createSpotDto.eventId },
    });

    if (!event) {
      throw new Error('Event not found');
    }

    return this.prismaService.spot.create({
      data: {
        ...createSpotDto,
        eventId: createSpotDto.eventId,
        status: SpotStatus.available,
      },
    });
  }

  findAll(eventId: string) {
    return this.prismaService.spot.findMany({
      where: { eventId },
    });
  }

  findOne(eventId: string, spotId: string) {
    return this.prismaService.spot.findUnique({
      where: { id: spotId, eventId },
    });
  }

  update(eventId: string, spotId: string, updateSpotDto: UpdateSpotDto) {
    return this.prismaService.spot.update({
      where: { id: spotId, eventId },
      data: updateSpotDto,
    });
  }

  remove(eventId: string, spotId: string) {
    return this.prismaService.spot.delete({
      where: { id: spotId, eventId },
    });
  }
}
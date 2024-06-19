import { Delete, HttpCode, Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EventsService {
  constructor(private prismaSevice: PrismaService) {}
  create(createEventDto: CreateEventDto) {
    return this.prismaSevice.event.create({
      //data: createEventDto,
      data: {
        ...createEventDto,
        date: new Date(createEventDto.date),
      },
    });
  }

  findAll() {
    return this.prismaSevice.event.findMany();
  }

  findOne(id: string) {
    return this.prismaSevice.event.findUnique({
      where: { id },
    });
  }

  update(id: string, updateEventDto: UpdateEventDto) {
    return this.prismaSevice.event.update({
      // data: updateEventDto,
      // where: { id },
      data: {
        ...updateEventDto,
        date: new Date(updateEventDto.date),
      },
      where: { id },
    });
  }

  @HttpCode(204)
  @Delete(':id')
  remove(id: string) {
    return this.prismaSevice.event.delete({
      where: { id },
    });
  }
}

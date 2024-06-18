import { EventsCoreModule } from '@app/core/events/events-core.module';
import { Module } from '@nestjs/common';
import { EventosControllers } from './eventos.controller';

@Module({
  imports: [EventsCoreModule],
  controllers: [EventosControllers],
})
export class EventosModule {}

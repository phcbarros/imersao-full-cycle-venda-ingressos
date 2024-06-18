import { AuthModule } from '@app/core/auth/auth.module';
import { PrismaCoreModule } from '@app/core/prisma/prisma-core.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventosModule } from './eventos/eventos.module';
import { LugaresModule } from './lugares/lugares.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.partner2',
      isGlobal: true,
    }),
    PrismaCoreModule,
    AuthModule,
    EventosModule,
    LugaresModule,
  ],
})
export class Partner2Module {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'

import { SerieController } from './serie.controller';
import { SerieService } from './serie.service';
import { SerieSchema } from './serie.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Serie', schema: SerieSchema }])
  ],
  controllers: [SerieController],
  providers: [SerieService]
})
export class SerieModule {}

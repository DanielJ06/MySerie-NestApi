import { Module } from '@nestjs/common';
import { SerieController } from './serie.controller';
import { SerieService } from './serie.service';

@Module({
  controllers: [SerieController],
  providers: [SerieService]
})
export class SerieModule {}

import { Controller, Get, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';

import { SerieService } from './serie.service';
import { Serie } from './serie.schema';
import { CreateSerieDto } from './dto/create-serie.dto';

@Controller('serie')
export class SerieController {
  constructor(private serieService: SerieService) {}

  @Get()
    async getSeries(): Promise<Serie[]> {
      return this.serieService.getAll()
    }

  @Post()
  @UsePipes(ValidationPipe)
    async createSerie(@Body() createSerieDto: CreateSerieDto): Promise<Serie> {
      return this.serieService.create(createSerieDto);
    }
}

// routes.get('/serie', serieController.index)
// routes.post('/serie', serieController.store)
// routes.delete('/serie/:id', serieController.delete)
// routes.put('/serie/:id', serieController.edit)

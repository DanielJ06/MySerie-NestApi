import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Param, Put } from '@nestjs/common';

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

  @Get('/:id')
    async getSerieById(@Param('id') id: string): Promise<Serie> {
      return this.serieService.getById(id);
    }

  @Post()
  @UsePipes(ValidationPipe)
    async createSerie(@Body() createSerieDto: CreateSerieDto): Promise<Serie> {
      return this.serieService.create(createSerieDto);
    }

  @Put('/:id')
  @UsePipes(ValidationPipe)
    async updateSerie(
      @Body() createSerieDto: CreateSerieDto,
      @Param('id') id: string,
    ): Promise<Serie> {
      return this.serieService.update(createSerieDto, id)
    }
}

// routes.get('/serie', serieController.index)
// routes.post('/serie', serieController.store)
// routes.delete('/serie/:id', serieController.delete)
// routes.put('/serie/:id', serieController.edit)

import { Controller, Get } from '@nestjs/common';

import { SerieService } from './serie.service';
import { Serie } from './serie.schema';

@Controller('serie')
export class SerieController {
  constructor(private serieService: SerieService) {}

  @Get()
    async getSeries(): Promise<Serie[]> {
      return this.serieService.getAll()
    }
}

// routes.get('/serie', serieController.index)
// routes.post('/serie', serieController.store)
// routes.delete('/serie/:id', serieController.delete)
// routes.put('/serie/:id', serieController.edit)

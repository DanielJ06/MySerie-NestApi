import { Controller, Get } from '@nestjs/common';

@Controller('serie')
export class SerieController {
  @Get()
    getSerie(): Promise<Series[]> {
      return []
    }
}

// routes.get('/serie', serieController.index)
// routes.post('/serie', serieController.store)
// routes.delete('/serie/:id', serieController.delete)
// routes.put('/serie/:id', serieController.edit)

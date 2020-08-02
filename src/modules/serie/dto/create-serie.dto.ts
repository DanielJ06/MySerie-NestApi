import { IsNotEmpty } from 'class-validator';
import { SerieStatus } from '../serie-status.enum';
import { ValidateStatus } from '../decorators/serie-status-validation.decorator';

export class CreateSerieDto {
  @IsNotEmpty()
    name: string
  
  @IsNotEmpty()
    bio: string

  @IsNotEmpty()
  @ValidateStatus({ message: 'Invalid status' })
    status: SerieStatus
}
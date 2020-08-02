import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Serie } from './serie.schema';
import { Model } from 'mongoose';
import { CreateSerieDto } from './dto/create-serie.dto';

@Injectable()
export class SerieService {
  constructor(
    @InjectModel('Serie') private readonly serieModel: Model<Serie>
  ) {}

  async getAll(): Promise<Serie[]> {
    return await this.serieModel.find().exec();
  }

  async create(createSerieDto: CreateSerieDto): Promise<Serie> {
    const serie = new this.serieModel(createSerieDto);
    serie.save();
    return serie;
  }
}

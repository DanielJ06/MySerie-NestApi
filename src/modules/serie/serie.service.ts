import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Serie } from './serie.schema';
import { Model } from 'mongoose';

@Injectable()
export class SerieService {
  constructor(
    @InjectModel('Serie') private readonly serieModel: Model<Serie>
  ) {}

  async getAll(): Promise<Serie[]> {
    return await this.serieModel.find().exec();
  }
}

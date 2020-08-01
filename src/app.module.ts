import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose'

import { SerieModule } from './modules/serie/serie.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://daniel:daniel06@cluster0-ghdgm.mongodb.net/MySerie?retryWrites=true&w=majority'),
    SerieModule
  ],
})
export class AppModule {}

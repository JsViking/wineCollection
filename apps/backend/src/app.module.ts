import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WinesModule } from './wines/wines.modules';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    WinesModule,
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Wines, WinesSchema } from './wines.schema';
import { WinesController } from './wines.controller';
import { WinesService } from './wines.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Wines.name, schema: WinesSchema }]),
  ],
  providers: [WinesService],
  controllers: [WinesController],
})
export class WinesModule {}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateWineDto } from './dto/create-wine.dto';
import { Wines, WinesDocument } from './wines.schema';

@Injectable()
export class WinesService {
  constructor(
    @InjectModel(Wines.name) private winesModel: Model<WinesDocument>,
  ) {}
  private wines = [];

  async getAll(): Promise<Wines[]> {
    return this.winesModel.find().exec();
  }

  async getById(id: string): Promise<Wines> {
    return this.winesModel.findById(id);
  }

  async add(body: CreateWineDto): Promise<Wines> {
    const newWines = new this.winesModel(body);
    return newWines.save();
  }

  async delete(id: string): Promise<Wines> {
    return this.winesModel.remove(id);
  }

  update(id: string, body: CreateWineDto) {
    return this.winesModel.findByIdAndUpdate(id, body, { new: true });
  }
}

import { Injectable } from '@nestjs/common';
import { CreateWineDto } from './dto/create-wine.dto';

@Injectable()
export class WinesService {
  private wines = [];

  getAll() {
    return this.wines;
  }

  getById(id: string) {
    return this.wines.map((_, i) => String(i) === id);
  }

  add(body: CreateWineDto) {
    return this.wines.push(body);
  }

  update(id: string, body: CreateWineDto) {
    return (this.wines[id] = body);
  }

  delete(id: string) {
    return this.wines.splice(Number(id), 1);
  }
}

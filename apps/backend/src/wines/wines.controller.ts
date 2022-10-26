import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateWineDto } from './dto/create-wine.dto';
import { UpdateWineDto } from './dto/update-wine.dto';
import { WinesService } from './wines.service';

@Controller('wines')
export class WinesController {
  constructor(private readonly winesService: WinesService) {}

  @Get()
  getAll() {
    return this.winesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.winesService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createWineDto: CreateWineDto) {
    return this.winesService.add(createWineDto);
  }

  @Put(':id')
  update(@Body() updateWindeDto: UpdateWineDto, @Param('id') id: string) {
    return this.winesService.update(id, updateWindeDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.winesService.delete(id);
  }
}

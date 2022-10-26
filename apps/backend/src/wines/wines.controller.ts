import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateWineDto } from './dto/create-wine.dto';
import { UpdateWineDto } from './dto/update-wine.dto';

@Controller('wines')
export class WinesController {
  @Get()
  findAll(): string {
    return 'This action returns all wines';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns wines by id: ${id}`;
  }

  @Post()
  create(@Body() createWineDto: CreateWineDto): string {
    return 'This action returns all wines';
  }

  @Put(':id')
  update(
    @Body() updateWindeDto: UpdateWineDto,
    @Param('id') id: string,
  ): string {
    return 'This action returns all wines';
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return 'This action returns all wines';
  }
}

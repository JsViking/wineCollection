import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('wines')
export class WinesController {
  @Get('find')
  findAll(@Req() request: Request): string {
    return 'This action returns all wines';
  }
}

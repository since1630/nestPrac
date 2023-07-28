// import { Controller, Get, Req } from '@nestjs/common';
// import { Request } from 'express';

// @Controller('cats')
// export class CatsController {
//   @Get()
//   findAll(@Req() request: Request): string {
//     return 'This action returns all cats';
//   }
// }

import { Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}

import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all items';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Get item ${id}`;
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string): string {
    return `Delete item ${id}`;
  }

  @Post('/new')
  creatItem(@Body() createItemDto: CreateItemDto) {
    return {
      message: `${createItemDto.name} created`,
    };
  }
}

import { Module } from '@nestjs/common';
import { PowerService } from './power.service';
import { PowerController } from './power.controller';

@Module({
  controllers: [PowerController],
  providers: [PowerService],
  exports: [PowerService],
})
export class PowerModule { }

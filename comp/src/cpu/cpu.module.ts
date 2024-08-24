import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { CpuController } from './cpu.controller';
import { PowerModule } from 'src/power/power.module';

@Module({
  controllers: [CpuController],
  providers: [CpuService],
  imports: [PowerModule],
  exports: [CpuService],
})
export class CpuModule { }

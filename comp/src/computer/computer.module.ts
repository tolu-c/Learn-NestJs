import { Module } from '@nestjs/common';
import { ComputerService } from './computer.service';
import { ComputerController } from './computer.controller';
import { CpuModule } from 'src/cpu/cpu.module';
import { DiskModule } from 'src/disk/disk.module';

@Module({
  controllers: [ComputerController],
  providers: [ComputerService],
  imports: [CpuModule, DiskModule],
})
export class ComputerModule { }

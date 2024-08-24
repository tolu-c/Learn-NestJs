import { Controller } from '@nestjs/common';
import { CpuService } from './cpu.service';

@Controller('cpu')
export class CpuController {
  constructor(private readonly cpuService: CpuService) {}
}

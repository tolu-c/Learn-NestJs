import { Controller } from '@nestjs/common';
import { DiskService } from './disk.service';

@Controller('disk')
export class DiskController {
  constructor(private readonly diskService: DiskService) {}
}

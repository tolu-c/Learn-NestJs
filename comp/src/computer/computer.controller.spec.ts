import { Test, TestingModule } from '@nestjs/testing';
import { ComputerController } from './computer.controller';
import { ComputerService } from './computer.service';

describe('ComputerController', () => {
  let controller: ComputerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComputerController],
      providers: [ComputerService],
    }).compile();

    controller = module.get<ComputerController>(ComputerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

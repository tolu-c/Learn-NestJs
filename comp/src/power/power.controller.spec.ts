import { Test, TestingModule } from '@nestjs/testing';
import { PowerController } from './power.controller';
import { PowerService } from './power.service';

describe('PowerController', () => {
  let controller: PowerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PowerController],
      providers: [PowerService],
    }).compile();

    controller = module.get<PowerController>(PowerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

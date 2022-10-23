import { Test, TestingModule } from '@nestjs/testing';
import { LondonController } from './london.controller';

describe('LondonController', () => {
  let controller: LondonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LondonController],
    }).compile();

    controller = module.get<LondonController>(LondonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

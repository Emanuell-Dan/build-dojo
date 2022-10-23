import { Test, TestingModule } from '@nestjs/testing';
import { LondonService } from './london.service';

describe('LondonService', () => {
  let service: LondonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LondonService],
    }).compile();

    service = module.get<LondonService>(LondonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

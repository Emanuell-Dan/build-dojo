import { Test, TestingModule } from '@nestjs/testing';
import { ManchesterService } from './manchester.service';

describe('ManchesterService', () => {
  let service: ManchesterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManchesterService],
    }).compile();

    service = module.get<ManchesterService>(ManchesterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

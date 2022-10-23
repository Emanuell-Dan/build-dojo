import { Module } from '@nestjs/common';
import { ManchesterController } from './manchester.controller';
import { ManchesterService } from './manchester.service';

@Module({
  controllers: [ManchesterController],
  providers: [ManchesterService],
  exports: [ManchesterService],
})
export class ManchesterModule {}

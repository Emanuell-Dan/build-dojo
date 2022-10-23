import { Module } from '@nestjs/common';
import { ManchesterModule } from 'src/manchester/manchester.module';
import { LondonController } from './london.controller';
import { LondonService } from './london.service';

@Module({
  imports: [ManchesterModule],
  providers: [LondonService],
  controllers: [LondonController],
})
export class LondonModule {}

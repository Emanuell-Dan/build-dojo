import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LondonModule } from './london/london.module';
import { ManchesterModule } from './manchester/manchester.module';

@Module({
  imports: [ManchesterModule, LondonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

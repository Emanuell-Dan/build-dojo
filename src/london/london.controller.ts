import { Controller, Get, Query, Res } from '@nestjs/common';
import { ManchesterService } from 'src/manchester/manchester.service';

@Controller('london')
export class LondonController {
  constructor(private readonly manchesterService: ManchesterService) {}

  @Get()
  getManchester(@Res() response, @Query() queryParams?) {
    return this.manchesterService.getManchester(response, queryParams);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { ManchesterService } from './manchester.service';

@Controller('manchester')
export class ManchesterController {
  constructor(private readonly manchesterService: ManchesterService) {}

  @Get()
  getManchester(@Res() response, @Query() queryParams?) {
    return this.manchesterService.getManchester(response, queryParams);
  }

  @Get(':id')
  getManchesterMarket(@Param('id') id) {
    return this.manchesterService.getManchesterMarket(id);
  }

  @Post()
  addManchesterMarket(@Body() body) {
    return this.manchesterService.addManchesterMarket(body);
  }

  /* @HttpCode(HttpStatus.GONE) - Deprecating the Delete API */
  @Delete(':id')
  deleteManchesterMarket(@Param('id') id) {
    return this.manchesterService.deleteManchesterMarket(id);
  }

  @Patch(':id')
  updateManchesterMarket(@Param('id') id, @Body() body) {
    return this.manchesterService.updateManchesterMarket(id, body);
  }
}

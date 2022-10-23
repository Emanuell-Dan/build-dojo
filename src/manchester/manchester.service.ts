import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class ManchesterService {
  slalomManchesterDB = [
    {
      id: 0,
      name: 'Slalom Build',
      count: 50,
    },
    {
      id: 1,
      name: 'Slalom Local',
      count: 100,
    },
  ];

  getManchester(response, queryParams?) {
    // throw 'A random error'; // NestJS itself will be handling this one
    // response.status(123).send('Express.js error'); // Native Express.js error message

    if (!queryParams) {
      // throw new NotFoundException('Resource not found'); // Shorthand for the below exception
      throw new HttpException('Resource not found', HttpStatus.NOT_FOUND);
    }

    const { limit, offset } = queryParams;

    if (limit) {
      return this.slalomManchesterDB.find((entry) => entry.id === +limit);
    } else if (offset) {
      return this.slalomManchesterDB.filter((entry) => entry.id !== +offset);
    }

    return this.slalomManchesterDB;
  }

  getManchesterMarket(id) {
    return this.slalomManchesterDB.find((entry) => entry.id === +id);
  }

  addManchesterMarket(body) {
    return this.slalomManchesterDB.push(body);
  }

  deleteManchesterMarket(id) {
    const entry = this.slalomManchesterDB.findIndex(
      (entry) => entry.id === +id,
    );

    return this.slalomManchesterDB.splice(entry, 1);
  }

  updateManchesterMarket(id, body) {
    this.slalomManchesterDB = this.slalomManchesterDB.map((entry) =>
      entry.id === +id ? { ...entry, ...body } : { ...entry },
    );

    return this.slalomManchesterDB;
  }
}

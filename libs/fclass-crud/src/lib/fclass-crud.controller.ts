import {Body, Controller, Get, Post, Put} from '@nestjs/common';
import { FclassCrudService } from './fclass-crud.service';

@Controller('fclass-crud')
export class FclassCrudController {
  constructor(private fclassCrudService: FclassCrudService) {}

  @Get()
  getClasses() {
  return this.fclassCrudService.getClasses();
  }

  @Post()
  postClasses(
    @Body('name') name: string,
    @Body('shortDescription') shortDescription:string,
    @Body('description') description: string,
    @Body('rating') rating: number,
    @Body('numberOfReviews') numberOfReviews: number
  ) {
    return this.fclassCrudService.createClass(name,shortDescription,description,rating, numberOfReviews)
  }

  @Put()
  updateClass(
    @Body('name') name:string,
    @Body('rating') rating:number
  ) {
    return this.fclassCrudService.updateClass(name, rating)
  }
}

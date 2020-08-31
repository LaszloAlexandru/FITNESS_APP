import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {FclassCrudModel} from "./fclass-crud.model";

@Injectable()
export class FclassCrudService {
  constructor(
    @InjectModel('fclass') private readonly fclass: Model<FclassCrudModel>
  ) {}


  async getClasses() {
    return this.fclass.find();
  }

  async createClass(name: string,shortDescription: string, description: string, rating: number, numberOfReviews: number) {
    const newClass = new this.fclass({
      name,
      shortDescription,
      description,
      rating,
      numberOfReviews
    });
    return await newClass.save();
  }

  async updateClass(name: string, rating:number) {
    await this.fclass.update( {name:name}, {rating:rating} );
    return this.fclass.find();
  }
}

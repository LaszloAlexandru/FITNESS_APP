import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {
  DesignCrudModel,
  GenericModificationModel,
  JavascriptInjectionModel,
  ResizeModificationModel
} from "./design-crud.model";

@Injectable()
export class DesignCrudService {
  constructor(
    @InjectModel('design') private readonly design: Model<DesignCrudModel>
  ) {}



  async getDesignById(email:string, name:string) {
    return this.design.findOne( {email: email, name: name});

  }



  async getActiveDesigns(email: string, token: string) {
    return this.design.find({email:email, active:true});
  }

  async addDesign(email: string, name:string, active:boolean, jsModifications: [JavascriptInjectionModel], genericModifications: [GenericModificationModel], resizeModifications: [ResizeModificationModel]) {
    const newDesign = new this.design({
      email,
      name,
      active,
      javascriptInjections:jsModifications,
      genericModifications,
      resizeModifications
    });
    const result = await newDesign.save();
    return result.id;
  }
}
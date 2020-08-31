import { Module } from '@nestjs/common';
import { FclassCrudService } from './fclass-crud.service';
import { FclassCrudController } from './fclass-crud.controller';
import {MongooseModule} from "@nestjs/mongoose";
import { FclassSchema} from "./fclass-crud.model";

@Module({
  imports: [MongooseModule.forFeature([{name:'fclass', schema:FclassSchema}])],
  controllers: [FclassCrudController],
  providers: [FclassCrudService],
  exports: [FclassCrudService]
})
export class FclassCrudModule {}

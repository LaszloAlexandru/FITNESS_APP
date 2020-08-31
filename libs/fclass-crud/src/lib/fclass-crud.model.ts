import * as mongoose from 'mongoose';

export interface FclassCrudModel extends mongoose.Document {
  name: string,
  shortDescription:string,
  description:string,
  rating: number
  numberOfReviews: number
}

export const FclassSchema = new mongoose.Schema({
  name: {type: String,required: true},
  shortDescription: {type: String,required: true},
  description: {type: String,required: true},
  rating: {type: Number,required: true},
  numberOfReviews: {type: Number,required: true},
});

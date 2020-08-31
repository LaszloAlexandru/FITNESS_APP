import { Test } from '@nestjs/testing';
import { FclassCrudController } from './fclass-crud.controller';
import { FclassCrudService } from './fclass-crud.service';

describe('FclassCrudController', () => {
  let controller: FclassCrudController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FclassCrudService],
      controllers: [FclassCrudController]
    }).compile();

    controller = module.get(FclassCrudController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});

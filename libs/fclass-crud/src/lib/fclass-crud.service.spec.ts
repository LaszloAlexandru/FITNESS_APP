import { Test } from '@nestjs/testing';
import { FclassCrudService } from './fclass-crud.service';

describe('FclassCrudService', () => {
  let service: FclassCrudService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FclassCrudService]
    }).compile();

    service = module.get(FclassCrudService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DbService } from './db.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('DbService', () => {
  let service: DbService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DbService,
        {
          provide: SQLite,
          useValue: {
            create: jasmine.createSpy('create').and.returnValue(Promise.resolve({
              executeSql: jasmine.createSpy('executeSql').and.returnValue(Promise.resolve({ rows: [] }))
            }))
          }
        }
      ]
    });
    service = TestBed.inject(DbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

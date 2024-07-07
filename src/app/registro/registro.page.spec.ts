import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPage } from './registro.page';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { DbService } from '../db.service';

describe('RegistroPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroPage ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (key: string) => {
                return 'test';
              }
            })
          }
        },
        {
          provide: SQLite,
          useValue: {
            create: jasmine.createSpy('create').and.returnValue(Promise.resolve({
              executeSql: jasmine.createSpy('executeSql').and.returnValue(Promise.resolve({ rows: [] }))
            }))
          }
        },
        DbService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

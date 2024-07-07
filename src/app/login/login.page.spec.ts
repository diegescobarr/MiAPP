import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { DbService } from '../db.service';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPage ],
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
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

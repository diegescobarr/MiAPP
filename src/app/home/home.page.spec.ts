import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { DbService } from '../db.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [
        DbService,
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              usuarioEnviado: 'testUser'
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
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

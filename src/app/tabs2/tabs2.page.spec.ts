import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tabs2Page } from './tabs2.page';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('Tabs2Page', () => {
  let component: Tabs2Page;
  let fixture: ComponentFixture<Tabs2Page>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tabs2Page ],
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
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tabs2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

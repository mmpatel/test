import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LaunchDetailsComponent } from './launch-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import {
  ApolloTestingModule,
} from 'apollo-angular/testing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('LaunchDetailsComponent', () => {
  let component: LaunchDetailsComponent;
  let fixture: ComponentFixture<LaunchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SlickCarouselModule, RouterTestingModule, ApolloTestingModule, MatProgressSpinnerModule, StoreModule.forRoot({})],
      declarations: [ LaunchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

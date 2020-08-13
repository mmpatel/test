import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from '@angular/material/grid-list';
import { StoreModule } from '@ngrx/store';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { LaunchListComponent } from './launch-list.component';
import { DateAgoPipe } from '../core/helpers/pipes/date-ago.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('LaunchListComponent', () => {
  let component: LaunchListComponent;
  let fixture: ComponentFixture<LaunchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatCardModule,MatProgressSpinnerModule, MatGridListModule, StoreModule.forRoot({}), ApolloTestingModule],
      declarations: [ LaunchListComponent, DateAgoPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchListComponent);
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

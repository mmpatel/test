import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store'
import { ApolloTestingModule } from 'apollo-angular/testing';
import { LaunchFacadeService } from './launch-facade.service';

describe('LaunchFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [StoreModule.forRoot({}), ApolloTestingModule]
  }));

  it('should be created', () => {
    const service: LaunchFacadeService = TestBed.get(LaunchFacadeService);
    expect(service).toBeTruthy();
  });
});

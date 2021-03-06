import { TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { HttpModule, XHRBackend } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { RepoDetailsResolverService } from './repo-details-resolver.service';
import { GithubService } from './github.service';

describe('RepoDetailsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule
      ],
      providers: [
        RepoDetailsResolverService,
        GithubService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  it('should be created', inject([RepoDetailsResolverService], (service: RepoDetailsResolverService) => {
    expect(service).toBeTruthy();
  }));
});

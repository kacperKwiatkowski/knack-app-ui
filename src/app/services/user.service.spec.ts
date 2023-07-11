import {UserService} from "./user.service";
import {TestBed} from "@angular/core/testing";
import {HttpClient} from "@angular/common/http";
import {first, take} from "rxjs";

describe('UserService', () => {

  let mockHttpClient: any;
  let userService: UserService;

  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj('HttpClient', ["get"])

    TestBed.configureTestingModule({
      providers: [
        UserService, {
          provide: HttpClient, useValue: mockHttpClient
        }
      ]
    })

    userService = TestBed.inject(UserService)
  })

  it('should verify that login doesnt exists', () => {

    const result = userService.findIfLoginExists("dummy")

    expect(result.subscribe(result => expect(result).toBeFalse()));
    expect(mockHttpClient.get).toHaveBeenCalledTimes(1)
  })

  it('should verify that login does exists', () => {

    const result = userService.findIfLoginExists("testtesttest")

    expect(result.subscribe(result => expect(result).toBeTrue()));
    expect(mockHttpClient.get).toHaveBeenCalledTimes(1)
  })
})

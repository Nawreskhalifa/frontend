import { Injectable } from '@angular/core';
import { User } from '../shared/models/User';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { USER_LOGIN_URL, USER_REGISTER_URL } from '../shared/constants/uls';
import { ToastrService } from 'ngx-toastr';
import { IUserRegister } from '../shared/interfaces/IUserRegister';
import { ActivatedRoute, Router } from '@angular/router';
const USER_KEY = 'User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;
  private userSubject =
  new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable:Observable<User>;
  constructor(private http:HttpClient
     , private toastrService:ToastrService, private activatedRoute:ActivatedRoute,
     private router:Router
    ) {
    this.userObservable = this.userSubject.asObservable();
  }

  public get currentUser():User{
    return this.userSubject.value;
  }

  // login(userLogin:IUserLogin):Observable<User>{
  //   return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
  //     tap({
  //       next: (user) =>{
  //         this.setUserToLocalStorage(user);
  //         this.userSubject.next(user);
  //         this.toastrService.success(
  //           `Welcome to Foodmine ${user.name}!`,
  //           'Login Successful'
  //         )
  //       },
  //       error: (errorResponse) => {
  //         this.toastrService.error(errorResponse.error, 'Login Failed');
  //       }
  //     })
  //   );
  // }
  login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap((user) => {
        this.setUserToLocalStorage(user);
      this.userSubject.next(user);
        if (user.isAdmin) {
          // Rediriger vers la page d'administration
          this.router.navigateByUrl('/admin');
        } else {
          // Rediriger vers la page du client
          this.router.navigateByUrl(this.returnUrl);
        }
       
        this.toastrService.success(`Welcome to Foodmine ${user.name}!`, 'Login Successful');
      },
      (errorResponse) => {
        this.toastrService.error(errorResponse.error, 'Login Failed');
      }))
  }


  register(userRegiser:IUserRegister): Observable<User>{
    return this.http.post<User>(USER_REGISTER_URL, userRegiser).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to the Foodmine ${user.name}`,
            'Register Successful'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error,
            'Register Failed')
        }
      })
    )
  }


  logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  private setUserToLocalStorage(user:User){
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage():User{
    const userJson = localStorage.getItem(USER_KEY);
    if(userJson) return JSON.parse(userJson) as User;
    return new User();
  }
}

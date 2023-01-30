import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { TypeUser } from '../model/type-user';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  UrlUser: string="http://localhost:8080/users";
  UrlType: string="http://localhost:8080/typeuser";

  constructor(private http:HttpClient) { }

  //Get
  getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.UrlUser+"/getUsers")
  }

  getUserById(id:number):Observable<User> {
    return this.http.get<User>(this.UrlUser+"/getUser/"+id)
  }

  getTypeUser():Observable<TypeUser[]> {
    return this.http.get<TypeUser[]>(this.UrlType+"/getTypes")
  }

  getTypeUserById(id:number):Observable<TypeUser>{
    return this.http.get<TypeUser>(this.UrlType+"/getType/"+id)
  }
  //Post

  createUser(user:User):Observable<User> {
    return this.http.post<User>(this.UrlUser+"/createUser",user)
  }

  createTypeUser(type:TypeUser):Observable<TypeUser>{
    return this.http.post<TypeUser>
    (this.UrlType+"/createType",type)
    .pipe(catchError(this.handleError));
  }

  //Put
  updateUser(user:User):Observable<User>{
    return this.http.put<User>(this.UrlUser+"/updateUser/"+user.id,user)
  }

  updateTypeUser(type:TypeUser):Observable<TypeUser>{
    return this.http.put<TypeUser>
    (this.UrlType+"/updateType/"+type.id,type)
    
  }

  //Delete

  deleteUser(id:number):Observable<any>{
    return this.http.delete<any>(this.UrlUser+"/deleteUser/"+id)
  }

  deleteType(id:number):Observable<any>{
    return this.http.delete<any>(this.UrlType+"/deleteType/"+id)
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code`);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}

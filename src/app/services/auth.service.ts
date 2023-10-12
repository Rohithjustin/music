import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {constructor(private http: HttpClient) {
  

}

registerUser(user: any): Observable<any> {
  return this.http.post('http://localhost:8081/api/v1/register', user)
}

loginUser(user: any): Observable<any> {
  return this.http.post('http://localhost:8081/api/v1/login', user)
}
setBearerToken(token: any) {
  sessionStorage.setItem("token", token)
}
getBearerToken() {
  sessionStorage.getItem("token")
}

  public isAuthenticate(): boolean {
    let token = sessionStorage.getItem("token");
    if (token == undefined || token == null || token == '') {
      return false;
    } else {
      return true;
    }
  }
  
  getUsernameByEmail(email: string): Observable<string> {
    return this.http.get<string>(`http://localhost:8081/api/v1/username/${email}`);
  }
  
  
}




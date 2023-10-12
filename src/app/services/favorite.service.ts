import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private apiUrl = 'http://localhost:8083/user/addfav'; 
  private favUrl = 'http://localhost:8083/user';
  private userEmail: any; 
  


  constructor(private http: HttpClient) {}
  

  addfav(userFavslist: any,userEmail: string): Observable<any> {
    const url = `${this.apiUrl}/${userEmail}`;

    return this.http.post(url,userFavslist);
  }
  getUserFavoriteList(userEmail: string): Observable<any> {
    // const url = `${this.favUrl}/getuserfavslist/${userEmail}`;

    return this.http.get(`http://localhost:8083/user/getuserfavslist/${userEmail}`);
  }
  Createfav(userEmail: string, userFavslist: any[]): Observable<any> {
    const url = `${this.favUrl}/adduser`;

    const requestData = {
      userEmail: userEmail,
      userFavslist: userFavslist
    };

   
    return this.http.post(url, requestData);
  }
  deleteFavoriteCard(playcount: string,userEmail: string): Observable<any> {
    const url = `${this.favUrl}/deletefav/${userEmail}/${playcount}`;
    return this.http.delete(url);
  }
  getUsernameByEmail(userEmail: string): Observable<any> {
    
    // const Url = `http://localhost:8086/api/v1/username/${userEmail}`;
    return this.http.get(`http://localhost:8081/api/v1/username/${userEmail}`);
  }
  getUrlByEmail(emailId: string): Observable<string> {
    const url = `http://localhost:8081/api/v1/url/${emailId}`;
    return this.http.get<string>(url);
  }
  postToRecommendedPosts(url: string, userFavslist: any): Observable<any> {
    // Send a POST request with albumDetails to the recommended posts URL
    return this.http.post(url, userFavslist);
  }
}

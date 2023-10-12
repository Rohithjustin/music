import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const API_KEY = '83a87733c7bdb18d6ea1eea58c71ebde'; 
const API_URL = 'http://ws.audioscrobbler.com/2.0/';

@Injectable({
  providedIn: 'root'
})
export class LastfmService {

  constructor(private http: HttpClient) { }
  getTopAlbums(username: string): Observable<any> {
    const method = 'user.gettopalbums';
    const format = 'json';

    const url = `${API_URL}?method=${method}&user=${username}&api_key=${API_KEY}&format=${format}`;

    return this.http.get(url);
  }
  
}

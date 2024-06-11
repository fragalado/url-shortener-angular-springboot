import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(
    private http: HttpClient
  ) { }

  getShortUrl(url: string) {
    return this.http.get(`http://localhost:8080?url=${url}`)
  }

  getOriginalUrl(shortUrl: string) {
    return this.http.get(`http://localhost:8080/${shortUrl}`)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';
import { Post } from '../Models/post.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  hide() {
    throw new Error('Method not implemented.');
  }
  show() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient, private route: Router, private tokenService: TokenService) { }

  login(param: string) {
    return this.http.post<any>(
      `${environment.baseApiUrl}/Authenticate/login`, param)
  }

  register(param: string) {
    return this.http.post<any>(
      `${environment.baseApiUrl}/Authenticate/register`,param)
  };

  getAllPosts() {
    return this.http.get<any>(
      'https://localhost:44329/api/Post',
    );
  }

  addPost(data: any) {
    return this.http.post(
      'https://localhost:44329/api/Post', data,
    );
  }

  deletePost(id: any): Observable<any> {
    var options = new HttpParams();
    return this.http.delete(`${environment.baseApiUrl}/Post/${id}`,)
  }

  getAllProfiles() {
    return this.http.get<any>(
      'https://localhost:44329/api/Profile',
    );
  }


  addProfile(data: any) {
    return this.http.post(
      'https://localhost:44329/api/Profile', data,
    );
  }

  deleteProfile(userid: any): Observable<any> {
    var options = new HttpParams();
    return this.http.delete(`${environment.baseApiUrl}/Profile/${userid}`,)
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { observable, Observable } from 'rxjs'; 
import { posts } from '../classes/posts';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) { }
  getComment()
  { 
    let url = 'https://jsonplaceholder.typicode.com/posts/1/comments';
    return this.http.get(url);
  }
  getCommentWithParameter():Observable<any>  {
    let url = 'https://jsonplaceholder.typicode.com/comments';
    let param1  =new HttpParams().set("postId",'2');
    return this.http.get(url,{params:param1});
  }
  post(p:posts):Observable<any>{
    return this.http.post('https://jsonplaceholder.typicode.com/posts',p)
  }
}

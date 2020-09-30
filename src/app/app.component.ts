import { Component } from '@angular/core';
import { Comment } from './classes/comment';
import { APIService } from './services/api.service';
import { posts } from './classes/posts';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent {
 
  title = 'REST-API';
  
  listComment: Comment[]
  commentParam: Comment[]
  post:posts
  constructor(private api: APIService) {
    api.getComment().subscribe(item => {
      this.listComment = Object.values(item);
    })
    api.getCommentWithParameter().subscribe(item => {
      this.commentParam=Object.values(item);
    })
    this.sendPost().subscribe(
      data =>
      {
        this.post=data
      }
    )
  }
  sendPost(){
    let opost = new posts();
    opost.body='Sample Body';
    opost.title='Sample title';
    opost.userId=3
    return this.api.post(opost);
  }

}

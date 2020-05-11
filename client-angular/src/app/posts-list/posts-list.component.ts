import { Component, OnInit } from '@angular/core';
import { Post } from "../models/post/post";
import { DataService } from '../services/data-service/data.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts: Post[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchPosts()
      .subscribe(
        res => {
          this.posts = res;

        },
        error => {
          console.log(error);

        }
      )
  }

}

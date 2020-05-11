import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data-service/data.service";

import { User } from "../models/user/user";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private dataService: DataService) { }

  public users: User[];

  ngOnInit() {
    this.dataService.fetchUsers()
      .subscribe(
        res => {
          // console.log(res);
          this.users = res;
        },
        error => {
          console.log(error);

        }
      );

    this.dataService.getUserById("1")
      .subscribe(
        res => {
          // console.log(res);
          console.log(res);

        },
        error => {
          console.log(error);

        }
      );

  };
}

import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data-service/data.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private dataService: DataService) { }

  users: any[];

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

    this.dataService.getUserById()
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

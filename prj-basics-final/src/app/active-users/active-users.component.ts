import { Component, OnInit } from '@angular/core';

import { UsersService }   from '../users.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userSerice: UsersService) {
  }

  ngOnInit(): void {
    this.users = this.userSerice.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userSerice.setToInactive(id);
  }

}

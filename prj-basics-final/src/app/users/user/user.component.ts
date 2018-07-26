import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  paramSubscription: Subscription;

  constructor(private activedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.paramSubscription = this.activedRoute.params.subscribe((param: Params) => {
      this.user.id = param['id'];
      this.user.name = param['name'];
    });
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }
}

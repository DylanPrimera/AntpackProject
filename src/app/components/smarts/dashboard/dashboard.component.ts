import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/util/interfaces/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  public users: User[];
  public subscription = new Subscription();
  constructor(private apiServide: ApiService) { }

  ngOnInit(): void {
    this.subscription.add(this.apiServide.getUsers().subscribe((data:any) => {
      this.users = data;
  }));

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

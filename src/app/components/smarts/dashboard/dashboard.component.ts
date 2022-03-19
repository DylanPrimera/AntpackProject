import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/util/interfaces/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public users: User[];
  public email: any;
  constructor(private apiServide: ApiService) { }

  ngOnInit(): void {
    this.apiServide.getUsers().subscribe((data:any) => {
        this.users = data;
        this.apiServide.setSubUser(data);
    })

  }

  public getEmailToHash() {
      this.apiServide.getSubUser().subscribe()
  }

}

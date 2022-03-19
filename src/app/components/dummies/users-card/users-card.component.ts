import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/util/interfaces/user';
import { faEnvelope, faLocationDot, faBuilding } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-users-card',
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.scss']
})
export class UsersCardComponent implements OnInit {
  @Input() user: User;
  public emailIcon = faEnvelope;
  public cityIcon = faLocationDot;
  public companyIcon = faBuilding;

  constructor() { }

  ngOnInit(): void {
  }

}

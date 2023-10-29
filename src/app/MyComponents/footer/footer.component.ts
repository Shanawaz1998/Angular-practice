import { Component } from '@angular/core';
import { UserDetailsService } from 'src/app/Services/user-details.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
// Learning Service
userDataService:any=[];
constructor(private userData: UserDetailsService){
  this.userDataService= userData.userDetails()
}
}

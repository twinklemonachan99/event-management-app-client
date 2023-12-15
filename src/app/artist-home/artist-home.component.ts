import { Component } from '@angular/core';
import { EventManagementService } from '../services/api.service';

@Component({
  selector: 'app-artist-home',
  templateUrl: './artist-home.component.html',
  styleUrls: ['./artist-home.component.css']
})
export class ArtistHomeComponent {
  users :any
 constructor(private eventService:EventManagementService){
  
  this.users = this.getAllUsers();
  console.log("users",this.users);
 }
  addArtist()
  {
    let params={
      roleName:"User"
    }
    return this.eventService.addRoles(params);
  }


  getAllUsers()
  {
    return this.eventService.getUsers();
  }
}

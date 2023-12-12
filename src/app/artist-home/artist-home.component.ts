import { Component } from '@angular/core';
import { EventManagementService } from '../services/api.service';

@Component({
  selector: 'app-artist-home',
  templateUrl: './artist-home.component.html',
  styleUrls: ['./artist-home.component.css']
})
export class ArtistHomeComponent {
 constructor(private eventService:EventManagementService){

 }
  addArtist()
  {
    let params={
      roleName:"User"
    }
    return this.eventService.addRoles(params);
  }
}

import { Component } from '@angular/core';
import { EventManagementService } from '../services/api.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent {
  test:any;
  constructor(private service : EventManagementService){
    this.test =  this.service.getArtists();
  }
}

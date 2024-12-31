import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import {SongAPIService } from '../../services/song-api.service';
@Component({
  selector: 'app-song-search',
  standalone: false,
  
  templateUrl: './song-search.component.html',
  styleUrl: './song-search.component.scss'
})
export class SongSearchComponent {

  searchTerm: string = '';

  constructor(public songAPIService: SongAPIService) {}

  searchSongs() {
    console.log(`Search for: ${this.searchTerm}`);
    this.songAPIService.getSongs(this.searchTerm).subscribe((response: any) => {
      console.log(response);
      // this.songAPIService.songsList = response['results'];
      this.songAPIService.updateSongsList(response['results']);
    })
  }

}

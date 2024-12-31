import { Component } from '@angular/core';
import { SongAPIService } from '../../services/song-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-song-list',
  standalone: false,
  
  templateUrl: './song-list.component.html',
  styleUrl: './song-list.component.scss'
})
export class SongListComponent {

  songs: any[] = [];
  private subscription = new Subscription();

  constructor(private songAPIService: SongAPIService) {}

  ngOnInit() {
    this.subscription = this.songAPIService.newSongsData.subscribe((data: any) => {
      this.songs = data;
    })
    // this.getSongsList();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // getSongsList(){
  //   console.log("Songslistcomponent function call");
  //   if(this.songAPIService.songsList.length != 0) {
  //     this.songs = this.songAPIService.songsList;
  //     console.log("Songslistcomponent");
  //   }
  // }
}

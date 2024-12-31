import { Component } from '@angular/core';
import { SongAPIService } from './services/song-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'song-search';

  constructor(public songAPIService: SongAPIService) {}
}

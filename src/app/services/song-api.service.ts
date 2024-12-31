import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongAPIService {

baseUrl = 'https://itunes.apple.com/';
songsList = new BehaviorSubject<any>(null);
newSongsData = this.songsList.asObservable();
  constructor(private http: HttpClient) { }

  getSongs(searchTerm: string) {
    return this.http.get(`${this.baseUrl}/search?term=${searchTerm}&media=music&entity=album&attribute=artistTerm&limit=56`)
  }

  updateSongsList(data: any) {
    this.songsList.next(data);
  }
}

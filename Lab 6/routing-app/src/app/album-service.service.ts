import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Album } from './models/Post';
// import { Photo } from './models/Photo';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  BASE_URL: string;




  constructor(private client: HttpClient) {
    this.BASE_URL = 'https://jsonplaceholder.typicode.com/';
  }


  getAlbums():Observable<Album[]>{
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`)
  }

  getAlbum(id:number):Observable<Album>{
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`);
  }

  getAlbumPhotos(id:number):Observable<Photo[]>{
    return this.client.get<Photo[]>(`${this.BASE_URL}/albums/${id}/photos`);
  }

}

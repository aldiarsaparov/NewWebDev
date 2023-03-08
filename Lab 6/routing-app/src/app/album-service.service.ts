import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlbumI } from './album';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  BASE_URL: string;




  constructor(private client: HttpClient) {
    this.BASE_URL = 'https://jsonplaceholder.typicode.com';
  }


  getAlbums():Observable<AlbumI[]>{
    return this.client.get<AlbumI[]>(`${this.BASE_URL}/albums`)
  }

  getAlbum(id:number):Observable<AlbumI>{
    return this.client.get<AlbumI>(`${this.BASE_URL}/albums/${id}`);
  }

  getAlbumPhotos(id:number):Observable<Photo[]>{
    return this.client.get<Photo[]>(`${this.BASE_URL}/albums/${id}/photos`);
  }

}

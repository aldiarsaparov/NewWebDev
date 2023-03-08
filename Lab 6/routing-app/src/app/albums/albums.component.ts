import { Component } from '@angular/core';
import { AlbumI } from '../album';
import { AlbumsService } from '../album-service.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  Albums: AlbumI[]
  constructor(private AlbumsService: AlbumsService) {
    this.Albums = []
  }
  ngOnInit(): void {
    this.AlbumsService.getAlbums().subscribe((albums) => {
      this.Albums = albums;
    })
  }

  deleteItem(id: number) {
    const newAlbum = this.Albums.filter((album) => (
      album.id != id
    ))
    this.Albums = newAlbum;
  }
}

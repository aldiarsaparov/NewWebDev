import { Component } from '@angular/core';
import { Photo } from '../photo';
import { AlbumsService } from '../album-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent {
  albumId !: number;
  photos: Photo[]

  constructor(private albumService : AlbumsService,
              private activeRoute : ActivatedRoute){
    this.photos = [];
  }

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(){
    this.activeRoute.paramMap.subscribe((params) =>{
        this.albumId = Number(params.get("id"));
    })

    this.albumService.getAlbumPhotos(this.albumId).subscribe((photos) => {
      this.photos = photos;
    })
  }
}

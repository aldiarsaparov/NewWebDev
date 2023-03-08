import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumI } from '../album';
import { AlbumsService } from '../album-service.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent {
  al: AlbumI;
  inputTextTitle: string;

  constructor(private album: AlbumsService, private route: ActivatedRoute) {
    this.al = {} as AlbumI
    this.inputTextTitle = ""
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get("id"));
      this.album.getAlbum(id).subscribe((album) => {
        this.al = album;
      this.inputTextTitle = album.title;
      });
    })
  }

  edit() {
    this.al.title = this.inputTextTitle;
    this.inputTextTitle = '';
  }

}

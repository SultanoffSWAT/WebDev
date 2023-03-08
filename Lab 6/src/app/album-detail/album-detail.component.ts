import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Albums} from "../albums";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent {
  album:Albums;
  newAlbum:Albums;
  load:boolean;
  constructor(private albumsService:AlbumsService, private route:ActivatedRoute) {
    this.album = {} as Albums;
    this.newAlbum = {} as Albums;
    this.load = true;
  }
  ngOnInit(){
    this.getId();
  }
  getId(){
    this.route.paramMap.subscribe((params)=>{
      const id = Number(params.get('id'));
      this.load = false;
      this.albumsService.getAlbum(id).subscribe((album)=>{this.album = album; this.load = true;});
    })
  }

  save(){
    this.newAlbum.id = this.album.id;
    this.albumsService.updateAlbum(this.newAlbum).subscribe((album)=>this.album = album);
    this.newAlbum = {} as Albums;
  }
}

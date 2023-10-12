import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  userFavsList: any[] = [];
  userEmail: any = '';
  isPlayClicked: { [albumName: string]: boolean } = {};

  constructor(private favoriteService: FavoriteService) {
    this.loadUserFavorites();
  }

  ngOnInit(): void {
    this.loadUserFavorites();
    this.userEmail = sessionStorage.getItem("email");
    console.log(this.userEmail);
  }

  loadUserFavorites() {
    this.userEmail = sessionStorage.getItem("email");
    this.favoriteService.getUserFavoriteList(this.userEmail).subscribe((response) => {
      this.userFavsList = response;
    });
  }

  deleteCard(playcount: string) {
    this.favoriteService.deleteFavoriteCard(playcount, this.userEmail).subscribe(() => {
      this.userFavsList = this.userFavsList.filter(item => !(item.playcount === playcount));
    });
  }

  togglePlay(item:any) {
    this.isPlayClicked[item.artist] = !this.isPlayClicked[item.artist];
  }
}

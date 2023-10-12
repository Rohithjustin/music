import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FavoriteService } from 'src/app/services/favorite.service';
import { LastfmService } from 'src/app/services/lastfm.service';
import { RemomendService } from 'src/app/services/remomend.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isCardPlaying: { [key: string]: boolean } = {};
  panelOpenState = false;
  emailList: string[] = [];
  artistName: string = '';
  albumUrls: { [key: string]: string } = {};
  selectedAlbumUrl: string = '';
  username = 'rj'; 
  topAlbums: any[] = [];
  selectedArtist: any[] = [];
  userEmail:any ='';
  email:any ='';
  usernameprofile: string ='';
  navbarService: any;
  url:any;
  isAlbumClicked: { [key: string]: boolean } = {};
  recommendations: any[] = [];
 

  
  constructor(private lastfmService: LastfmService,
    private favoriteService: FavoriteService,
    private authService: AuthService,private recommendService: RemomendService) {
      this.userEmail = sessionStorage.getItem("email");
      // console.log(this.userEmail);
     
      this.userEmail = sessionStorage.getItem('email')



    this.email = this.userEmail;
    this.favoriteService.getUsernameByEmail(this.email).subscribe(resp => {
      // console.log(resp.url)
      this.username = resp.userName

    })
  

      // this.navbarService.show();
      }
      

  ngOnInit() {
    this.loadRecommendations();
 

    
  


 

  
  
    this.lastfmService.getTopAlbums(this.username).subscribe((data: any) => {
      this.topAlbums = data.topalbums.album;

      if (this.topAlbums.length > 0) {
       
        this.artistName = this.topAlbums[0].artist.name;
        // console.log('Selected Artist:', this.artistName);
      }

      this.topAlbums.forEach((album: any) => {
        this.albumUrls[album.name] = album.url;
      });

      // console.log('Album URLs:', this.albumUrls);
      // console.log('Top Albums Data:', this.topAlbums);
    });


    
  }
  // // emailurl(){
  // //   this.userEmail = sessionStorage.getItem("email");
  // //   this.favoriteService.getUrlByEmail(this.userEmail).subscribe((response) => {
  // //     this.url = response; 
       
  // //       console.log('URL:', this.url);
  // //     },
  // //     (error) => {
  // //       console.error('Error fetching URL:', error);
  // //     }
  // //   );
  // }
    
  

  
  addfav(album: any) {
    const userFavslist = {
      playcount: album.playcount,
      image: album.image[2]['#text'],
      artist: album.artist.name,
      albumTitle: album.name,
     
    };
    
   
  
    //  console.log(this.userEmail)
   
    this.favoriteService.addfav(userFavslist,this.userEmail).subscribe((response: any) => {
      // console.log('Album added to favorites:', response);
    });

  
  }
  postToRecommendedPosts(album: any) {
    const userFavslist = {
      playcount: album.playcount,
      image: album.image[2]['#text'],
      artist: album.artist.name,
      albumTitle: album.name,
     
    };
    this.isCardPlaying[album.name] = !this.isCardPlaying[album.name];
        const Url = `http://localhost:8084/api/v4/addRecommend`;

   
    this.favoriteService.postToRecommendedPosts(Url, userFavslist).subscribe(
      (response: any) => {
        console.log('Posted album details to recommended posts:', response);
      },
      (error) => {
        console.error('Error posting album details to recommended posts:', error);
      }
    );
  }
  loadRecommendations(): void {
    this.recommendService.getAllRecs()
      .subscribe((data: any[]) => {
        this.recommendations = data;
        console.log("hi")
      });
  }
  
}




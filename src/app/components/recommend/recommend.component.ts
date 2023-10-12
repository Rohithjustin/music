import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RemomendService } from 'src/app/services/remomend.service';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent {


  recommendations: any[] = [];
  

  constructor(private recommendService: RemomendService) { }

  ngOnInit(): void {
    this.loadRecommendations();
  }

  loadRecommendations(): void {
    this.recommendService.getAllRecs()
      .subscribe((data: any[]) => {
        this.recommendations = data;
        console.log("hi")
      });
  }
}
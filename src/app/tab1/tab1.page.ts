import { Component } from '@angular/core';
import { CatsService } from '../api/cats.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public catsService: CatsService) {}
  catImage;
  ngOnInit():void{
    this.getCatImage();
  }

  getCatImage(){
    this.catsService.getCatImage().subscribe(
      (res)=>{
        console.log(res);
        this.catImage = res[0].url;
      }
    );
  }
}

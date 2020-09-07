import { Banner } from './../../services/data-types/common.types';
import { HomeService } from './../../services/home.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  banners: Banner[];
  carouselActiveIndex = 0;

  @ViewChild(NzCarouselComponent, {static: true}) private nzCarousel: NzCarouselComponent;

  constructor(private homeService:HomeService) { 
    this.homeService.getBanners().subscribe(banners =>  {
      this.banners = banners;
    })
  }

  ngOnInit(): void {
  }

  onBeforeChange({to}) {
    this.carouselActiveIndex = to;
    console.log('activeIndex has changed to: ' + to);
  }

  onChangeSlide(type: string) {
    this.nzCarousel[type]();
  }

}

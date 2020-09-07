import { Component, OnInit, TemplateRef, ViewChild, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wy-carousel',
  templateUrl: './wy-carousel.component.html',
  styleUrls: ['./wy-carousel.component.less'],
  // 变更检测
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WyCarouselComponent implements OnInit {

  @Input() activeIndex = 0;
  @Output() changeSlide = new EventEmitter<'pre' | 'next'>();

  @ViewChild('dot', {static:true})dotRef: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }

  onChangeSlide(type: 'pre' | 'next') {
    this.changeSlide.emit(type);
  }


}

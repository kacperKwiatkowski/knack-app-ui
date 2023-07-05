import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')])
    ])
  ]
})
export class BannerComponent implements OnInit {
  @Input() images: string[] = [
    'https://images.pexels.com/photos/6102145/pexels-photo-6102145.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/5782668/pexels-photo-5782668.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/6102365/pexels-photo-6102365.jpeg?auto=compress&cs=tinysrgb&w=1600'
  ];
  @Input() isBanner = false;

  currentSlideIndex = 0;

  ngOnInit(): void {
    if (!this.isBanner) {
      setInterval(() => {
        this.currentSlideIndex = ++this.currentSlideIndex % this.images.length;
      }, 5000);
    }
  }
}

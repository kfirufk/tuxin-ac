import {AfterViewInit, Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'tuxin-ac-animated-images',
  templateUrl: './tuxin-ac-animated-images.component.html',
  styleUrls: ['./tuxin-ac-animated-images.component.scss'],
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({ opacity: 1, transform: 'scale(1)'})),
      state('middle', style({opacity: 1, transform: 'scale(1.2)'})),
      state('hidden', style({ opacity: 0, transform: 'scale(1.3)' })),
      transition('shown => middle', animate('3900ms')),
      transition('middle => hidden', animate('2600ms')),
    ]),
  ]
})
export class TuxinAcAnimatedImagesComponent implements OnInit, AfterViewInit {

  imgPosition = {
    1: {top: 0, left: 0},
    2: {top: 0, left: 0},
    3: {top: 0, left: 0},
    4: {top: 0, left: 0},
    5: {top: 0, left: 0},
    6: {top: 0, left: 0},
    7: {top: 0, left: 0},
    8: {top: 0, left: 0},
    9: {top: 0, left: 0},
    10: {top: 0, left: 0},
    11: {top: 0, left: 0},
    12: {top: 0, left: 0},
  };

  frontZIndex = 2;
  backZIndex = 1;

  currentImage = 2;

  imagesCount = 12;

  img1Image = 1;
  img2Image = 2;

  img1ZIndex = this.frontZIndex;
  img2ZIndex = this.backZIndex;

  img1AnimState = 'shown';
  img2AnimState = 'shown';

  nextImage() {
    if (this.currentImage + 1 > this.imagesCount) {
      this.currentImage = 1;
      return this.currentImage;
    } else {
      return ++this.currentImage;
    }
  }



  img1Loaded() {
    //  console.info('img1Loaded');

  }

  img2Loaded() {
    // console.info('img2Loaded');

  }

  img1AnimationEnded($event) {
    if ($event.toState === 'middle') {
      this.img1AnimState = 'hidden';
      this.img2AnimState = 'middle';
    } else if ($event.toState === 'hidden') {
      this.img1ZIndex = this.backZIndex;
      this.img2ZIndex = this.frontZIndex;
      this.img1AnimState = 'shown';
      this.img1Image = this.nextImage();
    }
  }

  img2AnimationEnded($event) {
    if ($event.toState === 'middle') {
      this.img2AnimState = 'hidden';
      this.img1AnimState = 'middle';
    } else if ($event.toState === 'hidden') {
      this.img2ZIndex = this.backZIndex;
      this.img1ZIndex = this.frontZIndex;
      this.img2AnimState = 'shown';
      this.img2Image = this.nextImage();
    }
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.img1AnimState = 'middle';
  }

}

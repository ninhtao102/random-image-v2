import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { images } from './constant';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  data = images
  imageOdd: string = ''
  imageEven: string = ''
  index: number = 0
  isFlip: boolean = true

  ngOnInit(): void {
    this.onNext(0)
  }

  onNext(index: number): void {
    this.isFlip = !this.isFlip
    this.imageOdd = this.data[index]
    this.imageEven = this.data[index + 1]
    this.index = index
    if (index === images.length - 1) {
      this.index = -1
    }
  }

}

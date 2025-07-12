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
  image: string = ''
  index: number = 0
  isFlip: boolean = true

  ngOnInit(): void {
    this.onNext(0)
  }

  onNext(index: number): void {
    this.isFlip = !this.isFlip
    this.image = this.data[index]
    this.index = index
    if (index === images.length - 1) {
      this.index = -1
    }
  }

}

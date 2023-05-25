import { Component } from '@angular/core';
import { DataRetrievalService } from './services';

/*

Decorator Pattern, similarities:
- Wrapper Structure
- Composition (on top of each other)
- Dynamic Extension

*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data: number[] = [];

  constructor(private dataRetrievalService: DataRetrievalService) {}

  fetch() {
    this.dataRetrievalService.getData().subscribe((data) => (this.data = data));

    // 👆 this is the same as:

    const observer = {
      next: (data: any) => (this.data = data),
    };

    this.dataRetrievalService.getData().subscribe(observer);
  }
}

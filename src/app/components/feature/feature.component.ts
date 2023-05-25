import { Component } from '@angular/core';
import { BackendApiService } from 'src/app/services';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent {
  constructor(private backendApiService: BackendApiService) {}

  login(): void {
    this.backendApiService
      .login('username', 'password')
      .subscribe((success: any) => {
        if (success) {
          // Authentication successful
        } else {
          // Authentication failed
        }
      });
  }

  getData(): void {
    this.backendApiService.getData().subscribe((data: any) => {
      // Handle retrieved data
    });
  }

  saveData(): void {
    this.backendApiService
      .saveData({
        /* data object */
      })
      .subscribe((success: any) => {
        if (success) {
          // Data saved successfully
        } else {
          // Data persistence failed
        }
      });
  }
}

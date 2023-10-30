import { Component } from '@angular/core';

@Component({
  selector: 'app-info-display',
  templateUrl: './info-display.component.html',
  styleUrls: ['./info-display.component.css']
})
export class InfoDisplayComponent {

  latitude = 52.52;
  longitude = 13.41;
  hourly = 'temperature_2m';

  ngOnInit(){
    let apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&hourly=${this.hourly}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Handle the data from the API response here
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

}

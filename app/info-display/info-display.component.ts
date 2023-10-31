import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-display',
  templateUrl: './info-display.component.html',
  styleUrls: ['./info-display.component.css']
})
export class InfoDisplayComponent implements OnInit {

  latitude: number = 52.52;
  longitude: number = 13.41;
  hourly = 'temperature_2m';

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        console.log("0");
        console.log(`Latitude: ${this.latitude}, Longitude: ${this.longitude}`);
        this.fetchWeatherData(); // Call the function to fetch weather data after getting coordinates
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  fetchWeatherData() {
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

  
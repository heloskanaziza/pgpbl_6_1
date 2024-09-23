import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;

  // Define the Street, Topographic, and a new base map (CartoDB Positron)
  streetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  topographicMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://opentopomap.org/">OpenTopoMap</a> contributors'
  });

  // Replace Satellite map with CartoDB Positron
  positronMap = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://carto.com/attributions">CartoDB</a> contributors'
  });

  // Stamen Watercolor map
  watercolorMap = L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg', {
    attribution: '&copy; <a href="https://stamen.com">Stamen Design</a> contributors'
  });

  // Esri World Imagery map
  esriWorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{x}/{y}', {
    attribution: '&copy; <a href="https://www.esri.com/">Esri</a> &mdash; Source: Esri, USGS, NOAA'
  });

  // New Basemap 1: Dark Matter (CartoDB Dark)
  darkMatterMap = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://carto.com/attributions">CartoDB</a> contributors'
  });

  constructor() {}

  ionViewDidEnter() {
    // Initialize the map and set view
    this.map = L.map('mapId').setView([-7.770939335714962, 110.37761533840921], 10);

    // Add the default base layer (Street Map)
    this.streetMap.addTo(this.map);

    // Add a circular marker (simple marker)
    const circleMarker = L.circleMarker([-7.770939335714962, 110.37761533840921], {
      radius: 5,  // size of the circle marker
      color: '#3388ff',  // border color
      fillColor: '#3388ff',  // fill color
      fillOpacity: 1
    }).addTo(this.map);

    // Bind a popup to the circle marker
    circleMarker.bindPopup('<b>Hello!</b><br>This is Gadjah Mada University.').openPopup();

    // Layer control with base maps (Street, Topographic, CartoDB Positron)
    const baseMaps = {
      'Street Map': this.streetMap,
      'Topographic Map': this.topographicMap,
      'Positron Map': this.positronMap,
      'Water Color Map': this.watercolorMap ,
      'Esri World Imagery': this.esriWorldImagery,
      'darkMatterMap': this.darkMatterMap
    };

    // Add the layer control to the map
    L.control.layers(baseMaps).addTo(this.map);
  }
}


// import { Component } from '@angular/core';
// import * as L from 'leaflet';

// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage {

//   map!: L.Map;

//   constructor() {}
//   ionViewDidEnter() {
//     this.map = L.map('mapId').setView([-7.783430927372292, 110.37622194028354], 15)
//     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> constributors'
//     }).addTo(this.map);
//   }

// }

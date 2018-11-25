const Munros = require('./models/munros.js');
const ListView = require('./views/list_view.js');
const RegionView = require('./views/region_view.js');
const MapMunros = require('./views/map_view.js');


document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');

  const munrosListContainer = document.querySelector('#munros');
  const munrosListView = new ListView(munrosListContainer)
  munrosListView.bindEvents();

  const regionContainer = document.querySelector('#munro-region-dropdown');
  const regionView = new RegionView(regionContainer)
  regionView.bindEvents();

  const mapContainer = document.querySelector('#munros-map');
  const mapView = new MapMunros(mapContainer);
  mapView.bindEvents();


  const munros = new Munros();
  munros.getData();
});

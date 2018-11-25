const MapMunros = function (container) {
  this.container = container
};

MapMunros.prototype.bindEvents = function () {


  // example code with my stuff
  const mymap = L.map('munros-map')
  mymap.setView([51.505, -0.09], 13);
  // this will be a map of London

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={pk.eyJ1IjoibG1lcm9teSIsImEiOiJjam5vZGgxeWUwN3dkM2xwZmJqM3ZtMWJsIn0.UiEUlj4iaZ7NNM34D8pluA}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.satellite'
    // accessToken: 'pk.eyJ1IjoibG1lcm9teSIsImEiOiJjam5vZGgxeWUwN3dkM2xwZmJqM3ZtMWJsIn0.UiEUlj4iaZ7NNM34D8pluA'
  }).addTo(mymap);

};

module.exports = MapMunros;

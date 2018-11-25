const DetailView = function(container, munro) {
  this.munrosContainer = container;
  this.munro = munro;
};


DetailView.prototype.render = function () {
  const munroContainer = document.createElement('div');
  munroContainer.classList.add('munro');

  const name = this.createMunroName();
  munroContainer.appendChild(name);

  const elevation = this.createMunroElev();
  munroContainer.appendChild(elevation);

  this.munrosContainer.appendChild(munroContainer);
  // console.log(this.munro.height);

};

DetailView.prototype.createMunroName = function () {
  const name = document.createElement('h4');
  name.textContent = this.munro.name;
  return name;
};

DetailView.prototype.createMunroElev = function () {
  const elev = document.createElement('p');
  elev.textContent = `Elevation (m): ${this.munro.height}`;
  return elev;
};

module.exports = DetailView;

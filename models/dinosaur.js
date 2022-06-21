const Dinosaur = function (species, diet, guestsAttractedPerDay) {
  this.species = species;
  this.diet = diet;
  this.guestsAttractedPerDay = guestsAttractedPerDay;
};

Dinosaur.prototype.isEmpty = function () {
  return !this.species;
};

module.exports = Dinosaur;

const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = [];
};

Park.prototype.numberOfDinosaurs = function () {
  return this.collectionOfDinosaurs.length;
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.collectionOfDinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  const index = this.collectionOfDinosaurs.indexOf(dinosaur);
  this.collectionOfDinosaurs.splice(index, 1);
};

Park.prototype.findMostPopularDinosaur = function () {
  let count = 0;
  let popularDinosaur;

  for (let dinosaur of this.collectionOfDinosaurs) {
    if (dinosaur.guestsAttractedPerDay > count) {
      count = dinosaur.guestsAttractedPerDay;
      popularDinosaur = dinosaur;
    }
  }
  return popularDinosaur.species;
};

Park.prototype.countSpecies = function (species) {
  let speciesCount = 0;
  for (let dinosaur of this.collectionOfDinosaurs) {
    if (dinosaur.species === species) {
      speciesCount += 1;
    }
  }
  return speciesCount;
};

Park.prototype.visitorsPerDay = function () {
  let visitorsCount = 0;
  for (let dinosaur of this.collectionOfDinosaurs) {
    visitorsCount += dinosaur.guestsAttractedPerDay;
  }
  return visitorsCount;
};

Park.prototype.visitorsPerYear = function () {
  return this.visitorsPerDay() * 365;
};

Park.prototype.revenueForYear = function () {
  return this.visitorsPerYear() * this.ticketPrice;
};

Park.prototype.removeBySpecies = function (species) {
  let newDinosaurList = [];

  for (let dinosaur of this.collectionOfDinosaurs) {
    if (dinosaur.species !== species) {
      newDinosaurList.push(dinosaur);
    }
  }
  this.collectionOfDinosaurs = newDinosaurList;
};

Park.prototype.dietTypes = function () {
  let dietTypes = { carnivore: 0, herbivore: 0, omnivore: 0 };

  for (let dinosaur of this.collectionOfDinosaurs) {
    for (let diet in dietTypes) {
      if (dinosaur.diet === diet) {
        dietTypes[diet] += 1;
      }
    }
  }
  return dietTypes;
};

module.exports = Park;

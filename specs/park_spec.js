const assert = require("assert");
const Park = require("../models/park.js");
const Dinosaur = require("../models/dinosaur.js");

describe("Park", function () {
  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;

  beforeEach(function () {
    park = new Park("Jurassic World", 10);
    dinosaur1 = new Dinosaur("Brachiosaurus", "herbivore", 125);
    dinosaur2 = new Dinosaur("Velociraptor", "carnivore", 150);
    dinosaur3 = new Dinosaur("Triceratops", "herbivore", 100);
    dinosaur4 = new Dinosaur("Triceratops", "herbivore", 50);
  });

  it("should have a name", function () {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic World");
  });

  it("should have a ticket price", function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it("should have a collection of dinosaurs", function () {
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it("should be able to add a dinosaur to its collection", function () {
    park.addDinosaur(dinosaur1);
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 1);
  });

  it("should be able to remove a dinosaur from its collection", function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeDinosaur();
    const actual = park.collectionOfDinosaurs;
    const expected = [dinosaur1, dinosaur2, dinosaur3];
    assert.deepStrictEqual(actual, expected);
  });

  it("should be able to find the dinosaur that attracts the most visitors", function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.findMostPopularDinosaur();
    assert.strictEqual(actual, "Velociraptor");
  });

  it("should be able to find all dinosaurs of a particular species", function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.countSpecies("Triceratops");
    assert.strictEqual(actual, 2);
  });

  it("should be able to calculate the total number of visitors per day", function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.visitorsPerDay();
    assert.strictEqual(actual, 425);
  });

  it("should be able to calculate the total number of visitors per year", function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.visitorsPerYear();
    assert.strictEqual(actual, 155125);
  });

  it("should be able to calculate total revenue for one year", function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.revenueForYear();
    assert.strictEqual(actual, 1551250);
  });

  it("should be able to remove all dinosaurs of a particular species", function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.removeBySpecies("Velociraptor");
    const actual = park.collectionOfDinosaurs;
    const expected = [dinosaur1, dinosaur3, dinosaur4];
    assert.deepStrictEqual(actual, expected);
  });

  it("should be able to provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type", function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.dietTypes();
    const expected = { carnivore: 1, herbivore: 3, omnivore: 0 };
    assert.deepStrictEqual(actual, expected);
  });
});

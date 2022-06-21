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
  });
  dinosaur1 = new Dinosaur("Brachiosaurus", "herbivore", 125);
  dinosaur2 = new Dinosaur("Velociraptor", "carnivore", 150);
  dinosaur3 = new Dinosaur("Triceratops", "herbivore", 100);
  dinosaur4 = new Dinosaur("Triceratops", "herbivore", 50);

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
    const expected = [dinosaur1, dinosaur2, dinosaur3];
    assert.deepStrictEqual(park.collectionOfDinosaurs, expected);
  });

  it("should be able to find the dinosaur that attracts the most visitors", function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const expected = park.findMostPopularDinosaur();
    assert.strictEqual(expected, "Velociraptor");
  });

  it("should be able to find all dinosaurs of a particular species", function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const expected = park.countSpecies("Triceratops");
    assert.strictEqual(expected, 2);
  });

  it("should be able to calculate the total number of visitors per day", function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const expected = park.visitorsPerDay();
    assert.strictEqual(expected, 425);
  });

  it("should be able to calculate the total number of visitors per year", function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const expected = park.visitorsPerYear();
    assert.strictEqual(expected, 155125);
  });

  it("should be able to calculate total revenue for one year", function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const expected = park.revenueForYear();
    assert.strictEqual(expected, 1551250);
  });
});

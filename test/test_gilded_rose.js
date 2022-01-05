var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');
const fs  = require('fs');
const { assert } = require('console');
const exp = require('constants');

describe("Gilded Rose", function() {

  it("update quality of a normal item", function() {
    const foo = new Item("foo", 20, 10);

    const shop = new Shop([foo]);
    const items = shop.updateQuality();

    expect(foo.sellIn).to.equal(19);
    expect(foo.quality).to.equal(9);
  });

  it("matches the expected output", function() {
    const items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    
      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 3, 6),
    ];
    
    const days = 30;
    const gildedRose = new Shop(items);

    let actualOutput = '';
    
    for (let day = 0; day <= days; day++) {
      if (day !== 0) {
        actualOutput += "\n\n"
      }
      actualOutput += "-------- day " + day + " --------";
      actualOutput += "\nname, sellIn, quality";
      items.forEach(item => actualOutput += "\n" + item.name + ", " + item.sellIn + ", " + item.quality);
      gildedRose.updateQuality();
    }

    const expectedOutput = fs.readFileSync('expected-output.txt', {encoding:'utf8', flag:'r'})
    expect(actualOutput).to.equal(expectedOutput.toString());
  });

});

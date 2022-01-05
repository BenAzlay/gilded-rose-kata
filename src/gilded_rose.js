class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  /*
  /!\ Do not change code above this line /!\
  */

  updateItem(i, qualityDiff, qualityIncrease) {
    if (qualityIncrease) {
      this.items[i].quality += qualityDiff;
    } else {
      this.items[i].quality -= qualityDiff;
    }
    
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      let { name, sellIn, quality } = this.items[i];
      if (name === 'Sulfuras, Hand of Ragnaros') {
        continue
      }
      this.items[i].sellIn -= 1;
      let qualityDiff = sellIn < 0 ? 2 : 1;
      switch(this.items[i].name) {
        case 'Aged Brie':
          this.updateItem(i, qualityDiff, true);
          break;
        default:
          this.updateItem(i, qualityDiff, false);
          break;
      }

    //   if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
    //     if (this.items[i].quality > 0) {
    //       if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //         this.items[i].quality = this.items[i].quality - 1;
    //       }
    //     }
    //   } else {
    //     if (this.items[i].quality < 50) {
    //       this.items[i].quality = this.items[i].quality + 1;
    //       if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
    //         if (this.items[i].sellIn < 11) {
    //           if (this.items[i].quality < 50) {
    //             this.items[i].quality = this.items[i].quality + 1;
    //           }
    //         }
    //         if (this.items[i].sellIn < 6) {
    //           if (this.items[i].quality < 50) {
    //             this.items[i].quality = this.items[i].quality + 1;
    //           }
    //         }
    //       }
    //     }
    //   }
    //   if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //     this.items[i].sellIn = this.items[i].sellIn - 1;
    //   }
    //   if (this.items[i].sellIn < 0) {
    //     if (this.items[i].name != 'Aged Brie') {
    //       if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
    //         if (this.items[i].quality > 0) {
    //           if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //             this.items[i].quality = this.items[i].quality - 1;
    //           }
    //         }
    //       } else {
    //         this.items[i].quality = this.items[i].quality - this.items[i].quality;
    //       }
    //     } else {
    //       if (this.items[i].quality < 50) {
    //         this.items[i].quality = this.items[i].quality + 1;
    //       }
    //     }
    //   }
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}

class Potion {

  constructor(potency, color, price) {
    this.potency = potency;
    this.color = color;
    this.price = price
  }

  getColor(items) {
    let itemColors = [];
    items.forEach((item) => {
      itemColors.push(Material.items[item].color);
    });
    return Potion.colorCombos[itemColors.sort()]
  }

  getPotency(items) {
    let itemPotencys = [];
    items.forEach((item) => {
      itemPotencys.push(Material.items[item].potency);
    });

    let max = Potion.potencyCombos[itemPotencys.sort()];
    let rand = Utils.randomNumber(0, max);

    if (rand <= 2) {
      return "weak";
    } else if (rand > 2 && rand <= 8) {
      return "medium"
    } else {
      return "strong"
    }

  }

  getPrice() {
    return Potion.colorPrice[this.color] + Potion.potencyPrice[this.potency];
  }
}

//Sort Alpabetically
Potion.colorCombos = {
  [['yellow', 'yellow']]: 'yellow',
  [['orange', 'yellow']]: 'yellow-orange',
  [['red', 'yellow']]: 'orange',
  [['violet', 'yellow']]: 'brown',
  [['blue', 'yellow']]: 'green',
  [['green', 'yellow']]: 'yellow-green',
  [['orange', 'red']]: 'red-orange',
  [['orange', 'violet']]: 'brown',
  [['blue', 'orange']]: 'brown',
  [['green', 'orange']]: 'brown',
  [['red', 'red']]: 'red',
  [['red', 'violet']]: 'red-violet',
  [['blue', 'red']]: 'violet',
  [['green', 'red']]: 'brown',
  [['violet', 'violet']]: 'violet',
  [['blue', 'violet']]: 'blue-violet',
  [['green', 'violet']]: 'brown',
  [['blue', 'blue']]: 'blue',
  [['blue', 'green']]: 'blue-green',
  [['green', 'green']]: 'green',

}

Potion.potencyCombos = {
  [['weak', 'weak']]: 0,
  [['medium', 'weak']]: 3,
  [['strong', 'weak']]: 5,
  [['medium', 'strong']]: 10,
  [['medium', 'medium']]: 8,
  [["strong", "strong"]]: 15,
}

Potion.colorPrice = {
  yellow: 10,
  'yellow-orange':30,
  orange: 20,
  'red-orange': 30,
  red: 10,
  'red-violet': 20,
  violet: 30,
  'blue-violet': 20,
  blue: 10,
  'blue-green': 25,
  green: 10,
  'yellow-green': 10,
  brown: 5,
}

Potion.potencyPrice = {
  weak: 5,
  medium: 10,
  strong: 20,
}
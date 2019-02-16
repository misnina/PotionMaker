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
  [['orange', 'yellow']]: 'orange',
  [['red', 'yellow']]: 'orange',
  [['violet', 'yellow']]: 'brown',
  [['blue', 'yellow']]: 'green',
  [['green', 'yellow']]: 'green',
  [['orange', 'red']]: 'orange',
  [['orange', 'violet']]: 'brown',
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
  orange: 20,
  red: 10,
  violet: 30,
  blue: 10,
  green: 10,
  brown: 5,
}

Potion.potencyPrice = {
  weak: 5,
  medium: 10,
  price: 20,
}
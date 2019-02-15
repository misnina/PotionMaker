class Material {

  constructor({name, amount}) {
    this.name = name;
    this.amount = amount;
  }

}

Material.items = {
  slime: {
    name: 'slime',
    price: 5,
    color: 'green',
  },
  sunflowers: {
    name: 'sunflowers',
    price: 3,
    color: 'yellow',
  }
}

Material.colorCombos = {
  [['yellow', 'yellow']]: 'yellow',
  [['orange', 'yellow']]: 'orange',
  [['red', 'yellow']]: 'orange',
  [['violet', 'yellow']]: 'brown',
  [['blue', 'yellow']]: 'green',
  [['green', 'yellow']]: 'green',
  [['orange', 'red']]: 'orange',
  [['orange', 'violet']]: 'brown',
}
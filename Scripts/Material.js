class Material {

  constructor({name, amount}) {
    this.name = name;
    this.amount = amount;
  }

}

Material.items = {
  slime: {
    properName: 'Green Slime',
    price: 5,
    color: 'green',
    potency: 'weak',
  },
  sunflowers: {
    properName: 'Yellow Sunflowers',
    price: 3,
    color: 'yellow',
    potency: 'medium',
  }
}
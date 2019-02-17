class Material {

  constructor({name, amount}) {
    this.name = name;
    this.amount = amount;
  }

}

Material.items = {
  slime: {
    properName: 'Green Slime',
    color: 'green',
    potency: 'weak',
    maxRange: 10,
  },
  sunflowers: {
    properName: 'Yellow Sunflowers',
    color: 'yellow',
    potency: 'medium',
    maxRange: 5,
  },
  spices: {
    properName: 'Red Spices',
    color: 'red',
    potency: 'medium',
    maxRange: 3,
  },
  lapis: {
    properName: 'Blue Lapis',
    color: 'blue',
    potency: 'strong',
    maxRange: 2,
  },
  blaze: {
    properName: 'Orange Blaze',
    color: 'orange',
    potency: 'weak',
    maxRange: 5,
  }
}
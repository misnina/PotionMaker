class GameManager {

  constructor() {
    this.gold = 50;
    this.potions = [];
    this.materials = new MaterialList();
  }

  static start() {
    console.log("Hello");
    const game = new GameManager();

    game.createMaterialsList();
    $('#create-potion').click(()=> {
      game.checkArray();
    });

    $('#farm-materials').click(()=> {
      game.addMaterials();
    });

  }

  update() {
    this.renderPotionList();
    this.renderMaterialList();
    this.renderGold();
  }

  renderPotionList() {
    $('#potion-list').empty();
    this.potions.forEach((potion, i)=> {
      let potionInsert = 
      `<div class="potion" id="${i}">
        ${potion.potency} ${potion.color} potion
        <button class="sell">Sell | $${potion.price}</button></li>
      </div>`;
      $('#potion-list').append(potionInsert);
      $(`#${i}`).find(".sell").click(() => {this.sellPotion(i)});

    })
  }

  renderMaterialList() {
    $('#material-list').empty();
    this.materials.forEach((item) => {
      let materialInsert =
      `<div class="material">
        <input type="checkbox" class="box" id="${item.name}" value="${item.name}"/>
        ${Material.items[item.name].properName} ${item.amount}
      </div>
      `;

      $('#material-list').append(materialInsert);
    });
  }

  renderGold() {
    $('#gold').html(`Gold: $${this.gold}`);
  }

  createMaterialsList() {
    this.materials.push(new Material({name: "slime", amount: 0}));
    this.materials.push(new Material({name: "sunflowers", amount: 0}));
    this.update();
  }

  addMaterials() {
    if(this.gold < 10) {
      $('#text').html(`"You don't have enough money to farm for materials!"`);
      return
    }

    this.gold -= 10;
    this.materials.push(new Material({name: "slime", amount: Utils.randomNumber(0, 5)}));
    this.materials.push(new Material({name: "sunflowers", amount: Utils.randomNumber(0, 3)}));
    this.update();
  }

  addPotion(items) {
    let potion = new Potion();
    potion.potency = potion.getPotency(items);
    potion.color = potion.getColor(items);
    potion.price = potion.getPrice();
    this.potions.push(potion);
    this.update();
  }

  sellPotion(i) {
    $(`#${i}`).empty();
    this.gold += this.potions[i].price;
    this.potions.splice(i, 1);
    this.update();
  }

  checkArray() {
    let checkArray = [];

    $(".box:checked").each(function() {
      console.log($(this).val());
      checkArray.push($(this).val());
    });
    
    let that = this;
    let allValid = (checkArray.length == 2) && checkArray.every((item) => {
      return that.materials[GameManager.MaterialKeys[item]].amount > 0;
    });

    $('#text').empty();

    if(allValid) {
      this.createPotion(checkArray);
      $('#text').html('"Potion successfully created!');
    } else {
      $('#text').html(`"You must select only two ingredients, of which you have stock of."`);
    }

  }

  createPotion(items) {
    this.addPotion(items);
    this.useMaterials(items);
    this.update();
  }

  useMaterials(items) {
    let that = this;
    items.forEach((item) => {
      that.materials[GameManager.MaterialKeys[item]].amount--;
    });

  }

}

GameManager.MaterialKeys = {
  slime: 0,
  sunflowers: 1,
}


$(GameManager.start);
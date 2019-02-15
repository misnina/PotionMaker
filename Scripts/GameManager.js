class GameManager {

  constructor() {
    this.gold = 100;
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
  }

  renderPotionList() {
    $('#potion-list').empty();
    this.potions.forEach((potion, i)=> {
      let potionInsert = 
      `<div class="potion" id="${i}">
        ${potion.potency} ${potion.color} potion
      </div>`;

      $('#potion-list').append(potionInsert);

    })
  }

  renderMaterialList() {
    $('#material-list').empty();
    this.materials.forEach((item) => {
      let materialInsert =
      `<div class="material">
        <input type="checkbox" class="box" "id="${item.name}" value="${item.name}"/>
        ${item.name} ${item.amount}
      </div>
      `;

      $('#material-list').append(materialInsert);
    });
  }

  createMaterialsList() {
    this.materials.push(new Material({name: "slime", amount: 0}));
    this.materials.push(new Material({name: "sunflowers", amount: 0}));
    this.update();
  }

  addMaterials() {
    this.materials.push(new Material({name: "slime", amount: Utils.randomNumber(0, 5)}));
    this.materials.push(new Material({name: "sunflowers", amount: Utils.randomNumber(0, 5)}));
    this.update();
  }

  addPotion() {
    this.potions.push(new Potion({potency: "weak", color: "green"}));
    this.update();
    console.log(this.potions);
  }

  checkArray() {
    let checkArray = [];

    $(".box:checked").each(function() {
      console.log($(this).val());
      checkArray.push($(this).val());
    });
    console.log(checkArray);
    
    let that = this;
    let allValid = checkArray.length && checkArray.every((item) => {
      console.log(that.materials[0]);
      return that.materials[GameManager.MaterialKeys[item]].amount > 0;
    });

    $('#text').empty();

    if(allValid) {
      this.createPotion(checkArray);
      $('#text').html('"Potion successfully created!');
    } else {
      $('#text').html(`"You don't have the ingredients!"`);
    }

  }

  createPotion(checkArray) {
    this.addPotion();
    this.useMaterials(checkArray);
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
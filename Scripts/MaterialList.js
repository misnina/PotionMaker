class MaterialList extends Array {
  push(...items) {
    items.forEach(item => {
      let index = this.materialIndex(item.name);
      if (index > -1) {
        this[index].amount += item.amount;
      } else {
        Array.prototype.push.call(this, item);
      }
    });
  }

  materialIndex(name) {
    return this.map(mat => mat.name).indexOf(name);
  }
}
const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },

  addPotion(potionName) {
    for (let item of this.potions) {
      if (item.name === potionName.name) {
        return `Зелье ${potionName.name} уже есть в инвентаре!`
      }
    }

    this.potions.push(potionName);
  },

/* Alternative */
  
  /* addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }
    this.potions.push(potionName);
  }, */

  removePotion(potionName) {

    for (let i = 0; i < this.potions.length; i += 1) {

      const item = this.potions[i];

      if (potionName === item.name) {
        return this.potions.splice(i, 1)
      
      } 
    }
        return `Зелья ${potionName} нет в инвентаре!`  
  },
  
/* Alternative */
  /* 
  emovePotion(potionName) {
         for (const key of Object.keys(this.potions)){//перебираем ключи обьекта которые в this.potions
             const potions = this.potions[key];//записываем в переменную каждый существующий обьект
             if (potionName === potions.name) {
                return this.potions.splice(key, 1);
           }} */

  updatePotionName(oldName, newName) {

    for (let i = 0; i < this.potions.length; i += 1) {

      const item = this.potions[i];

      if (oldName === item.name) {
       
        return item.name = newName;
        
      } 
      
    }
    return  `Зелья ${oldName} нет в инвентаре!`
  },
  
}



console.table(atTheOldToad.potions);

console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'));


console.table(atTheOldToad.potions);


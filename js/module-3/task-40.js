const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {
    // Пиши код ниже этой строки
    const indexToChange = this.potions.indexOf(oldName);
    this.potions.splice(indexToChange, 1, newName)


    // 🔥 Оставляем три пустые строки для студента
    // Пиши код выше этой строки
  },
};


console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
// ['Зелье скорости', 'Полиморф', 'Каменная кожа'].
console.log(atTheOldToad.potions);

console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Невидимка'));
// ['Зелье скорости', 'Полиморф', 'Невидимка']
console.log(atTheOldToad.potions);
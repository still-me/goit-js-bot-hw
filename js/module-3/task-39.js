const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  removePotion(potionName) {
    // Пиши код ниже этой строки
    const indexToDelete = this.potions.indexOf(potionName);
    this.potions.splice(indexToDelete,1)
    // 🔥 Оставляем три пустые строки для студента
    // Пиши код выше этой строки
  },
};

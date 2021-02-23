//* includes()
/* Метод includes()
Метод строк includes(substring) проверяет входит ли подстрока substring в строку, возвращает буль - true если входит и false в противном случае. Регистр символов в строке и подстроке имеет значение, так как например буква 'a' не равна букве 'А'.

!const productName = 'Ремонтный дроид';
!
!console.log(productName.includes('н')); // true
!console.log(productName.includes('Н')); // false
!console.log(productName.includes('дроид')); // true
!console.log(productName.includes('Дроид')); // false
!console.log(productName.includes('Ремонтный')); // true
!console.log(productName.includes('ремонтный')); // false 
 */

function checkForName(fullName, name) {
 const result = fullName.includes(name) ; // Дополни эту строку
  return result;
}

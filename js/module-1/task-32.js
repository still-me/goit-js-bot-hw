//* slice()
/* Метод slice()
Метод строк slice(startIndex, endIndex) используется для создания копии части или всей строки. Он делает копию элементов строки от startIndex и до, но не включая endIndex и возвращает новую строку.

!const productName = 'Ремонтный дроид';
!console.log(productName.slice(0, 4)); // 'Ремо'
!console.log(productName.slice(3, 9)); // 'онтный'
!console.log(productName.slice(0, productName.length)); // 'Ремонтный дроид'
!console.log(productName.slice(10, productName.length)); // 'дроид'
 */

function getSubstring(string, length) {
    const substring = string.slice(0, length); // Дополни эту строку

  return substring;
}
console.log(getSubstring('Привет мир', 3));
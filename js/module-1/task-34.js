//* toLowerCase()
//* toUpperCase()

/* Методы toLowerCase() и toUpperCase()
Бывают ситуации когда все символы в строке необходимо преобразовать в один регистр, верхний или нижний. Например, при поиске по ключевому слову, когда пользователь вводит строку 'saMsUng', а сравнить её надо со строкой 'samsung' или 'SAMSUNG'.

!console.log('saMsUng' === 'samsung'); // false
!console.log('saMsUng' === 'SAMSUNG'); // false
Чтобы не требовать абсолютно точный ввод можно сделать «нормализацию» введённой пользователем строки, то есть преобразовать все её символы в верхний или нижний регистр. Методы строки toLowerCase() и toUpperCase() вернут новую строку в соответствующем регистре, не изменяя оригинальную.

!const BRAND_NAME = 'SAMSUNG';
!const userInput = 'saMsUng';
!const normalizedToUpperCaseInput = userInput.toUpperCase();

!console.log(userInput); // 'saMsUng'
!console.log(userInput === BRAND_NAME); // false
!console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
!console.log(normalizedToUpperCaseInput === BRAND_NAME); // true 
 */


function normalizeInput(input) {
  const normalizedInput = input.toLowerCase() ; // Дополни эту строку
  return normalizedInput;
}
console.log(normalizeInput('Привет мир'))

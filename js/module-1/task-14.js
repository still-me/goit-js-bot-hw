/* Операторы сравнения === и !==
«Нестрогие» операторы == и != выполняют преобразование типов сравниваемых значений, что может привести к ошибкам, особенно у начинающих.

? // ❌ Плохо, выполняется приведение типов
!console.log(5 == '5'); // true
!console.log(5 != '5'); // false
!console.log(1 == true); // true
!console.log(1 != true); // false
Поэтому для проверки равенства или неравенства двух значений используются операторы === (строгое равенство) и !== (строгое неравенство), которые не выполняют приведение типов операндов.

? // ✅ Хорошо, приведение типов не выполняется
!console.log(5 === '5'); // false
!console.log(5 === 5); // true
!console.log(5 !== '5'); // true
!console.log(5 !== 5); // false
!console.log(1 === true); // false
!console.log(1 !== true); // true
 */

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Пиши код ниже этой строки
  const isMatch = password === SAVED_PASSWORD;

  // Пиши код выше этой строки
  return isMatch;
}

// console.log();
// console.log();
// console.log();
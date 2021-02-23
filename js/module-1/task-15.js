//* if 
//* else

/* Инструкция if...else
Ветвления используются для выполнения различного кода в зависимости от условия. Принцип работы простой - результат выражения в условии блока if приводится к булю true или false.

!if (условие) {
?  // тело if
!} else {
?  // тело else
!}
Если условие приводится к true, то выполняется код в фигурных скобках тела if, а блок else игнорируется.

!let cost;
!const subscription = 'pro';
!
!if (subscription === 'pro') {
!  cost = 100;
!} else {
!  cost = 0;
!}

!console.log(cost); // 100
Если условие приводится к false, код блока if будет пропущен, и выполнится код в фигурных скобках после блока else.

!let cost;
!const subscription = 'free';
!
!if (subscription === 'pro') {
!  cost = 100;
!} else {
!  cost = 0;
!}

!console.log(cost); // 0 */

function checkAge(age) {
  let message;

  if ( age >= 18) { // Дополни эту строку
    message = 'Вы совершеннолетний человек';
  } else {
    message = 'Вы не совершеннолетний человек';
  }

  return message;
}


// console.log();
// console.log();
// console.log();
//* else if
/* Блок else...if
Конструкция if...else может проверить и среагировать на выполнение или невыполнение только одного условия.

!let cost;
!const subscription = 'pro';
!
!if (subscription === 'pro') {
!  cost = 100;
!} else {
!  cost = 0;
!}

!console.log(cost); // 100
Блок else...if позволяет добавить после else еще один оператор if с условием. В конце цепочки может быть классический блок else, который выполнится только в случае, когда ни одно из условий не приведётся к true.

!let cost;
!const subscription = 'premium';
!
!if (subscription === 'free') {
!  cost = 0;
!} else if (subscription === 'pro') {
!  cost = 100;
!} else if (subscription === 'premium') {
!  cost = 500;
!} else {
!  console.log(`Невалидный тип подписки ${subscription}`);
!}

!console.log(cost); // 500
При первом же удовлетворяющем условии проверки прекратятся и выполнится только тело соответствующего блока if. Поэтому подобную запись следует читать как: «ищу первое выполнение условия, игнорирую всё остальное». 
 */

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) { // Дополни эту строку
    message =  'Отменено пользователем!';
  } else if (password === ADMIN_PASSWORD) { // Дополни эту строку
    message = 'Добро пожаловать!';
  } else {
    message = 'Доступ запрещен, неверный пароль!';
  }

  return message;
}

console.log(checkPassword(null));
/* Инструкция switch c блоком default
Если ни одного совпадения значений не произошло, необходимо выполнить код по умолчанию, как в блоке else для инструкции if...else. Для этого после всех блоков case добавляется блок default.

!switch (значение) {
!  case значение:
!    инструкции;
!    break;
!
!  case значение:
!    инструкции;
!    break;
!
!  default:
!    инструкции;
!}
Оператор break после блока default не нужен, так как это и так последнее что будет выполнено в switch и управление будет передано коду за ним. 
 */

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  switch (password) {
    case null:
      message = 'Отменено пользователем!';
      break;
    
    case ADMIN_PASSWORD:
      message = 'Добро пожаловать!';
      break;
    
    default:
      message = 'Доступ запрещён, неверный пароль!';
  }

  return message;

}

console.log(checkPassword('fdfd'));

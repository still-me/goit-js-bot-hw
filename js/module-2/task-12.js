//* join
/* Метод массива join()
Метод массивов join(delimiter) позволяет соединить элементы массива в строку. 
В строке элементы будут разделены символом или группой символов указанных в delimiter. 
То есть это операция обратная методу строк split(delimiter).

!const words = ['JavaScript', 'это', 'интересно'];
!console.log(words.join('')); // 'JavaScriptэтоинтересно'
!console.log(words.join(' ')); // 'JavaScript это интересно'
!console.log(words.join('*')); // 'JavaScript*это*интересно' */

function makeStringFromArray(array, delimiter) {
  let string;
  // Пиши код ниже этой строки
 
  string = array.join(delimiter);
  // Пиши код выше этой строки
  return string;
}

console.log(makeStringFromArray(['Манго', 'спешит', 'на', 'поезд'], ' '));

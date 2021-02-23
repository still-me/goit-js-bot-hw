/* Свой порядок сортировки строк
Для сортировки строк в алфавитном порядке, по возрастанию или убыванию, используется метод строк localeCompare().

!firstString.localeCompare(secondString)
Он вызывается на строке которую нужно сравнить (firstString) с той, что передана ему как аргумент (secondString).
'a'.localeCompare('b'); // -1
'b'.localeCompare('a'); // 1
'a'.localeCompare('a'); // 0
'b'.localeCompare('b'); // 0
Возвращает отрицательное значение если firstString должна быть перед secondString.
Возвращает положительное значение больше нуля если firstString должна быть после secondString.
Если строки одинаковы, возвращается ноль.
Это удобно использовать при сортировке строк, так как метод sort() ожидает такие же значения от коллбек-функции.

!const students = ['Вика', 'Андрей', 'Олег', 'Юля', 'Борис', 'Катя'];
!
!const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
!console.log(inAlphabetOrder); // ['Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля']
!
!const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
!console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Вика', 'Борис', 'Андрей'] 
 */

 const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт'
  ];
  // Пиши код ниже этой строки
  
const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));  
const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

console.log(authorsInAlphabetOrder);
console.log(authorsInReversedOrder);
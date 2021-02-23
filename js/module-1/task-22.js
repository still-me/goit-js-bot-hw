//* ||
/* Логическое «ИЛИ» (оператор ||)
Оператор || приводит все операнды к булю и возвращает значение одного из них. Левый операнд, если его можно привести к true, и правый в остальных случаях.

!выражение || выражение
В следующем примере условие слева вернёт true, поэтому результатом всего выражения будет true - вернётся значение первого операнда, которое было приведено к true.

!const age = 5;
!console.log(age < 10 || age > 30); // true || false -> true
Тут результатом тоже будет true, так как хотя бы один из операндов, в этом случае правый, был приведён к true.

!const age = 40;
!console.log(age < 10 || age > 30); // false || true -> true
А здесь ни одно из условий не выполняется, поэтому получаем false - значение последнего операнда.

!const age = 20;
!console.log(age < 10 || age > 30); // false || false -> false
То есть логическое «ИЛИ» запинается на правде и возвращает то, на чём запнулось или последний операнд.

!console.log(true || false); // true
!console.log(false || true); // true
!console.log(true || true); // true
!
!console.log(3 || false); // 3
!console.log(false || 3); // 3
!console.log(3 || true); // 3
!console.log(true || 3); // true 
*/

function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === 'pro' || subType === 'vip'; // дополни эту строку

  return canAccessContent;
}

console.log(checkIfCanAccessContent('starter'))

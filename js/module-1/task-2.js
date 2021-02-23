/* Переопределение значения переменной
Для того, чтобы объявить переменную, которой в будущем можно будет присвоить новое значение, используется ключевое слово let. Создание переменной без ключевого слова let или const приведёт к ошибке.

!let age = 5;
!age = 10;
!
!let userName = 'Манго';
!userName = 'Поли;
Попытка обратиться к переменной по имени до её объявления вызовет ошибку.

Например, нельзя пытаться прочитать или изменить значение переменой до ее объявления:

? // ❌ Неправильно, будет ошибка
!age = 15; // ReferenceError: Cannot access 'age' before initialization
!console.log(age); // ReferenceError: age is not defined

? // Объявление переменной age
!let age = 20;

? // ✅ Правильно, обращаемся после объявления
!age = 25;
!console.log(age); // 25 */

// Базовый код
let productName = 'Дроид';
let pricePerItem = 2000;

// Пиши код ниже этой строки
productName = 'Ремонтный дроид';
pricePerItem += 1500 ;

// console.log(productName);
// console.log(pricePerItem);
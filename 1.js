"use strict";

/*
Необходимо пользователя попросить ввести температуру в градусах Цельсия,
преобразовать введенное пользователем значение в соответствующую температуру
в градусах по Фаренгейту и вывести в alert сообщение с таким текстом:
"Цельсий: {C}, Фаренгейт: {F}"
Где вместо {C} и {F} должны быть подставлены соответствующие значения, которые
были получены ранее.
Формула перевода градусов Цельсия в градусы Фаренгейта:
градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32

Уточнение: пользователь всегда вводит корректное число.
*/

const temperature = prompt("Введите температуру в градусах Цельсия", "X°C");
if (temperature === null) {
    // Пользователь отменил ввод
    alert("Ввод отменен");
} else {
    // Пользователь ввел (корректные) данные
    const conversion = (9 / 5) * temperature + 32;
    alert(`Цельсий: ${temperature}°C, Фаренгейт: ${conversion}°F`);
}

/*Умови виконання ДЗ

Створити метод price(), який обчислює та повертає загальну вартість наданих послуг.
Створити метод minPrice(), який повертає мінімальну ціну.
Створити метод maxPrice(), який повертає максимальну ціну.*/

var services = {
"стрижка": "360 грн",
"гоління": "80 грн",
"Миття голови": "200 грн",
"Манікюр": "880 грн",

};
services["Розбити скло"] = "200 грн";
services["Розбити чашку"] = "120 грн";

services.price = function () {
  let totalPrice = 0;
  let values = Object.values(this);

  for (let i = 0; i < values.length; i++) {
    let currentValue = values[i];
    let currentType = typeof currentValue;

    if (currentType !== "function") {
      let currentPrice = parseInt(currentValue);

      totalPrice = totalPrice + currentPrice;
    }
  }

  return totalPrice;
};
console.log("Загальна ціна:", services.price());

services.minPrice = function () {
  let minimumPrice = null;
  let values = Object.values(this);

  for (let i = 0; i < values.length; i++) {
    let currentValue = values[i];
    let currentType = typeof currentValue;

    if (currentType !== "function") {
      let currentPrice = parseInt(currentValue);

      if (minimumPrice === null) {
        minimumPrice = currentPrice;
      }

      if (currentPrice < minimumPrice) {
        minimumPrice = currentPrice;
      }
    }
  }

  return minimumPrice;
};
console.log("Мінімальна ціна:", services.minPrice());

services.maxPrice = function () {
  let maximumPrice = null;
  let values = Object.values(this);

  for (let i = 0; i < values.length; i++) {
    let currentValue = values[i];
    let currentType = typeof currentValue;

    if (currentType !== "function") {
      let currentPrice = parseInt(currentValue);

      if (maximumPrice === null) {
        maximumPrice = currentPrice;
      }

      if (currentPrice > maximumPrice) {
        maximumPrice = currentPrice;
      }
    }
  }

  return maximumPrice;
};

console.log("Максимальна ціна:", services.maxPrice());

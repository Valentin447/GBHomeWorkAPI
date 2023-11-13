"use strict";

// Урок 2. События, формы
// Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице.
// Слайдер должен позволять переключаться между изображениями и отображать их в центре экрана.

// 1. Создайте интерфейс веб-страницы, который включает в себя следующие элементы:

// a. Контейнер для отображения текущего изображения.
// b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
// c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.

// 2. Используйте HTML для создания элементов интерфейса.

// 3. Используйте JavaScript для обработки событий:

// a. При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
// b. При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
// c. При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

// 4. Слайдер должен циклически переключаться между изображениями,
// то есть после последнего изображения должно отображаться первое, и наоборот.

// 5. Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.

const imgEl = document.querySelector(".slider__img");
const buttonBackEl = document.querySelector(".slider__button-back");
const buttonNextEl = document.querySelector(".slider__button-next");
const navEl = document.querySelector(".slider__nav");

let currentNumber = 1;
const quantityImp = 3;
imgEl.setAttribute("src", `./img/${currentNumber}.jpg`);

buttonBackEl.addEventListener("click", () => {
  currentNumber--;
  if (currentNumber <= 0) {
    currentNumber = quantityImp;
  }
  imgEl.setAttribute("src", `./img/${currentNumber}.jpg`);
  changeSelectedPoint(currentNumber);
});

buttonNextEl.addEventListener("click", () => {
  currentNumber++;
  if (currentNumber > quantityImp) {
    currentNumber = 1;
  }
  imgEl.setAttribute("src", `./img/${currentNumber}.jpg`);
  changeSelectedPoint(currentNumber);
});

for (let i = 1; i <= quantityImp; i++) {
  const pointEl = document.createElement("button");
  pointEl.classList.add("slider__nav-point");
  if (currentNumber === i) {
    pointEl.classList.add("slider__nav-point-selected");
  }
  pointEl.setAttribute("data-number", `${i}`);
  pointEl.addEventListener("click", () => {
    imgEl.setAttribute("src", `./img/${i}.jpg`);
    changeSelectedPoint(i);
    currentNumber = i;
  });
  navEl.append(pointEl);
}

function changeSelectedPoint(newCurrentNumber) {
  const navPointsEl = document.querySelectorAll(".slider__nav-point");
  navPointsEl.forEach((el) => {
    el.classList.remove("slider__nav-point-selected");
  });
  for (let i = 0; i < navPointsEl.length; i++) {
    if (i + 1 === newCurrentNumber) {
      navPointsEl[i].classList.add("slider__nav-point-selected");
    } else {
      navPointsEl[i].classList.remove("slider__nav-point-selected");
    }
  }
}

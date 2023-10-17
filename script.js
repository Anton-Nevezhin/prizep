let ekran = document.querySelector('.display');
let clear = document.querySelector('.clear');
let keys = document.querySelectorAll('.key');

  clear.onclick = function () {
  ekran.innerHTML = '';
}



for (let i of keys) {
  i.onclick = function () {
  ekran.innerHTML += i.textContent;
}
}


/*
Кнопки с буквами и «пробел» имеют класс key, а дисплей — класс display.

При клике на кнопку с буквой или пробелом текстовое содержимое этой кнопки должно добавляться к текстовому содержимому дисплея.

Кнопка очистки имеет класс clear. При клике на неё весь текст внутри дисплея должен удаляться, для этого в текстовое содержимое дисплея нужно записать пустую строку.
*/

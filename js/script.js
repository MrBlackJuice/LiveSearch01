//Событие load на объекте window наступает, когда загрузилась вся страница, включая стили, картинки и другие ресурсы. Это событие доступно через свойство onload.
window.onload = () => {
	let input = document.querySelector('#input'); //возвращает первый элемент  документа, который соответствует указанному селектору 
	input.oninput = function () {    //Событие oninput возникает, когда в элементе начинается пользовательский ввод.
		let value = this.value.trim();   //не пишет пробелы
		let list = document.querySelectorAll('.ul li');  // сбор строчек для поиска

		if (value != '') {   //если строка поиска не пуста то выполняем условие
			list.forEach(elem => {   //elem пробегаеn по очереди по каждому элементу списка
				if (elem.innerText.search(value) == -1) {   // сравнивает со вводимым значением value   search ищет подстроку в строке, если не нашел такой строки, значит скрывает такой элемент
					elem.classList.add('hide') //добавляет строке класс hide в css, что бы скрыть строку
				}
			});

		} else {
			list.forEach(elem => {
				elem.classList.remove('hide');   // убирает присвоенный класс hide после предыдущего присвоения при каждой итеррации
			});
		}

		console.log(this.value)
	}
};

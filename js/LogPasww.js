document.getElementById('check').onclick = function () { // вешаем обработчик события на кнопку по id check и пишем функцию
	let login = document.getElementById('login').value;  // создаем переменную, прикрепляемся к Логину .value для получения значения из инпута
	let password = document.getElementById('password').value;

	if (login == 'User' && password == 'User') // условие совпадения пароля
		top.location.href = "./html/index2.html";  // переход на другую html

	else if (login == 'Admin' && password == 'Ts20222022')
		top.location.href = "./html/index2.html";
	else alert('Wrong!!!!');
}
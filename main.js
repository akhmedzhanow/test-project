function greet(name, city) {
	console.log(`Привет, меня зовут ${name}, я из города ${city}`);
}

greet('Галим', 'Астрахань');

const div = document.createElement('div');

const h2 = document.createElement('h2');
h2.textContent = 'Этот контент добавлен через JS';

const userName = document.createElement('p');
userName.textContent = 'Вася';

const userAge = document.createElement('span');
userAge.textContent = 19;

document.body.append(div);
div.append(h2, userName, userAge);
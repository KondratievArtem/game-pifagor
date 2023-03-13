let activLvlClass = 2;

const img = [
	'6829bf357d0a70d9713ef87f2847ac6a81985574.jpeg',
	'1662356543_1-kartinkof-club-p-novie-i-krasivie-kartinki-shchenyachii-pat-1.jpg',
	'f1d6686c04cc7e1ba1c41b729478b16265301c62.jpeg',
	'holodne-sertse-2.jpg',
	'8468e9b224baf7add24a9278b9bd87fc.jpeg',
	'63806d1168b34f9ea30adc05aed62c31.jpeg',
	'd114d147676588f8c97509961ae07fa4.jpeg',
	'maxresdefault.jpg',
];

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const setLvl = () => {
	let out = '';
	for (let i = 2; i <= 9; i++) {
		out += `<li>табличка на ${i}</li>`;
	}

	document.querySelector('.lvl-menu').innerHTML = out;
};
setLvl();

let getLi = document.querySelectorAll('.lvl-menu li');

const setActivClass = () => {
	document.querySelector('.lvl-menu li').classList.add('activ');
	getLi.forEach((elem) => {
		elem.addEventListener('click', () => {
			getLi.forEach((e) => e.classList.remove('activ'));
			elem.classList.add('activ');
			showClass();
			setLvlContent();
			getLvl();
		});
	});
};
setActivClass();

const showClass = () => {
	for (let i = 0; i < getLi.length; i++) {
		if (getLi[i].classList.contains('activ')) {
			activLvlClass = i + 2;
		}
	}
};

// ==============================================

const setLvlContent = () => {
	document.querySelector('.background img').setAttribute('src', `./img/${img[activLvlClass - 2]}`);
	let outRow = '';

	for (let row = 0; row <= 48; row++) {
		outRow += `<div class="block">
				<div class="block-front"></div>
				
			</div>`;
	}
	document.querySelector('.content__body').innerHTML = outRow;

	let getRow = document.querySelectorAll('.block-front');
	getRow.forEach((element) => {
		let n = getRandomIntInclusive(2, 9);
		let outD = `<label for="lvl2x1">${activLvlClass} x ${n} = </label>
					<input type="number" id="lvl2x1" data-namber="${activLvlClass * n}"/>`;

		element.innerHTML = outD;
	});
};

setLvlContent();
// ===================================================

const getLvl = () => {
	let data = document.querySelectorAll('.content__body input');

	data.forEach((elem) => {
		elem.addEventListener('change', () => {
			let dataAtt = +elem.getAttribute('data-namber');

			if (dataAtt === +elem.value) {
				elem.parentNode.classList.add('none');
			} else {
				elem.setAttribute('disabled', 'disabled');
				elem.parentNode.classList.add('none-error');
			}
		});
	});
};

getLvl();

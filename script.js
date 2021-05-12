// cursor switcher

let body = document.body;

let funBtn = document.getElementById('nofun');
let nofunBtn = document.getElementById('fun');

funBtn.addEventListener('click', () => {
    body.classList.remove('fun');
	body.classList.add('nofun');
});

nofunBtn.addEventListener('click', () => {
	body.classList.remove('nofun');
    body.classList.add('fun');
});

const firstName = document.getElementById('name');
const photo = document.getElementById('img');
const message = document.getElementById('comment');
const button = document.getElementById('button');
const userName = document.querySelector('.chat__name');
const userChat = document.querySelector('.chat__comment');
const userPhoto = document.querySelector('.chat__img');
const timeCode = document.getElementById('timeCode');

function checkName() {
	const name = firstName.value;
	const newName = name.trim().split(" ");
	const changedName = [];

	newName.forEach((element) => {
		let finalName = element[0].toUpperCase() + element.slice(1).toLowerCase();
		changedName.push(finalName);
	});

	const nameFormatted = changedName.join(" ");
	return (userName.textContent = nameFormatted);
}

function checkSpam() {
	let textAntiSpam = message.value.replace(/виагра|viagra|XXX/gi, '***');
	userChat.textContent = textAntiSpam;
}

function addTime() {
	let now = new Date;
	timeCode.innerHTML = now;
}

function getResult() {
	checkName();
	checkSpam();
	addTime();
	userPhoto.src = photo.value;
    document.getElementById("name").value = "";
    document.getElementById("img").value = "";
    document.getElementById("comment").value = "";
} 
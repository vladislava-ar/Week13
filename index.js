const firstName = document.getElementById('name');
const photo = document.getElementById('img');
const message = document.getElementById('comment');
const button = document.getElementById('button');
const userName = document.querySelector('.chat__name');
const userChat = document.querySelector('.chat__comment');
const userPhoto = document.querySelector('.chat__img');
const timeCode = document.getElementById('timeCode');
const yes = document.getElementById('yes');
const no = document.getElementById('no');

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

let photoRandom = Math.round(Math.random() * 10 - 4);

function addPhoto() {
	if (photo.value !== '') {
		userPhoto.src = photo.value;
	} else {
		switch (photoRandom) {
			case 1:
				userPhoto.src = './Images/img1.jpg';
				break;
			case 2:
				userPhoto.src = './Images/img2.jpg';
				break;
			case 3:
				userPhoto.src = './Images/img3.jpg';
				break;
			case 4:
				userPhoto.src = './Images/img4.jpg';
				break;
			case 5:
				userPhoto.src = './Images/img5.jpg';
				break;
			case 6:
				userPhoto.src = './Images/img6.jpg';
				break;
			default:
				userPhoto.src = './Images/img6.jpg';
		}
	}
}

function noName() {
	if (firstName.value !== "") {
		userName.textContent = checkName();
	} else {
		userName.textContent = "Пользователь";
}
}

function showName() {
	if (yes.checked == true) {
		userName.textContent = checkName();
	} else if (no.checked == true) {
		userName.textContent = "Пользователь";
	}
}

function getResult() {
	noName();
	checkSpam();
	addTime();
	addPhoto();
	showName();
    document.getElementById("name").value = "";
    document.getElementById("img").value = "";
    document.getElementById("comment").value = "";
} 
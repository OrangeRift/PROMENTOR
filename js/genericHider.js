// JavaScript Document
const button = document.getElementById('toggleButton');
const buttonOff = document.getElementById('toggleOffButton');
const container = document.getElementById('container');

const button1 = document.getElementById('toggleButton1');
const buttonOff1 = document.getElementById('toggleOffButton1');
const container1 = document.getElementById('container1');

const button2 = document.getElementById('toggleButton2');
const buttonOff2 = document.getElementById('toggleOffButton2');
const container2 = document.getElementById('container2');

const button3 = document.getElementById('toggleButton3');
const buttonOff3 = document.getElementById('toggleOffButton3');
const container3 = document.getElementById('container3');

const button4 = document.getElementById('toggleButton4');
const buttonOff4 = document.getElementById('toggleOffButton4');
const container4 = document.getElementById('container4');

const navB = document.getElementsByClassName('navButtonM');
const navBL = document.getElementsByClassName('navButtonL');
const navBF = document.getElementsByClassName('navButtonF');

button.addEventListener('click', () => {
	container.classList.add('show');
	button.style.display = "none";
	buttonOff.style.display = "block";
})
buttonOff.addEventListener('click', () => {
	container.classList.remove('show');
	buttonOff.style.display = "none";
	button.style.display = "block";
})

button1.addEventListener('click', () => {
	container1.style.display = "block";
	button1.style.display = "none";
	buttonOff1.style.display = "block";
})
buttonOff1.addEventListener('click', () => {
	container1.style.display = "none";
	buttonOff1.style.display = "none";
	button1.style.display = "block";
})

button2.addEventListener('click', () => {
	container2.style.display = "block";
	button2.style.display = "none";
	buttonOff2.style.display = "block";
})
buttonOff2.addEventListener('click', () => {
	container2.style.display = "none";
	buttonOff2.style.display = "none";
	button2.style.display = "block";
})

button3.addEventListener('click', () => {
	container3.style.display = "block";
	button3.style.display = "none";
	buttonOff3.style.display = "block";
})
buttonOff3.addEventListener('click', () => {
	container3.style.display = "none";
	buttonOff3.style.display = "none";
	button3.style.display = "block";
})

button4.addEventListener('click', () => {
	container4.style.display = "block";
	button4.style.display = "none";
	buttonOff4.style.display = "block";
})
buttonOff4.addEventListener('click', () => {
	container4.style.display = "none";
	buttonOff4.style.display = "none";
	button4.style.display = "block";
})

Array.from(navB).forEach(buttonN => {
    buttonN.addEventListener('click', () => {
        container.classList.remove('show');
        buttonOff.style.display = "none";
        button.style.display = "block";
    });
});

Array.from(navBF).forEach(buttonNF => {
    buttonNF.addEventListener('click', () => {
        container.classList.remove('show');
        buttonOff.style.display = "none";
        button.style.display = "block";
    });
});

Array.from(navBL).forEach(buttonNL => {
    buttonNL.addEventListener('click', () => {
        container.classList.remove('show');
        buttonOff.style.display = "none";
        button.style.display = "block";
    });
});

document.getElementById('aboN').addEventListener('click', () => {
    window.location.href = '#abo';
});
document.getElementById('revN').addEventListener('click', () => {
    window.location.href = '#rev';
});
document.getElementById('faqN').addEventListener('click', () => {
    window.location.href = '#faq';
});
document.getElementById('galN').addEventListener('click', () => {
    window.location.href = '#gal';
});
document.getElementById('funN').addEventListener('click', () => {
    window.location.href = '#fun';
});


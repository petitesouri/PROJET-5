const Slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowRight = document.querySelector('.arrow_right')

let currentSlide = 0

//  Flèche droite

arrowRight.addEventListener('click', () => {
	if(currentSlide == Slides.length - 1){
		currentSlide = 0
	} else {
		currentSlide++
	}
	const image = document.querySelector('.banner-img')
	image.src = `./assets/images/slideshow/${Slides[currentSlide].image}`

	const tagLine = document.querySelector('#banner p')
	tagLine.innerHTML = Slides[currentSlide].tagLine
})

// Fleche de gauche

const arrowLeft = document.querySelector('.arrow_left')

arrowLeft.addEventListener('click', () => {
	if(currentSlide == 0){
		currentSlide = 3
	} else {
		currentSlide--
	}

	const image = document.querySelector('.banner-img')
	image.src = `./assets/images/slideshow/${Slides[currentSlide].image}`
	const tagLine = document.querySelector('#banner p')
	tagLine.innerHTML = Slides[currentSlide].tagLine
});


// Les dots	

const dots = document.querySelectorAll('.dot');
const dotSelected = document.querySelector('.dot_selected');

let currentDot = 0; 

function  selecteCurrentDot () {
	dots[currentDot].className = '';
	dots[currentDot].className = 'dot';
};

arrowRight.addEventListener('click', () => {
	if(currentDot == 3){
		selecteCurrentDot ();
		currentDot = 0;
		dots[currentDot].className = 'dot dot_selected';
	} else {
		selecteCurrentDot ();
		currentDot++;
		dots[currentDot].className = 'dot dot_selected';	
	}
})

arrowLeft.addEventListener('click', () => {
	if(currentDot == 0){
		selecteCurrentDot ();
		currentDot = 3;
		dots[currentDot].className = 'dot dot_selected';
	} else {
		selecteCurrentDot ();
		currentDot--;
		dots[currentDot].className = 'dot dot_selected';	
	}
})

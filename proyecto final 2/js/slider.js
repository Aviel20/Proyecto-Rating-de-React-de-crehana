//PROPIEDADES 
let proSlider = {
	slider: document.querySelector(".slider"),
	priSlide: null
}
//METODOS
let metSlider = {
	
	ini: function () {
		setInterval(metSlider.moverSlide,3000);
	},
	moverSlide: function () {
		proSlider.slider.style.transition = "1s all ease";

		proSlider.slider.style.marginLeft = "-100%",

		setTimeout(() => {
			proSlider.priSlide = proSlider.slider.firstElementChild;
			proSlider.slider.appendChild(proSlider.priSlide);

			proSlider.slider.style.transition = "unset"
			proSlider.slider.style.marginLeft = 0;
		}, 1000);
	}
}
metSlider.ini();

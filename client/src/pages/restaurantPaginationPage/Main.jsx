import Aside from "./Aside";
import MainContent from "./MainContent";
import BottomContent from "./BottomContent";

function Main({ restaurants }) {
	// 輪播
	let index = 0;
	const slides = document.querySelectorAll(".carousel img");
	const dots = document.querySelectorAll(".dot");
	const totalSlides = slides.length;
	function showSlide(n) {
		index = (n + totalSlides) % totalSlides;
		const offset = -index * 100;
		// document.querySelector(
		// 	".carousel"
		// ).style.transform = `translateX(${offset}%)`;
		updateDots();
	}

	function nextSlide() {
		index = (index + 1) % totalSlides;
		showSlide(index);
	}

	function currentSlide(n) {
		showSlide(n);
	}

	function updateDots() {
		dots.forEach((dot, i) => {
			dot.classList.remove("active");
			if (i === index) {
				dot.classList.add("active");
			}
		});
	}

	showSlide(index);

	setInterval(nextSlide, 3000);

	return (
		<div className="displayFlex">
			<Aside />
			<MainContent />
		</div>
	);
}

export default Main;

window.addEventListener('DOMContentLoaded', function () {
	const likeBtn = this.document.querySelectorAll('.btn-like');
	const likeIcon = this.document.querySelectorAll('.btn-like-icon');
	const bellBtn = this.document.querySelector('.bell__btn');
	const bellBtnIcon = this.document.querySelector('.bell__btn-icon');
	const toursBtn = this.document.querySelectorAll('.tours__btn');
	const toursItem = this.document.querySelectorAll('.tours__item');

	bellBtn.addEventListener('click', function () {
		bellBtn.classList.toggle('active');
		bellBtnIcon.classList.toggle('active');
	});

	for (let i = 0; i < likeBtn.length; i++) {
		likeBtn[i].addEventListener('click', function () {
			for (let g = 0; g < likeIcon.length; g++) {
				likeIcon[i].classList.toggle('active');
			}
		});
	};

	for (let i = 1; i < toursBtn.length; i++) {
		toursBtn[i].addEventListener('click', function () {
			for (let g = 0; g < toursItem.length; g++) {
				toursItem[i].classList.toggle('tours__item-current');
			}
		});
	};
});
window.addEventListener('DOMContentLoaded', function () {
	const likeBtn = this.document.querySelectorAll('.btn-like');
	const likeIcon = this.document.querySelectorAll('.btn-like-icon');
	const bellBtn = this.document.querySelector('.bell__btn');
	const bellBtnIcon = this.document.querySelector('.bell__btn-icon');
	const toursBtn = this.document.querySelectorAll('.tours__btn');
	const toursItem = this.document.querySelectorAll('.tours__item');
	const asideLike = this.document.querySelector('.aside-btn-like-icon');
	const asideBtn = this.document.querySelector('.aside-btn-like');
	const asideListBtn = this.document.querySelectorAll('.list__btn-like');
	const asideListIcon = this.document.querySelectorAll('.list__btn-icon');
	const btnSignOut = this.document.querySelector('.sign-out');
	const closeModalBtn = this.document.querySelector("[data-modal-close]");
	const modal = this.document.querySelector("[data-modal]");

	bellBtn.addEventListener('click', function () {
		bellBtn.classList.toggle('active');
		bellBtnIcon.classList.toggle('active');
	});

	asideBtn.addEventListener('click', function () {
		asideBtn.classList.toggle('active');
		asideLike.classList.toggle('active');
	});

	for (let i = 0; i < likeBtn.length; i++) {
		likeBtn[i].addEventListener('click', function () {
			for (let g = 0; g < likeIcon.length; g++) {
				likeIcon[i].classList.toggle('active');
			}
		});
	};

	for (let i = 0; i < asideListBtn.length; i++) {
		asideListBtn[i].addEventListener('click', function () {
			for (let g = 0; g < asideListIcon.length; g++) {
				asideListIcon[i].classList.toggle('active');
			}
		});
	};

	for (let i = 0; i < toursBtn.length; i++) {
		toursBtn[i].addEventListener('click', function () {
			for (let g = 0; g < toursItem.length; g++) {
				toursItem[g].classList.remove('tours__item-current');
				toursItem[i].classList.add('tours__item-current');
			}
		});
	};

	btnSignOut.addEventListener("click", toggleModal);
	closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		modal.classList.toggle("is-hidden");
	}
});
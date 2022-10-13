// const checkbox = document.getElementById('recommended');
// 		const btn = document.getElementById('btn');
// 		btn.addEventListener('click', () => {
// 			if (checkbox.checked) {
// 				console.log('check')
// 			}
// 		})


window.addEventListener('DOMContentLoaded', function () {
	const likeBtn = document.querySelectorAll('.btn-like');
	const likeIcon = document.querySelectorAll('.btn-like-icon');

	for (let i = 0; i < likeBtn.length; i++) {
		likeBtn[i].addEventListener('click', function () {
			for (let g = 0; g < likeIcon.length; g++) {
				likeIcon[i].classList.toggle('active')
			}
		});
	};
})
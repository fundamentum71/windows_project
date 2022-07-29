const modals = () => {
	let timerId;

	function bindModal(triggerSelector, modalSelector, closeSelector) {
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector);

		trigger.forEach((item) => {
			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}
				clearInterval(timerId);
				modal.style.display = 'block';
				//заморозим страницу при открытом модальном окне
				document.body.style.overflow = 'hidden';
				//document.body.classList.add('modal-open');
			});
		});

		close.addEventListener('click', (e) => {
			modal.style.display = 'none';
			document.body.style.overflow = '';
			//document.body.classList.remove('modal-open');
		});

		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				modal.style.display = 'none';
				document.body.style.overflow = '';
				//document.body.classList.remove('modal-open');
			}
		});
	}

	function showModalByTime(selector, time) {
		timerId = setTimeout(function () {
			document.querySelector(selector).style.display = 'block';
			document.body.style.overflow = 'hidden';
		}, time);
		return timerId;
	}

	bindModal(
		'.popup_engineer_btn',
		'.popup_engineer',
		'.popup_engineer .popup_close'
	);
	bindModal('.phone_link', '.popup', '.popup .popup_close');
	//showModalByTime('.popup', 60000);
};

export default modals;

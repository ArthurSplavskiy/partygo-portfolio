/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/core/utils/functions.js
/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}
/* Проверка мобильного браузера */
let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
/* Добавление класса touch для HTML если браузер мобильный */
function addTouchClass() {
	// Добавление класса _touch для HTML если браузер мобильный
	if (isMobile.any()) document.documentElement.classList.add('touch');
}
// Добавление loaded для HTML после полной загрузки страницы
function addLoadedClass() {
	window.addEventListener("load", function () {
		setTimeout(function () {
			document.documentElement.classList.add('loaded');
		}, 0);
	});
}
// Получение хеша в адресе сайта
function getHash() {
	if (location.hash) { return location.hash.replace('#', ''); }
}
// Указание хеша в адресе сайта
function setHash(hash) {
	history.pushState('', '', hash);
}
// Учет плавающей панели на мобильных устройствах при 100vh
function fullVHfix() {
	const fullScreens = document.querySelectorAll('[data-fullscreen]');
	if (fullScreens.length && isMobile.any()) {
		window.addEventListener('resize', fixHeight);
		function fixHeight() {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		}
		fixHeight();
	}
}
//==== Вспомогательные модули плавного расскрытия и закрытия объекта ======================================================================================================================================================================
// export let _slideUp = (target, duration = 500) => {
// 	if (!target.classList.contains('_slide')) {
// 		target.classList.add('_slide');
// 		target.style.transitionProperty = 'height, margin, padding';
// 		target.style.transitionDuration = duration + 'ms';
// 		target.style.height = target.offsetHeight + 'px';
// 		target.offsetHeight;
// 		target.style.overflow = 'hidden';
// 		target.style.height = 0;
// 		target.style.paddingTop = 0;
// 		target.style.paddingBottom = 0;
// 		target.style.marginTop = 0;
// 		target.style.marginBottom = 0;
// 		window.setTimeout(() => {
// 			target.hidden = true;
// 			target.style.removeProperty('height');
// 			target.style.removeProperty('padding-top');
// 			target.style.removeProperty('padding-bottom');
// 			target.style.removeProperty('margin-top');
// 			target.style.removeProperty('margin-bottom');
// 			target.style.removeProperty('overflow');
// 			target.style.removeProperty('transition-duration');
// 			target.style.removeProperty('transition-property');
// 			target.classList.remove('_slide');
// 		}, duration);
// 	}
// }
// export let _slideDown = (target, duration = 500) => {
// 	if (!target.classList.contains('_slide')) {
// 		target.classList.add('_slide');
// 		if (target.hidden) {
// 			target.hidden = false;
// 		}
// 		let height = target.offsetHeight;
// 		target.style.overflow = 'hidden';
// 		target.style.height = 0;
// 		target.style.paddingTop = 0;
// 		target.style.paddingBottom = 0;
// 		target.style.marginTop = 0;
// 		target.style.marginBottom = 0;
// 		target.offsetHeight;
// 		target.style.transitionProperty = "height, margin, padding";
// 		target.style.transitionDuration = duration + 'ms';
// 		target.style.height = height + 'px';
// 		target.style.removeProperty('padding-top');
// 		target.style.removeProperty('padding-bottom');
// 		target.style.removeProperty('margin-top');
// 		target.style.removeProperty('margin-bottom');
// 		window.setTimeout(() => {
// 			target.style.removeProperty('height');
// 			target.style.removeProperty('overflow');
// 			target.style.removeProperty('transition-duration');
// 			target.style.removeProperty('transition-property');
// 			target.classList.remove('_slide');
// 		}, duration);
// 	}
// }
// export let _slideToggle = (target, duration = 500) => {
// 	if (target.hidden) {
// 		return _slideDown(target, duration);
// 	} else {
// 		return _slideUp(target, duration);
// 	}
// }
	// SlideToggle ========================================================================================
let _slideUp = (target, duration = 500) => {
	domElement(target, changeState)

	function changeState(target) {
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.style.display = 'none';
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideDown = (target, duration = 500) => {
	domElement(target, changeState)
	
	function changeState(target) {
		target.style.removeProperty('display');
		let display = window.getComputedStyle(target).display;
		if (display === 'none')
			display = 'block';
	
		target.style.display = display;
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideToggle = (target, duration = 500) => {
	domElement(target, changeState)

	function changeState (slide) {
		if (!slide.classList.contains('_slide')) {
			slide.classList.add('_slide');
			if (window.getComputedStyle(slide).display === 'none') {
				return _slideDown(slide, duration);
			} else {
				return _slideUp(slide, duration);
			}
		}
	}
	
}
//==== Вспомогательные модули блокировки прокрутки и скочка ====================================================================================================================================================================================================================================================================================
let bodyLockStatus = true;
let bodyLockToggle = (delay = 500) => {
	if (document.documentElement.classList.contains('lock')) {
		bodyUnlock(delay);
	} else {
		bodyLock(delay);
	}
}
let bodyUnlock = (delay = 500) => {
	let body = document.querySelector("body");
	if (bodyLockStatus) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			document.documentElement.classList.remove("lock");
		}, delay);
		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
}
let bodyLock = (delay = 500) => {
	let body = document.querySelector("body");
	if (bodyLockStatus) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		document.documentElement.classList.add("lock");

		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
}
//==== Модуь работы со спойлерами =======================================================================================================================================================================================================================
/*
Для родителя слойлеров пишем атрибут data-spollers
Для заголовков слойлеров пишем атрибут data-spoller
Если нужно включать\выключать работу спойлеров на разных размерах экранов
пишем параметры ширины и типа брейкпоинта.

Например: 
data-spollers="992,max" - спойлеры будут работать только на экранах меньше или равно 992px
data-spollers="768,min" - спойлеры будут работать только на экранах больше или равно 768px

Если нужно что бы в блоке открывался болько один слойлер добавляем атрибут data-one-spoller
*/
function spollers() {
	const spollersArray = document.querySelectorAll('[data-spollers]');
	if (spollersArray.length > 0) {
		// Получение обычных слойлеров
		const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
			return !item.dataset.spollers.split(",")[0];
		});
		// Инициализация обычных слойлеров
		if (spollersRegular.length > 0) {
			initSpollers(spollersRegular);
		}
		// Получение слойлеров с медиа запросами
		const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
			return item.dataset.spollers.split(",")[0];
		});
		// Инициализация слойлеров с медиа запросами
		if (spollersMedia.length > 0) {
			const breakpointsArray = [];
			spollersMedia.forEach(item => {
				const params = item.dataset.spollers;
				const breakpoint = {};
				const paramsArray = params.split(",");
				breakpoint.value = paramsArray[0];
				breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
				breakpoint.item = item;
				breakpointsArray.push(breakpoint);
			});
			// Получаем уникальные брейкпоинты
			let mediaQueries = breakpointsArray.map(function (item) {
				return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
			});
			mediaQueries = mediaQueries.filter(function (item, index, self) {
				return self.indexOf(item) === index;
			});
			// Работаем с каждым брейкпоинтом
			mediaQueries.forEach(breakpoint => {
				const paramsArray = breakpoint.split(",");
				const mediaBreakpoint = paramsArray[1];
				const mediaType = paramsArray[2];
				const matchMedia = window.matchMedia(paramsArray[0]);
				// Объекты с нужными условиями
				const spollersArray = breakpointsArray.filter(function (item) {
					if (item.value === mediaBreakpoint && item.type === mediaType) {
						return true;
					}
				});
				// Событие
				matchMedia.addEventListener("change", function () {
					initSpollers(spollersArray, matchMedia);
				});
				initSpollers(spollersArray, matchMedia);
			});
		}
		// Инициализация
		function initSpollers(spollersArray, matchMedia = false) {
			spollersArray.forEach(spollersBlock => {
				spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
				if (matchMedia.matches || !matchMedia) {
					spollersBlock.classList.add('_spoller-init');
					initSpollerBody(spollersBlock);
					spollersBlock.addEventListener("click", setSpollerAction);
				} else {
					spollersBlock.classList.remove('_spoller-init');
					initSpollerBody(spollersBlock, false);
					spollersBlock.removeEventListener("click", setSpollerAction);
				}
			});
		}
		// Работа с контентом
		function initSpollerBody(spollersBlock, hideSpollerBody = true) {
			const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
			if (spollerTitles.length > 0) {
				spollerTitles.forEach(spollerTitle => {
					if (hideSpollerBody) {
						spollerTitle.removeAttribute('tabindex');
						if (!spollerTitle.classList.contains('_spoller-active')) {
							spollerTitle.nextElementSibling.hidden = true;
						}
					} else {
						spollerTitle.setAttribute('tabindex', '-1');
						spollerTitle.nextElementSibling.hidden = false;
					}
				});
			}
		}
		function setSpollerAction(e) {
			const el = e.target;
			if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
				const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
				const spollersBlock = spollerTitle.closest('[data-spollers]');
				const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
				if (!spollersBlock.querySelectorAll('._slide').length) {
					if (oneSpoller && !spollerTitle.classList.contains('_spoller-active')) {
						hideSpollersBody(spollersBlock);
					}
					spollerTitle.classList.toggle('_spoller-active');
					_slideToggle(spollerTitle.nextElementSibling, spollersBlock.dataset.duration ? spollersBlock.dataset.duration : 500);
				}
				e.preventDefault();
			}
		}
		function hideSpollersBody(spollersBlock) {
			const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._spoller-active');
			if (spollerActiveTitle) {
				spollerActiveTitle.classList.remove('_spoller-active');
				_slideUp(spollerActiveTitle.nextElementSibling, spollersBlock.dataset.duration ? spollersBlock.dataset.duration : 500);
			}
		}
	}
}
//==== Модуь работы с табами =======================================================================================================================================================================================================================
/*
Для родителя табов пишем атрибут data-tabs
Для родителя заголовков табов пишем атрибут data-tabs-titles
Для родителя блоков табов пишем атрибут data-tabs-body

Если нужно чтобы табы открывались с анимацией 
добавляем к data-tabs data-tabs-animate
По умолчанию, скорость анимации 500ms, 
указать свою скорость можно так: data-tabs-animate="1000"

Если нужно чтобы табы превращались в "спойлеры" на неком размере экранов пишем параметры ширины.
Например: data-tabs="992" - табы будут превращаться в спойлеры на экранах меньше или равно 992px
*/
function tabs() {
	const tabs = document.querySelectorAll('[data-tabs]');
	//let tabsActiveHash = [];

	if (tabs.length > 0) {
		// const hash = location.hash.replace('#', '');
		// if (hash.startsWith('tab-')) {
		// 	tabsActiveHash = hash.replace('tab-', '').split('-');
		// }
		tabs.forEach((tabsBlock, index) => {
			tabsBlock.classList.add('_tab-init');
			tabsBlock.setAttribute('data-tabs-index', index);
			tabsBlock.addEventListener("click", setTabsAction);
			initTabs(tabsBlock);
		});

		// Получение табов с медиа запросами
		const tabsMedia = Array.from(tabs).filter(function (item, index, self) {
			return item.dataset.tabs;
		});
		// Инициализация табов с медиа запросами
		if (tabsMedia.length > 0) {
			initMediaTabs(tabsMedia);
		}
	}
	// Инициализация табов с медиа запросами
	function initMediaTabs(tabsMedia) {
		const breakpointsArray = [];
		tabsMedia.forEach(item => {
			const breakpointValue = item.dataset.tabs;

			const tabsBreakpointsObject = {};
			tabsBreakpointsObject.value = breakpointValue;
			tabsBreakpointsObject.item = item;

			breakpointsArray.push(tabsBreakpointsObject);
		});

		// Получаем уникальные брейкпоинты
		let mediaQueries = breakpointsArray.map(function (item) {
			return `(max-width:${item.value}px),${item.value}`;
		});
		mediaQueries = mediaQueries.filter(function (item, index, self) {
			return self.indexOf(item) === index;
		});

		// Работаем с каждым брейкпоинтом
		mediaQueries.forEach(breakpoint => {
			const paramsArray = breakpoint.split(",");
			const matchMedia = window.matchMedia(paramsArray[0]);
			const mediaBreakpoint = paramsArray[1];

			// Объекты с нужными условиями
			const tabsMediaArray = breakpointsArray.filter(function (item) {
				if (item.value === mediaBreakpoint) {
					return true;
				}
			});

			// Событие
			matchMedia.addEventListener("change", function () {
				setTitlePosition(tabsMediaArray, matchMedia);
			});
			setTitlePosition(tabsMediaArray, matchMedia);
		});
	}
	// Установка позиций заголовков
	function setTitlePosition(tabsMediaArray, matchMedia) {
		tabsMediaArray.forEach(tabsMediaItem => {
			tabsMediaItem = tabsMediaItem.item;
			const tabsTitles = tabsMediaItem.querySelector('[data-tabs-titles]');
			const tabsTitleItems = tabsMediaItem.querySelectorAll('[data-tabs-title]');
			const tabsContent = tabsMediaItem.querySelector('[data-tabs-body]');
			const tabsContentItems = tabsMediaItem.querySelectorAll('[data-tabs-item]');
			tabsContentItems.forEach((tabsContentItem, index) => {
				if (matchMedia.matches) {
					tabsContent.append(tabsTitleItems[index]);
					tabsContent.append(tabsContentItem);
					tabsMediaItem.classList.add('_tab-spoller');
				} else {
					tabsTitles.append(tabsTitleItems[index]);
					tabsMediaItem.classList.remove('_tab-spoller');
				}
			});
		});
	}
	// Работа с контентом
	function initTabs(tabsBlock) {
		const tabsTitles = tabsBlock.querySelectorAll('[data-tabs-titles]>*');
		const tabsContent = tabsBlock.querySelectorAll('[data-tabs-body]>*');
		const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
		//const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;

		// if (tabsActiveHashBlock) {
		// 	const tabsActiveTitle = tabsBlock.querySelector('[data-tabs-titles]>._tab-active');
		// 	tabsActiveTitle.classList.remove('_tab-active');
		// }
		if (tabsContent.length > 0) {
			tabsContent.forEach((tabsContentItem, index) => {
				tabsTitles[index].setAttribute('data-tabs-title', '');
				tabsContentItem.setAttribute('data-tabs-item', '');

				// if (tabsActiveHashBlock && index == tabsActiveHash[1]) {
				// 	tabsTitles[index].classList.add('_tab-active');
				// }
				tabsContentItem.hidden = !tabsTitles[index].classList.contains('_tab-active');
			});
		}
	}
	function setTabsStatus(tabsBlock) {
		const tabsTitles = tabsBlock.querySelectorAll('[data-tabs-title]');
		const tabsContent = tabsBlock.querySelectorAll('[data-tabs-item]');
		const tabsBlockIndex = tabsBlock.dataset.tabsIndex;

		function isTabsAnamate(tabsBlock) {
			if (tabsBlock.hasAttribute('data-tabs-animate')) {
				return tabsBlock.dataset.tabsAnimate > 0 ? tabsBlock.dataset.tabsAnimate : 500;
			}
		}
		const tabsBlockAnimate = isTabsAnamate(tabsBlock);

		if (tabsContent.length > 0) {
			tabsContent.forEach((tabsContentItem, index) => {
				if (tabsTitles[index].classList.contains('_tab-active')) {
					if (tabsBlockAnimate) {
						_slideDown(tabsContentItem, tabsBlockAnimate);
					} else {
						tabsContentItem.hidden = false;
						tabsContentItem.classList.add('_active');
					}
					//location.hash = `tab-${tabsBlockIndex}-${index}`;
				} else {
					if (tabsBlockAnimate) {
						_slideUp(tabsContentItem, tabsBlockAnimate);
					} else {
						tabsContentItem.hidden = true;
						tabsContentItem.classList.remove('_active');
					}
				}
			});
		}
	}
	function setTabsAction(e) {
		const el = e.target;
		if (el.closest('[data-tabs-title]') || el.hasAttribute('[data-tabs-title]')) {
			const tabTitle = el;
			const tabsBlock = tabTitle.closest('[data-tabs]');
			if (!tabTitle.classList.contains('_tab-active') && !tabsBlock.querySelectorAll('._slide').length) {

				const tabActiveTitle = tabsBlock.querySelector('[data-tabs-title]._tab-active');
				if (tabActiveTitle) {
					tabActiveTitle.classList.remove('_tab-active');
				}

				tabTitle.classList.add('_tab-active');
				setTabsStatus(tabsBlock);
			}
			e.preventDefault();
		}
	}
}
//==== Модуь работы с меню (бургер) =======================================================================================================================================================================================================================
function menuOpen() {
	let iconMenu = document.querySelector('.icon-menu');
	let headerMenu = document.querySelector('.page-menu');

	if (iconMenu && headerMenu) {
		iconMenu.addEventListener('click', function (e) {
			if (bodyLockStatus) {
				bodyLockToggle();
				document.documentElement.classList.toggle('_open');
				headerMenu.classList.toggle('_open');
			}
		});
	};
}
function menuClose(target) {
	let headerMenu = document.querySelector('.page-menu');
	domElement(target, changeState)

	function changeState (target) {
		target.addEventListener('click', function (e) {
			if (bodyLockStatus) {
				bodyLockToggle();
				document.documentElement.classList.toggle('_open');
				headerMenu.classList.toggle('_open');
			}
		});
	}
}
// Модуль "показать еще" (в работе) =======================================================================================================================================================================================================================

/*
Документация по работе в шаблоне:
Документация плагина:
Сниппет (HTML): 
*/
function showMore() {

}
//================================================================================================================================================================================================================================================================================================================
// Прочие полезные функции ================================================================================================================================================================================================================================================================================================================
//================================================================================================================================================================================================================================================================================================================

// Получить цифры из строки
function getDigFromString(item) {
	return parseInt(item.replace(/[^\d]/g, ''))
}
// Форматирование цифр типа 100 000 000
function getDigFormat(item) {
	return item.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
}
// Уникализация массива
function uniqArray(array) {
	return array.filter(function (item, index, self) {
		return self.indexOf(item) === index;
	});
}

function setPhoneMask() {
	const phoneInputs = document.querySelectorAll('input[data-phone-mask]');

	if(phoneInputs) {
		phoneInputs.forEach(phoneInput => {
			if (phoneInput) {
				//'+7(999) 999 9999'
				//'+38(999) 999 9999'
				//'+375(99)999-99-99'
				phoneInput.classList.add('_mask');
				Inputmask("+380 999 999 999", {
					showMaskOnHover: false,
					clearIncomplete: true,
					clearMaskOnLostFocus: true,
					onincomplete: function () {
						phoneInput.inputmask.remove();
						phoneInput.value = ''
					}
				}).mask(phoneInput);

				phoneInput.addEventListener('blur', () => {
					phoneInput.placeholder = ''
				})
			}
		})
	}
}

function setDateMask() {
	const phoneInputs = document.querySelectorAll('input[data-date-mask]');

	if(phoneInputs) {
		phoneInputs.forEach(dateInput => {
			if (dateInput) {
				datepicker(dateInput, {
					customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
					customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
					formatter: (input, date, instance) => {
						const value = date.toLocaleDateString()
						input.value = value
					},
					onSelect: function (input, instance, date) {
						input_focus_add(input.el);
					}
				});
			}
		})
	}
}
//============================================================================================================================

// Tabs ===============================================================================================		
function tabsAdaptive() {
	let tabs = document.querySelectorAll("._tabs");
	for (let index = 0; index < tabs.length; index++) {
		let tab = tabs[index];
		let tabs_items = tab.querySelectorAll("._tabs-item");
		let tabs_blocks = tab.querySelectorAll("._tabs-block");
		for (let index = 0; index < tabs_items.length; index++) {
			let tabs_item = tabs_items[index];
			tabs_item.addEventListener("click", function (e) {
				for (let index = 0; index < tabs_items.length; index++) {
					let tabs_item = tabs_items[index];
					tabs_item.classList.remove('_active');
					tabs_blocks[index].classList.remove('_active');
				}
				tabs_item.classList.add('_active');
				tabs_blocks[index].classList.add('_active');
				e.preventDefault();
			});
		}
	}

	const matchMedia = window.matchMedia('(max-width: 768px)')

	matchMedia.addListener(function () {
		init(matchMedia);
	});
	init(matchMedia)
	
	function init(matchMedia = false) {
		if (matchMedia.matches || !matchMedia) {
			tabsMobileBody()
		}
	}

	function tabsMobileBody() {
		let tabsMobile = document.querySelectorAll('._tabs-mobile');
		for (let index = 0; index < tabsMobile.length; index++) {
			let tab = tabsMobile[index];
			let value = tab.querySelector('.tabs-mobile__value');
			let tabs_items = tab.querySelectorAll("._tabs-item");
			let item_active = tab.querySelector("._tabs-item._active");
			let tabs_nav = tab.querySelector('.tabs-block__nav');
			value.innerHTML = item_active.innerHTML
	
			value.addEventListener("click", () => {
				value.classList.toggle('_active')
				_slideToggle(tabs_nav);
			})
	
			for (let index = 0; index < tabs_items.length; index++) {
				let tabs_item = tabs_items[index];

				const clickHandler = () => {
					let item_active = tab.querySelector("._tabs-item._active");
					value.innerHTML = item_active.innerHTML;
					if (matchMedia.matches || !matchMedia) {
						_slideUp(tabs_nav);		
					}		
				}
				
				tabs_item.addEventListener("click", clickHandler);
			}
		}
	}

}
// ====================================================================================================

// FLOAT FORM LABEL ===================================================================================
function setFloatLabels() {
	const floatLabels = document.querySelectorAll('[data-float-label]')

	const init = (el) => {
		floatLabels.forEach(label => {
			const element = label.querySelector(`${el}`)
			const contentName = label.querySelector('.content-name')
	
			if(element && element.value) {
				contentName.classList.add('_active')
			}
	
			if(element) {
				element.addEventListener('focus', () => {
					contentName.classList.add('_active')
				})
				element.addEventListener('blur', () => {
					if(!element.value) {
						contentName.classList.remove('_active')
					} else {
						contentName.classList.add('_active')
					}
				})
			}
		})
	}

	init('input')
	init('textarea')
}
// ====================================================================================================

// INPUT TYPE FILE ===================================================================================
function setFileInputs() {
	const fileInputs = document.querySelectorAll('[data-input-file]') 

	if(fileInputs.length > 0) {
		for(let i = 0; i < fileInputs.length; i++) {
			const fileInputContainer = fileInputs[i];
			const inputFile = fileInputContainer.querySelector('input');
			const fileButton = fileInputContainer.querySelector('.icon-pin');
			const filePreview = fileInputContainer.querySelector('.message-text');
			const maxSizeError = inputFile.getAttribute('data-error-max-size');
			const placeholder = inputFile.getAttribute('data-placeholder');
			filePreview.innerHTML = placeholder
	
			// remove file preview
			fileButton.onclick = () => {
				if(inputFile.classList.contains('full')) {
					inputFile.classList.remove('full')
					inputFile.value = '';
					filePreview.innerHTML = placeholder
				}
			};
	
			inputFile.addEventListener('change', () => {
				//form_remove_error(inputFile);
				uploadFile(inputFile.files[0]);
			});
	
			function uploadFile(file) {
			
				if (!['application/pdf', 'image/png', 'application/msword'].includes(file.type)) {
					//form_add_error(inputFile)
					inputFile.value = '';
					return;
				}
			
				// проверим размер файла (<2 Мб)
				if (file.size > 2 * 1024 * 1024) {
					//form_add_error(inputFile)
					fileInputContainer.querySelector('.form__error').innerHTML = maxSizeError;
					inputFile.value = '';
					return;
				}
			
				inputFile.classList.add('full')
				filePreview.innerHTML = file.name
			}
		}
	}
}
// ====================================================================================================

function isTarget (eventTarget, target) {
	let $target
	if (typeof target === 'string') {
		$target = document.querySelector(target)
	}
	if ($target === eventTarget) {
		return $target
	} else if (eventTarget.closest(target)) {
		return eventTarget.closest(target)
	} else {
		return false
	}
}

function removeClasses(array, className) {
	let $array
	if (typeof array === 'string') {
		$array = document.querySelectorAll(array)
	} else {
		$array = array
	}
	for (var i = 0; i < $array.length; i++) {
		$array[i].classList.remove(className);
	}
}

function domElement(target, callback) {
	if (target instanceof NodeList) {
		target.forEach(el => callback(el))
	} else if (target instanceof Array) {
		Array.from(target).forEach(el => callback(el))
	} else if (typeof target === 'string') {
		const $target = document.querySelectorAll(target)

		if($target instanceof NodeList) {
			$target.forEach(el => callback(el))
		} else {
			callback($target)
		}
	} else {
		callback(target)
	}
}


;// CONCATENATED MODULE: ./src/js/core/forms/forms.js
// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// Вспомогательные функции

// Модуль попапа
// import { popupItem } from "../utils/popups.js";
// Модуль прокрутки к блоку
// import { gotoBlock } from "../scroll/gotoblock.js";
//==============================================================================================================================================================================================================================================================================================================================

/*
Чтобы поле участвовало в валидации добавляем атрибут data-required
Особые проверки:
data-required="email" - вадидация E-mail

Чтобы поле валидировалось при потере фокуса, 
к атрибуту data-required добавляем атрибут data-validate
*/

// Работа с полями формы. Добавление классов, работа с placeholder
function formFieldsInit() {
	const formFields = document.querySelectorAll('input[placeholder],textarea[placeholder]');

	setPhoneMask()
	setDateMask()
	//setFloatLabels()
	//setFileInputs()

	if (formFields.length) {
		formFields.forEach(formField => {
			formField.dataset.placeholder = formField.placeholder;
		});
	}
	document.body.addEventListener("focusin", function (e) {
		const targetElement = e.target;
		if ((targetElement.tagName === 'INPUT' || targetElement.tagName === 'TEXTAREA')) {
			if (targetElement.dataset.placeholder) {
				targetElement.placeholder = '';
			}
			targetElement.classList.add('_focus');
			targetElement.parentElement.classList.add('_focus');

			formValidate.removeError(targetElement);
		}

		setPhoneMask()
	});
	document.body.addEventListener("focusout", function (e) {
		const targetElement = e.target;
		if ((targetElement.tagName === 'INPUT' || targetElement.tagName === 'TEXTAREA')) {
			if (targetElement.dataset.placeholder) {
				targetElement.placeholder = targetElement.dataset.placeholder;
			}
			targetElement.classList.remove('_focus');
			targetElement.parentElement.classList.remove('_focus');

			// Моментальная валидация
			if (targetElement.hasAttribute('data-validate')) {
				formValidate.validateInput(targetElement);
			}
		}
	});
}
// Валидация форм
let formValidate = {
	getErrors(form) {
		let error = 0;
		let formRequiredItems = form.querySelectorAll('*[data-required]');
		if (formRequiredItems.length) {
			formRequiredItems.forEach(formRequiredItem => {
				if (formRequiredItem.offsetParent !== null) {
					error += this.validateInput(formRequiredItem);
				}

			});
		}
		return error;
	},
	validateInput(formRequiredItem) {
		let error = 0;
		if (formRequiredItem.dataset.required === "email") {
			formRequiredItem.value = formRequiredItem.value.replace(" ", "");
			if (this.emailTest(formRequiredItem)) {
				if(!formRequiredItem.value) {
					this.addError(formRequiredItem);
				} else {
					this.addUncorrectError(formRequiredItem);
				}
				error++;
			} else {
				this.removeError(formRequiredItem);
			}
		} else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
			this.addError(formRequiredItem);
			error++;
		} else if (formRequiredItem.dataset.required === "select") {
			//formRequiredItem.value = formRequiredItem.value.replace(" ", "");
			let selectDefault = formRequiredItem.querySelector('.select__option[hidden]')

			if(+selectDefault.dataset.value === 1) {
				this.addError(formRequiredItem);
				error++;
			} else {
				this.removeError(formRequiredItem);
			}
		}  else if (formRequiredItem.dataset.required === "password") {
			formRequiredItem.value = formRequiredItem.value.replace(" ", "");

			if(!formRequiredItem.value) {
				this.addError(formRequiredItem);
				error++;
			} else if(this.passwordTest(formRequiredItem)) {
				this.addPasswordError(formRequiredItem);
				error++;
			} else {
				this.removeError(formRequiredItem);
			}
			
		}
		else {
			if (!formRequiredItem.value) {
				this.addError(formRequiredItem);
				error++;
			} else {
				this.removeError(formRequiredItem);
			}
		}
		return error;
	},
	addError(formRequiredItem) {
		formRequiredItem.classList.add('_error');
		formRequiredItem.parentElement.classList.add('_error');
		let inputError = formRequiredItem.parentElement.querySelector('.form__error');
		if (inputError) formRequiredItem.parentElement.removeChild(inputError);
		if (validationUnfillError && formRequiredItem.type !== "checkbox") {
			formRequiredItem.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + validationUnfillError + '</div>');
		}
	},
	addUncorrectError(formRequiredItem) {
		formRequiredItem.classList.add('_error');
		formRequiredItem.parentElement.classList.add('_error');
		let inputError = formRequiredItem.parentElement.querySelector('.form__error');
		if (inputError) formRequiredItem.parentElement.removeChild(inputError);
		if (validationUncorrectError) {
			formRequiredItem.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + validationUncorrectError + '</div>');
		}
	},
	addPasswordError(formRequiredItem) {
		formRequiredItem.classList.add('_error');
		formRequiredItem.parentElement.classList.add('_error');
		let inputError = formRequiredItem.parentElement.querySelector('.form__error');
		if (inputError) formRequiredItem.parentElement.removeChild(inputError);
		if (validationShortPassError) {
			formRequiredItem.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + validationShortPassError + '</div>');
		}
	},
	removeError(formRequiredItem) {
		formRequiredItem.classList.remove('_error');
		formRequiredItem.parentElement.classList.remove('_error');
		if (formRequiredItem.parentElement.querySelector('.form__error')) {
			formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector('.form__error'));
		}
	},
	formClean(form) {
		let inputs = form.querySelectorAll('input,textarea');
		for (let index = 0; index < inputs.length; index++) {
			const el = inputs[index];
			el.parentElement.classList.remove('_focus');
			el.classList.remove('_focus');
			el.value  = ''; // el.dataset.placeholder
		}
		let checkboxes = form.querySelectorAll('.checkbox__input');
		if (checkboxes.length > 0) {
			for (let index = 0; index < checkboxes.length; index++) {
				const checkbox = checkboxes[index];
				//checkbox.checked = false;
				if(checkbox.hasAttribute('value')) {
					checkbox.removeAttribute('value')
				}
			}
		}
		let selects = form.querySelectorAll('select');
		if (selects.length > 0) {
			for (let index = 0; index < selects.length; index++) {
				const select = selects[index];
				const select_default_value = select.getAttribute('data-default');
				select.value = select_default_value;
				select_item(select);
			}
		}
		// float label
		let floatLabels = form.querySelectorAll('.content-name');
		if (floatLabels.length > 0) {
			for (let index = 0; index < floatLabels.length; index++) {
				const label = floatLabels[index];
				label.classList.remove('_active')
			}
		}
		// file input
		let fileInputs = form.querySelectorAll('.file__input');
		let previewFileText = form.querySelectorAll('.message-text');
		if (fileInputs.length > 0) {
			for (let index = 0; index < fileInputs.length; index++) {
				const fileInput = fileInputs[index];
				fileInput.classList.remove('full')
			}
			for (let index = 0; index < previewFileText.length; index++) {
				const text = previewFileText[index];
				text.innerText = fileInputs[0].getAttribute('data-placeholder') || ''
			}
		}
	},
	emailTest(formRequiredItem) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
	},
	passwordTest(formRequiredItem) {
		if(formRequiredItem.value.length < 8) {
			return true
		} else {
			return false
		}
	}
}
/* Отправка форм */
function formSubmit(validate) {
	const forms = document.forms;
	if (forms.length) {
		for (const form of forms) {
			form.addEventListener('submit', formSubmit);
		}
	}
	async function formSubmit(e) {
		const form = e.target;
		const error = validate ? formValidate.getErrors(form) : 0;
		if (error === 0) {
			const message = form.getAttribute('data-message');
			const ajax = form.hasAttribute('data-ajax');
			//SendForm
			if (ajax) {
				e.preventDefault();
				const formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
				const formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
				const formData = new FormData(form);

				form.classList.add('_sending');
				const response = await fetch(formAction, {
					method: formMethod,
					body: formData
				});
				if (response.ok) {
					let responseResult = await response.json();
					form.classList.remove('_sending');
					if (message) {
						// Нужно подключить зависимость
						popupItem.open(`${message}`);
					}
					formValidate.formClean(form);
				} else {
					alert("Ошибка");
					form.classList.remove('_sending');
				}
			}
			// If test
			if (form.hasAttribute('data-test')) {
				e.preventDefault();
				if (message) {
					// Нужно подключить зависимость
					popupItem.open(`${message}`);
				}
				formValidate.formClean(form);
			}
		} else {
			const formError = form.querySelector('._error');
			if (formError && form.hasAttribute('data-goto-error')) {
				// Нужно подключить зависимость
				gotoBlock(formError, 1000, 50);
			}
			e.preventDefault();
		}
	}
}
/* Модуь формы "показать пароль" */
function formViewpass() {
	document.addEventListener("click", function (e) {
		let targetElement = e.target;
		if (targetElement.closest('[class*="__viewpass"]')) {
			let inputType = targetElement.classList.contains('active') ? "password" : "text";
			targetElement.parentElement.querySelector('input').setAttribute("type", inputType);
			targetElement.classList.toggle('active');
		}
	});
}
/* Модуь формы "колличество" */
function formQuantity() {
	document.addEventListener("click", function (e) {
		let targetElement = e.target;
		if (targetElement.closest('.quantity__button')) {
			let value = parseInt(targetElement.closest('.quantity').querySelector('input').value);
			if (targetElement.classList.contains('quantity__button_plus')) {
				value++;
			} else {
				--value;
				if (value < 1) value = 1;
			}
			targetElement.closest('.quantity').querySelector('input').value = value;
		}
	});
}
/* Модуь звездного рейтинга */
function formRating() {
	const ratings = document.querySelectorAll('.rating');
	if (ratings.length > 0) {
		initRatings();
	}
	// Основная функция
	function initRatings() {
		let ratingActive, ratingValue;
		// "Бегаем" по всем рейтингам на странице
		for (let index = 0; index < ratings.length; index++) {
			const rating = ratings[index];
			initRating(rating);
		}
		// Инициализируем конкретный рейтинг
		function initRating(rating) {
			initRatingVars(rating);

			setRatingActiveWidth();

			if (rating.classList.contains('rating_set')) {
				setRating(rating);
			}
		}
		// Инициализайция переменных
		function initRatingVars(rating) {
			ratingActive = rating.querySelector('.rating__active');
			ratingValue = rating.querySelector('.rating__value');
		}
		// Изменяем ширину активных звезд
		function setRatingActiveWidth(index = ratingValue.innerHTML) {
			const ratingActiveWidth = index / 0.05;
			ratingActive.style.width = `${ratingActiveWidth}%`;
		}
		// Возможность указать оценку 
		function setRating(rating) {
			const ratingItems = rating.querySelectorAll('.rating__item');
			for (let index = 0; index < ratingItems.length; index++) {
				const ratingItem = ratingItems[index];
				ratingItem.addEventListener("mouseenter", function (e) {
					// Обновление переменных
					initRatingVars(rating);
					// Обновление активных звезд
					setRatingActiveWidth(ratingItem.value);
				});
				ratingItem.addEventListener("mouseleave", function (e) {
					// Обновление активных звезд
					setRatingActiveWidth();
				});
				ratingItem.addEventListener("click", function (e) {
					// Обновление переменных
					initRatingVars(rating);

					if (rating.dataset.ajax) {
						// "Отправить" на сервер
						setRatingValue(ratingItem.value, rating);
					} else {
						// Отобразить указанную оцнку
						ratingValue.innerHTML = index + 1;
						setRatingActiveWidth();
					}
				});
			}
		}
		async function setRatingValue(value, rating) {
			if (!rating.classList.contains('rating_sending')) {
				rating.classList.add('rating_sending');

				// Отправика данных (value) на сервер
				let response = await fetch('rating.json', {
					method: 'GET',

					//body: JSON.stringify({
					//	userRating: value
					//}),
					//headers: {
					//	'content-type': 'application/json'
					//}

				});
				if (response.ok) {
					const result = await response.json();

					// Получаем новый рейтинг
					const newRating = result.newRating;

					// Вывод нового среднего результата
					ratingValue.innerHTML = newRating;

					// Обновление активных звезд
					setRatingActiveWidth();

					rating.classList.remove('rating_sending');
				} else {
					alert("Ошибка");

					rating.classList.remove('rating_sending');
				}
			}
		}
	}
}
function formPricerange() {
	
const priceSlider = document.querySelector('.price-filter');
	if (priceSlider) {
		noUiSlider.create(priceSlider, {
			start: [1500, 15500],
			connect: true,
			tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
			range: {
				'min': [1500],
				'max': [15500]
			}
		});

		// const priceStart = document.getElementById('price-start');
		// const priceEnd = document.getElementById('price-end');
		// priceStart.addEventListener('change', setPriceValues);
		// priceEnd.addEventListener('change', setPriceValues);

		// function setPriceValues() {
		// 	let priceStartValue;
		// 	let priceEndValue;
		// 	if (priceStart.value != '') {
		// 		priceStartValue = priceStart.value;
		// 	}
		// 	if (priceEnd.value != '') {
		// 		priceEndValue = priceEnd.value;
		// 	}
		// 	priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
		// }
	}
}


;// CONCATENATED MODULE: ./src/js/core/utils/inline-svg.js
inlineSVG.init({
	svgSelector: '[data-inline-svg]', // the class attached to all images that should be inlined
	//initClass: 'js-inlinesvg', // class added to <html>
}); // second parament colback , function () { console.log('All SVGs inlined'); }

{/* <img data-src="viber.svg" inline-svg alt=""></img> */}
;// CONCATENATED MODULE: ./src/js/core/scroll/lazyload.js
//import LazyLoad from "vanilla-lazyload";

// Работает с объектами с класом ._lazy

const lazyMedia = new LazyLoad({
	elements_selector: '[data-lazy]',
	// container: document.querySelector("#s-team"),
    // thresholds: "200% 0px",
	// class_loaded: '_lazy-loaded',
	//use_native: true
});
//console.log(lazyMedia)

// Обновить модуль
lazyMedia.update();
;// CONCATENATED MODULE: ./src/js/core/utils/sliders.js
/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
//import Swiper, { Navigation, Pagination, Lazy } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили

// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	if (document.querySelector('[data-slider-id="1"]')) {
		new Swiper('[data-slider-id="1"]', {
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			resizeObserver: true,
			autoHeight: true,
			speed: 800,
			grabCursor: true,
			navigation: {
				nextEl: '[data-slider-btn="1, next"]',
				prevEl: '[data-slider-btn="1, prev"]',
				disabledClass: '_disabled'
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				480: {
					slidesPerView: 1.5,
					spaceBetween: 24,
				},
				768: {
					slidesPerView: 2.5,
					spaceBetween: 24,
				},
				992: {
					slidesPerView: 2.8,
					spaceBetween: 94	
				},
				1256: {
					slidesPerView: 3,
					spaceBetween: 168
				}
			}
		})
	}

	if (document.querySelector('[data-slider-id="2"]')) {
		new Swiper('[data-slider-id="2"]', {
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			resizeObserver: true,
			autoHeight: true,
			speed: 800,
			grabCursor: true,
			navigation: {
				nextEl: '[data-slider-btn="2, next"]',
				prevEl: '[data-slider-btn="2, prev"]',
				disabledClass: '_disabled'
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				480: {
					slidesPerView: 1,
					spaceBetween: 24,
				},
				768: {
					slidesPerView: 1.5,
					spaceBetween: 24,
				},
				1256: {
					slidesPerView: 2,
					spaceBetween: 32
				}
			}
		})
	}

	if (document.querySelector('[data-slider-id="3"]')) {
		new Swiper('[data-slider-id="3"]', {
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			resizeObserver: true,
			autoHeight: true,
			speed: 800,
			grabCursor: true,
			navigation: {
				nextEl: '[data-slider-btn="3, next"]',
				prevEl: '[data-slider-btn="3, prev"]',
				disabledClass: '_disabled'
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				480: {
					slidesPerView: 1.5,
					spaceBetween: 24,
				},
				768: {
					slidesPerView: 2.5,
					spaceBetween: 24,
				},
				992: {
					slidesPerView: 2.8,
					spaceBetween: 32	
				},
				1256: {
					slidesPerView: 3,
					spaceBetween: 32
				}
			}
		})
	}

	if(document.querySelector('[data-slider-touch="1"]')) {

		new Swiper('[data-slider-touch="1"]', {
			lazy: {
				checkInView: true,
				loadPrevNext: true,
				loadPrevNextAmount: 4
			},
			slidesPerView: "auto",
			spaceBetween: 40,
			breakpoints: {
				0: {
					spaceBetween: 8,
				},
				480: {
					spaceBetween: 16,
				},
				768: {
					spaceBetween: 32,
				}
			}
		});
	}

	if(document.querySelector('[data-slider-touch="2"]')) {

		new Swiper('[data-slider-touch="2"]', {
			lazy: {
				checkInView: true,
				loadPrevNext: true,
				loadPrevNextAmount: 4
			},
			slidesPerView: 2,
			spaceBetween: 40,
			breakpoints: {
				0: {
					spaceBetween: 8,
					slidesPerView: 1,
				},
				480: {
					spaceBetween: 16,
					slidesPerView: 1.2,
				},
				768: {
					spaceBetween: 32,
					slidesPerView: 1.5,
				},
				992: {
					slidesPerView: 2,
				}
			}
		});
	}

	// THUMBS SLIDER
	if(document.querySelector('.product-slider')) {
		const swiper = new Swiper(".product-slider__thumbs", {
			spaceBetween: 16,
			slidesPerView: 4,
			freeMode: true,
			watchSlidesProgress: true,
		});
		const swiper2 = new Swiper(".product-slider__slider", {
			spaceBetween: 10,
			navigation: {
				nextEl: '[data-slider-btn="2, next"]',
				prevEl: '[data-slider-btn="2, prev"]',
				disabledClass: '_disabled'
			},
			pagination: {
				el: '[data-slider-pagging="2"]',
				type: 'bullets',
			},
			thumbs: {
				swiper: swiper,
			},
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});
;// CONCATENATED MODULE: ./src/js/core/forms/select.js
//----- Импорт зависимостей ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Подключение файла стилей
// Базовые стили поключаются в src/scss/forms.scss
// Файл базовых стилей src/scss/forms/select.scss

/*
Документация:
Снипет (HTML): sel
*/
/*
// Настройки
Для селекта (select):
class="имя класса" - модификатор к конкретному селекту
multiple - мультивыбор
data-tags - режим тегов, только для (только для multiple)
data-scroll - включит прокрутку для выпадающего списка, дополнительно можно подключить кастомный скролл simplebar в app.js. Указанное число для атрибута ограничит высоту
data-checkbox - стилизация элементов по checkbox (только для multiple)
data-show-selected - отключает скрытие выбранного элемента
data-search - позволяет искать по выпадающему списку
data-open - селект открыт сразу

Для плейсхолдера (Плейсхолдер - это option с value=""):
data-label для плейсхолдера, добавляет label к селекту
data-show для плейсхолдера, показывает его в списке (только для единичного выбора)

Для элемента (option):
data-class="имя класса" - добавляет класс
data-asset="путь к картинке или текст" - добавляет структуру 2х колонок и данными
*/

/*
// Возможные доработки:
попап на мобилке
*/

// Получение всех select на странице
const selectItems = document.querySelectorAll('select');
// Объект построения Select
const selectModule = {
	// CSS классы модуля
	selectClasses: {
		classSelect: "select", // Главный блок
		classSelectBody: "select__body", // Тело селекта
		classSelectTitle: "select__title", // Заголовок
		classSelectValue: "select__value", // Значение в заголовке
		classSelectLabel: "select__label", // Лабел
		classSelectInput: "select__input", // Поле ввода
		classSelectText: "select__text", // Оболочка текстовых данных
		classSelectOptions: "select__options", // Выпадающий список
		classSelectOptionsScroll: "select__scroll", // Оболочка при скролле
		classSelectOption: "select__option", // Пункт
		classSelectContent: "select__content", // Оболочка контента в заголовке
		classSelectRow: "select__row", // Ряд
		classSelectData: "select__asset", // Дополнительные данные
		classSelectDisabled: "_select-disabled", // Запрешен
		classSelectTag: "_select-tag", // Класс тега
		classSelectOpen: "_select-open", // Список открыт
		classSelectActive: "_select-active", // Список выбран
		classSelectFocus: "_select-focus", // Список в фокусе
		classSelectMultiple: "_select-multiple", // Мультивыбор
		classSelectCheckBox: "_select-checkbox", // Стиль чекбокса
		classSelectOptionSelected: "_select-selected", // Выбранный пункт
	},
	// Конструктор CSS класса
	getSelectClass(className) {
		return `.${className}`;
	},
	// Геттер элементов псевдоселекта
	getSelectElement(selectItem, className) {
		return {
			originalSelect: selectItem.querySelector('select'),
			selectElement: selectItem.querySelector(selectModule.getSelectClass(className)),
		}
	},
	// Функция инициализации всех селектов
	selectsInit(selectItems) {
		selectItems.forEach((originalSelect, index) => {
			originalSelect.dataset.id = index;
			selectModule.selectInit(originalSelect);
		});
		// Обработчики событий...
		// ...при клике
		document.addEventListener('click', selectModule.selectsActions);
		// ...при нажатии клавиши
		document.addEventListener('keydown', selectModule.selectsActions);
		// ...при фокусе
		document.addEventListener('focusin', selectModule.selectsActions);
		// ...при потере фокуса
		document.addEventListener('focusout', selectModule.selectsActions);
	},
	// Функция инициализации конкретного селекта
	selectInit(originalSelect) {
		// Создаем оболочку
		let selectItem = document.createElement("div");
		selectItem.classList.add(selectModule.selectClasses.classSelect);
		// Выводим оболочку перед оригинальным селектом
		originalSelect.parentNode.insertBefore(selectItem, originalSelect);
		// Помещаем оригинальный селект в оболочку
		selectItem.appendChild(originalSelect);
		// Скрываем оригинальный селект
		originalSelect.hidden = true;

		// Конструктор косновных элементов
		selectItem.insertAdjacentHTML('beforeend', `<div class="${selectModule.selectClasses.classSelectBody}"><div hidden class="${selectModule.selectClasses.classSelectOptions}"></div></div>`);
		// Запускаем конструктор псевдоселекта
		selectModule.selectBuild(originalSelect);

		// Работа с плейсхолдером
		if (selectModule.getSelectPlaceholder(originalSelect)) {
			// Запоминаем плейсхолдер
			originalSelect.dataset.placeholder = selectModule.getSelectPlaceholder(originalSelect).value;
			// Если включен режим label
			if (selectModule.getSelectPlaceholder(originalSelect).label.show) {
				const selectItemTitle = selectModule.getSelectElement(selectItem, selectModule.selectClasses.classSelectTitle).selectElement;
				selectItemTitle.insertAdjacentHTML('afterbegin', `<span class="${selectModule.selectClasses.classSelectLabel}">${selectModule.getSelectPlaceholder(originalSelect).label.text ? selectModule.getSelectPlaceholder(originalSelect).label.text : selectModule.getSelectPlaceholder(originalSelect).value}</span>`);
			}
		}
		// Запоминаем скорость
		originalSelect.dataset.speed = originalSelect.dataset.speed ? originalSelect.dataset.speed : "150";
		// Событие при изменении оригинального select
		originalSelect.addEventListener('change', selectModule.selectChange);
	},
	// Конструктор псевдоселекта
	selectBuild(originalSelect) {
		const selectItem = originalSelect.parentElement;
		// Добавляем ID селекта
		selectItem.dataset.id = originalSelect.dataset.id;
		// Получаем класс оригинального селекта, создаем модификатор и добавляем его
		selectItem.classList.add(originalSelect.getAttribute('class') ? `select_${originalSelect.getAttribute('class')}` : "");
		// Если множественный выбор, добавляем класс
		originalSelect.multiple ? selectItem.classList.add(selectModule.selectClasses.classSelectMultiple) : selectItem.classList.remove(selectModule.selectClasses.classSelectMultiple);
		// Cтилизация элементов под checkbox (только для multiple)
		originalSelect.hasAttribute('data-checkbox') && originalSelect.multiple ? selectItem.classList.add(selectModule.selectClasses.classSelectCheckBox) : selectItem.classList.remove(selectModule.selectClasses.classSelectCheckBox);
		// Сеттер значения заголовка селекта
		selectModule.setSelectTitleValue(selectItem, originalSelect);
		// Сеттер элементов списка (options)
		selectModule.setOptions(selectItem, originalSelect);
		// Если включена опция поиска data-search, запускаем обработчик
		originalSelect.hasAttribute('data-search') ? selectModule.searchActions(selectItem) : null;
		// Если указана настройка data-open, открываем селект
		originalSelect.hasAttribute('data-open') ? selectModule.selectAction(selectItem) : null;
		// Обработчик disabled
		selectModule.selectDisabled(selectItem, originalSelect);
	},
	// Функция реакций на события
	selectsActions(e) {
		const targetElement = e.target;
		const targetType = e.type;
		if (targetElement.closest(selectModule.getSelectClass(selectModule.selectClasses.classSelect)) || targetElement.closest(selectModule.getSelectClass(selectModule.selectClasses.classSelectTag))) {
			const selectItem = targetElement.closest('.select') ? targetElement.closest('.select') : document.querySelector(`.${selectModule.selectClasses.classSelect}[data-id="${targetElement.closest(selectModule.getSelectClass(selectModule.selectClasses.classSelectTag)).dataset.selectId}"]`);
			const originalSelect = selectModule.getSelectElement(selectItem).originalSelect;
			if (targetType === 'click') {
				if (!originalSelect.disabled) {
					if (targetElement.closest(selectModule.getSelectClass(selectModule.selectClasses.classSelectTag))) {
						// Обработка клика на тег
						const targetTag = targetElement.closest(selectModule.getSelectClass(selectModule.selectClasses.classSelectTag));
						const optionItem = document.querySelector(`.${selectModule.selectClasses.classSelect}[data-id="${targetTag.dataset.selectId}"] .select__option[data-value="${targetTag.dataset.value}"]`);
						selectModule.optionAction(selectItem, originalSelect, optionItem);
					} else if (targetElement.closest(selectModule.getSelectClass(selectModule.selectClasses.classSelectTitle))) {
						// Обработка клика на заголовок селекта
						selectModule.selectAction(selectItem);
					} else if (targetElement.closest(selectModule.getSelectClass(selectModule.selectClasses.classSelectOption))) {
						// Обработка клика на элемент селекта
						const optionItem = targetElement.closest(selectModule.getSelectClass(selectModule.selectClasses.classSelectOption));
						selectModule.optionAction(selectItem, originalSelect, optionItem);
					}
				}
			} else if (targetType === 'focusin' || targetType === 'focusout') {
				if (targetElement.closest(selectModule.getSelectClass(selectModule.selectClasses.classSelect))) {
					targetType === 'focusin' ? selectItem.classList.add(selectModule.selectClasses.classSelectFocus) : selectItem.classList.remove(selectModule.selectClasses.classSelectFocus);
				}
			} else if (targetType === 'keydown' && e.code === 'Escape') {
				selectModule.selectsСlose();
			}
		} else {
			selectModule.selectsСlose();
		}
	},
	// Функция закрытия всех селектов
	selectsСlose() {
		const selectActiveItems = document.querySelectorAll(`${selectModule.getSelectClass(selectModule.selectClasses.classSelect)}${selectModule.getSelectClass(selectModule.selectClasses.classSelectOpen)}`);
		if (selectActiveItems.length) {
			selectActiveItems.forEach(selectActiveItem => {
				selectModule.selectAction(selectActiveItem);
			});
		}
	},
	// Функция открытия/закрытия конкретного селекта
	selectAction(selectItem) {
		const originalSelect = selectModule.getSelectElement(selectItem).originalSelect;
		const selectOptions = selectModule.getSelectElement(selectItem, selectModule.selectClasses.classSelectOptions).selectElement;
		if (!selectOptions.classList.contains('_slide')) {
			selectItem.classList.toggle(selectModule.selectClasses.classSelectOpen);
			_slideToggle(selectOptions, originalSelect.dataset.speed);
		}
	},
	// Сеттер значения заголовка селекта
	setSelectTitleValue(selectItem, originalSelect) {
		const selectItemBody = selectModule.getSelectElement(selectItem, selectModule.selectClasses.classSelectBody).selectElement;
		const selectItemTitle = selectModule.getSelectElement(selectItem, selectModule.selectClasses.classSelectTitle).selectElement;
		if (selectItemTitle) selectItemTitle.remove();
		selectItemBody.insertAdjacentHTML("afterbegin", selectModule.getSelectTitleValue(selectItem, originalSelect));
	},
	// Конструктор значения заголовка
	getSelectTitleValue(selectItem, originalSelect) {
		// Получаем выбранные текстовые значения
		let selectTitleValue = selectModule.getSelectedOptionsData(originalSelect, 2).html;
		// Обработка значений мультивыбора
		// Если включен режим тегов (указана настройка data-tags)
		if (originalSelect.multiple && originalSelect.hasAttribute('data-tags')) {
			selectTitleValue = selectModule.getSelectedOptionsData(originalSelect).elements.map(option => `<span role="button" data-select-id="${selectItem.dataset.id}" data-value="${option.value}" class="_select-tag">${selectModule.getSelectElementContent(option)}</span>`).join('');
			// Если вывод тегов во внешний блок
			if (originalSelect.dataset.tags && document.querySelector(originalSelect.dataset.tags)) {
				document.querySelector(originalSelect.dataset.tags).innerHTML = selectTitleValue;
				if (originalSelect.hasAttribute('data-search')) selectTitleValue = false;
			}
		}
		// Значение(я) или плейсхолдер
		selectTitleValue = selectTitleValue.length ? selectTitleValue : originalSelect.dataset.placeholder;
		// Если есть значение, добавляем класс
		selectModule.getSelectedOptionsData(originalSelect).values.length ? selectItem.classList.add(selectModule.selectClasses.classSelectActive) : selectItem.classList.remove(selectModule.selectClasses.classSelectActive);
		// Возвращаем поле ввода для поиска или текст
		if (originalSelect.hasAttribute('data-search')) {
			// Выводим поле ввода для поиска

			return `<div class="${selectModule.selectClasses.classSelectTitle}"><span class="${selectModule.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${selectTitleValue}" data-placeholder="${selectTitleValue}" class="${selectModule.selectClasses.classSelectInput}"></span></div>`;
		} else {
			// Если выбран элемент со своим классом
			const customClass = selectModule.getSelectedOptionsData(originalSelect).elements.length && selectModule.getSelectedOptionsData(originalSelect).elements[0].dataset.class ? ` ${selectModule.getSelectedOptionsData(originalSelect).elements[0].dataset.class}` : '';
			// Выводим текстовое значение
			return `<button type="button" class="${selectModule.selectClasses.classSelectTitle}"><span class="${selectModule.selectClasses.classSelectValue}"><span class="${selectModule.selectClasses.classSelectContent}${customClass}">${selectTitleValue}</span></span></button>`;
		}
	},
	// Конструктор данных для значения заголовка
	getSelectElementContent(selectOption) {
		// Если для элемента указан вывод картинки или текста, перестраиваем конструкцию
		const selectOptionData = selectOption.dataset.asset ? `${selectOption.dataset.asset}` : '';
		const selectOptionDataHTML = selectOptionData.indexOf('img') >= 0 ? `<img src="${selectOptionData}" alt="">` : selectOptionData;
		let selectOptionContentHTML = ``;
		selectOptionContentHTML += selectOptionData ? `<span class="${selectModule.selectClasses.classSelectRow}">` : '';
		selectOptionContentHTML += selectOptionData ? `<span class="${selectModule.selectClasses.classSelectData}">` : '';
		selectOptionContentHTML += selectOptionData ? selectOptionDataHTML : '';
		selectOptionContentHTML += selectOptionData ? `</span>` : '';
		selectOptionContentHTML += selectOptionData ? `<span class="${selectModule.selectClasses.classSelectText}">` : '';
		selectOptionContentHTML += selectOption.textContent;
		selectOptionContentHTML += selectOptionData ? `</span>` : '';
		selectOptionContentHTML += selectOptionData ? `</span>` : '';
		return selectOptionContentHTML;
	},
	// Получение данных плейсхолдера
	getSelectPlaceholder(originalSelect) {
		const selectPlaceholder = Array.from(originalSelect.options).find(option => !option.value);
		if (selectPlaceholder) {
			return {
				value: selectPlaceholder.textContent,
				show: selectPlaceholder.hasAttribute("data-show"),
				label: {
					show: selectPlaceholder.hasAttribute("data-label"),
					text: selectPlaceholder.dataset.label
				}
			}
		}
	},
	// Получение данных из выбранных элементов
	getSelectedOptionsData(originalSelect, type) {
		// Получаем все выбранные объекты из select
		let selectedOptions = [];
		if (originalSelect.multiple) {
			// Если мультивыбор
			// Убираем плейсхолдер, получаем остальные выбранные элементы
			selectedOptions = Array.from(originalSelect.options).filter(option => option.value).filter(option => option.selected);
		} else {
			// Если единичный выбор
			selectedOptions.push(originalSelect.options[originalSelect.selectedIndex]);
		}
		return {
			elements: selectedOptions.map(option => option),
			values: selectedOptions.filter(option => option.value).map(option => option.value),
			html: selectedOptions.map(option => selectModule.getSelectElementContent(option))
		}
	},
	// Конструктор элементов списка
	getOptions(originalSelect) {
		// Настрока скролла элементов
		let selectOptionsScroll = originalSelect.hasAttribute('data-scroll') ? `data-simplebar` : '';
		let selectOptionsScrollHeight = originalSelect.dataset.scroll ? `style="max-height:${originalSelect.dataset.scroll}px"` : '';
		// Получаем элементы списка
		let selectOptions = Array.from(originalSelect.options);
		if (selectOptions.length > 0) {
			let selectOptionsHTML = ``;
			// Если указана настройка data-show, показываем плейсхолдер в списке
			if ((selectModule.getSelectPlaceholder(originalSelect) && !selectModule.getSelectPlaceholder(originalSelect).show) || originalSelect.multiple) {
				selectOptions = selectOptions.filter(option => option.value);
			}
			// Строим и выводим основную конструкцию
			selectOptionsHTML += selectOptionsScroll ? `<div ${selectOptionsScroll} ${selectOptionsScrollHeight} class="${selectModule.selectClasses.classSelectOptionsScroll}">` : '';
			selectOptions.forEach(selectOption => {
				// Получаем конструкцию конкретного элемента списка
				selectOptionsHTML += selectModule.getOption(selectOption, originalSelect);
			});
			selectOptionsHTML += selectOptionsScroll ? `</div>` : '';
			return selectOptionsHTML;
		}
	},
	// Конструктор конкретного элемента списка
	getOption(selectOption, originalSelect) {
		// Если элемент выбран и включен режим мультивыбора, добавляем класс
		const selectOptionSelected = selectOption.selected && originalSelect.multiple ? ` ${selectModule.selectClasses.classSelectOptionSelected}` : '';
		// Если элемент выбрани нет настройки data-show-selected, скрываем элемент
		const selectOptionHide = selectOption.selected && !originalSelect.hasAttribute('data-show-selected') ? `hidden` : ``;
		// Если для элемента указан класс добавляем
		const selectOptionClass = selectOption.dataset.class ? ` ${selectOption.dataset.class}` : '';
		// Строим и возвращаем конструкцию элемента
		let selectOptionHTML = ``;
		selectOptionHTML += `<button ${selectOptionHide} class="${selectModule.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}" data-value="${selectOption.value}" type="button">`;
		selectOptionHTML += selectModule.getSelectElementContent(selectOption);
		selectOptionHTML += `</button>`;
		return selectOptionHTML;
	},
	// Сеттер элементов списка (options)
	setOptions(selectItem, originalSelect) {
		// Получаем объект тела псевдоселекта
		const selectItemOptions = selectModule.getSelectElement(selectItem, selectModule.selectClasses.classSelectOptions).selectElement;
		// Запускаем конструктор элементов списка (options) и добавляем в тело псевдоселекта
		selectItemOptions.innerHTML = selectModule.getOptions(originalSelect);
	},
	// Обработчик клика на элемент списка
	optionAction(selectItem, originalSelect, optionItem) {
		if (originalSelect.multiple) { // Если мультивыбор
			// Выделяем классом элемент
			optionItem.classList.toggle(selectModule.selectClasses.classSelectOptionSelected);
			// Очищаем выбранные элементы 
			const originalSelectSelectedItems = selectModule.getSelectedOptionsData(originalSelect).elements;
			originalSelectSelectedItems.forEach(originalSelectSelectedItem => {
				originalSelectSelectedItem.removeAttribute('selected');
			});
			// Выбираем элементы 
			const selectSelectedItems = selectItem.querySelectorAll(selectModule.getSelectClass(selectModule.selectClasses.classSelectOptionSelected));
			selectSelectedItems.forEach(selectSelectedItems => {
				originalSelect.querySelector(`option[value="${selectSelectedItems.dataset.value}"]`).setAttribute('selected', 'selected');
			});
		} else { // Если единичный выбор
			// Если не указана настройка data-show-selected, скрываем выбранный элемент
			if (!originalSelect.hasAttribute('data-show-selected')) {
				// Сначала все показать
				if (selectItem.querySelector(`${selectModule.getSelectClass(selectModule.selectClasses.classSelectOption)}[hidden]`)) {
					selectItem.querySelector(`${selectModule.getSelectClass(selectModule.selectClasses.classSelectOption)}[hidden]`).hidden = false;
				}
				// Скрываем выбранную
				optionItem.hidden = true;
			}
			originalSelect.value = optionItem.hasAttribute('data-value') ? optionItem.dataset.value : optionItem.textContent;
			selectModule.selectAction(selectItem);
		}
		// Обновляем заголовок селекта
		selectModule.setSelectTitleValue(selectItem, originalSelect);
		// Вызываем реакцию на изменение селекта
		selectModule.setSelectChange(originalSelect);
	},
	// Реакция на измененение оригинального select
	selectChange(e) {
		selectModule.selectBuild(e.target);
		selectModule.setSelectChange(e.target);
	},
	// Обработчик изменения в селекте
	setSelectChange(originalSelect) {
		const selectItem = originalSelect.parentElement;
		// Вызов коллбэк функции
		selectModule.selectCallback(selectItem, originalSelect);
	},
	// Обработчик disabled
	selectDisabled(selectItem, originalSelect) {
		if (originalSelect.disabled) {
			selectItem.classList.add(selectModule.selectClasses.classSelectDisabled);
			selectModule.getSelectElement(selectItem, selectModule.selectClasses.classSelectTitle).selectElement.disabled = true;
		} else {
			selectItem.classList.remove(selectModule.selectClasses.classSelectDisabled);
			selectModule.getSelectElement(selectItem, selectModule.selectClasses.classSelectTitle).selectElement.disabled = false;
		}
	},
	// Обработчик поиска по элементам списка
	searchActions(selectItem) {
		const originalSelect = selectModule.getSelectElement(selectItem).originalSelect;
		const selectInput = selectModule.getSelectElement(selectItem, selectModule.selectClasses.classSelectInput).selectElement;
		const selectOptions = selectModule.getSelectElement(selectItem, selectModule.selectClasses.classSelectOptions).selectElement;
		const selectOptionsItems = selectOptions.querySelectorAll(`.${selectModule.selectClasses.classSelectOption}`);
		selectInput.addEventListener("input", function (e) {
			selectOptionsItems.forEach(selectOptionsItem => {
				if (selectOptionsItem.textContent.toUpperCase().indexOf(selectInput.value.toUpperCase()) >= 0) {
					selectOptionsItem.hidden = false;
				} else {
					selectOptionsItem.hidden = true;
				}
			});
			// Если список закрыт открываем
			selectOptions.hidden === true ? selectModule.selectAction(selectItem) : null;
		});
	},
	// Коллбэк функция
	selectCallback(selectItem, originalSelect) { },
	// Логгинг в консоль
	setLogging(message) {
		console.log(`[select - info] ${message} `);
	}
}
// Запуск инициализации
selectItems.length ? selectModule.selectsInit(selectItems) : selectModule.setLogging('Нет ни одного select, модуль можно отключить');
;// CONCATENATED MODULE: ./src/js/core/utils/popups.js

// * Using
{/* <a href="#" data-popup-link="[data-popup='myPopupCallback']">Popup Open</a> */}

{/* <div class="hystmodal" data-popup="myPopupCallback">
    <div class="hystmodal__wrap">
        <div class="hystmodal__window" role="dialog" aria-modal="true">
            <button data-hystclose class="hystmodal__close">Закрыть</button>
        </div>
    </div>
</div> */}

let popups_popupItem;
function initPopups() {
	popups_popupItem = new HystModal({
		linkAttributeName: "data-popup-link",
		waitTransitions: true,
		// beforeOpen: function (popupItem) {
		// 	const hash = popupItem.openedWindow.id;
		// 	setHash(`#${hash}`);
		// },
		// afterClose: function (popupItem) {
		// 	setHash(window.location.href.split('#')[0]);
		// },
		// прочие настройки (не обязательно), см. API
	});
	// Открытие по хешу
	// if (getHash() && document.querySelector(`#${getHash()}`)) {
	// 	popupItem.open(`#${getHash()}`);
	// }
}
initPopups();
;// CONCATENATED MODULE: ./src/js/core/scroll/gotoblock.js
// Импорт функционала ====================================================================================================================================================================================================================================================================================================
// Вспомогательные функции
// import { isMobile } from "../functions.js";
//==============================================================================================================================================================================================================================================================================================================================

/* 
Модуль плавной проктутки к блоку
Документация:
*/

// Подключение дополнения 
//import "../../libs/smoothScroll.js";
// Функция
let gotoblock_gotoBlock = (targetBlock, noHeader = false, speed = 500, offset = 0) => {
	let headerItem = '';
	//OffsetHeader
	if (noHeader) {
		headerItem = 'header.header';
	}
	let options = {
		speedAsDuration: true,
		speed: speed,
		header: headerItem,
		offset: offset,
		easing: 'easeOutQuad',
	};
	const targetBlockElement = document.querySelector(targetBlock);
	targetBlockElement ? new SmoothScroll().animateScroll(targetBlockElement, '', options) : console.log(`[gotoBlock] - Такого блока нет: ${targetBlock}`);
};
;// CONCATENATED MODULE: ./src/js/components/app/app.functions.js
const isView = (el) => {
    !el.classList.contains('is-view') ? el.classList.add('is-view') : null
}
const isClass = (el, cls) => {
    let $root 
    if(el.classList.contains(cls)) {
        root = el
    } else {
        undefined.isClass()
    }
    
    return root 
}
;// CONCATENATED MODULE: ./src/js/core/classes/MovingTiters.js
class MovingTiters {
    constructor(options) {
        if(typeof options.dom === 'string') {
            this.titers = document.querySelectorAll(options.dom)
        } else {
            this.titers = options.dom
        }
        
        this.createTiters()
    }

    createTiters() {
        if( this.titers.length ) {
            this.titers.forEach( item => {
                return titersSpeed(item);
            })
            window.addEventListener('resize', () => {
                this.titers.forEach( item => {
                    return titersSpeed(item);
                })
            })
        }
    
        function titersSpeed(titers) {
            let lists = titers.querySelectorAll('.titers__list');
            lists.forEach( list => {
                let speed = list.hasAttribute('data-speed') ? list.dataset.speed : 50;
                let res = parseInt(list.offsetWidth / speed);
                list.style.animationDuration = res + 's';
            })
        }
    }
}

// * DOC
//import  MovingTiters from './classes/MovingTiters.js'
// new MovingTiters({
//     dom: document.querySelectorAll('.titers')
// })
;// CONCATENATED MODULE: ./src/js/core/classes/ScrollObserver.js
class ScrollObserver {
    constructor (element = null, animationIn = null, animationOut = null, options = {}) {
        if(typeof element === 'string') {
            this.element = document.querySelectorAll(element)
        } else {
            this.element = element
        }
        this.animationIn = animationIn
        this.animationOut = animationOut
        this.options = options // 1.0 - (100% element scroll) 0.9 - 90%(100% element scroll)

        this.createObserver()
        this.$subscribe()
    }

    createObserver () {

        this.observer = new window.IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if(this.animationIn !== null) {
                        this.animationIn(entry.target)
                        this.observer.unobserve(entry.target)
                    }
                } else {
                    if(this.animationOut !== null) {
                        this.animationOut(entry.target)
                    }
                }
            })
        }, this.options)
        
    }

    $subscribe () {
        if(this.element instanceof NodeList) {
            this.element.forEach(el => {
                this.observer.observe(el)
            })
        } else if(this.element instanceof Array) {
            Array.from(this.element).forEach(el => {
                this.observer.observe(el)
            })
        }
        else {
            this.observer.observe(this.element)
        }
    }

    $unsubscribe () {}
    
}

// * DOC 
// import ScrollObserver from './classes/ScrollObserver.js'
// new ScrollObserver(this.scrollIsViewElements, this.isView, null, options)
;// CONCATENATED MODULE: ./src/js/components/app/App.js






class App {
    constructor () {
        this.scrollElements = document.querySelectorAll('[data-scroll]') ?? null
        
        this.init()
    }
    
    init () {
        this.onResize()
        this.domCalculate()
        this.addEventListeners()
        this.scrollAnimation()

        new MovingTiters({
            dom: '.titers'
        })
    }



    /*
        * Prepare
    */
    domCalculate () {
    }
    splitTextContent () {
    }



    /*
        * Animation
    */
    scrollAnimation () {
        if(this.scrollElements.length > 0) {
            const options = {
                threshold: 0
            }

            this.scrollElements.forEach(item =>  item.getAttribute('data-scroll') ? options.threshold = item.getAttribute('data-scroll') : null)
            
            new ScrollObserver(this.scrollElements, isView, null, options)
        }
    }



    /*
        * Handlers
    */
    onResize () {
        this.domCalculate()
    }
    onClick (e) {
        const targetElement = e.target

        /*
            * Anchor
        */
        const $anchorLink = isTarget(targetElement, '[data-anchor]')
        if ($anchorLink) {
            gotoblock_gotoBlock($anchorLink.getAttribute("href"))
			e.preventDefault();
		}

        /*  
            * Header Spollers
        */
        const $targetHeaderSpoller = isTarget(targetElement, '.header [data-spoller]')
        if (!$targetHeaderSpoller) {
            removeClasses('.header [data-spoller]', '_spoller-active')
            _slideUp('.header [data-spoller] + *', 500);
        }

        /*  
            * Menu Spollers
        */
        const $targetMenuSpoller = isTarget(targetElement, '.page-menu [data-spoller]')
        if (!$targetMenuSpoller) {
            removeClasses('.page-menu [data-spoller]', '_spoller-active')
            _slideUp('.page-menu [data-spoller] + *', 500);
        }

        /*  
            * Intro Animation
        */
        const $introItem = isTarget(targetElement, '[data-intro-item]')
        if ($introItem) {
            const introTransition = 1400
            const $introComponent = $introItem.closest('[data-intro]')
            const $introItems = $introComponent.querySelectorAll('[data-intro-item]')

            if(!$introComponent.classList.contains('_hold')) {

                // * TOGGLE ACTIVE STATE
                // if($introItem.classList.contains('_active')) {
                //     $introItem.classList.remove('_active')
                //     $introItems.forEach(item => {
                //         if(!item.classList.contains('_active')) {
                //             item.classList.remove('_reduced')
                //         }
                //     })
                // } else {
                //     $introItems.forEach(item => item.classList.remove('_active', '_reduced'))
                //     $introItem.classList.add('_active')
                //     $introItems.forEach(item => {
                //         if(!item.classList.contains('_active')) {
                //             item.classList.add('_reduced')
                //         }
                //     })
                // }

                $introItems.forEach(item => item.classList.remove('_active', '_reduced'))
                $introItem.classList.add('_active')
                $introItems.forEach(item => {
                    if(!item.classList.contains('_active')) {
                        item.classList.add('_reduced')
                    }
                })
                
                $introComponent.classList.add('_hold')
            }

            setTimeout(() => $introComponent.classList.remove('_hold'), introTransition)
        }

        /*  
            * Favorite toggle
        */
        const $favoriteIcon = isTarget(targetElement, '[data-favorite]')
        if ($favoriteIcon) {
            $favoriteIcon.classList.toggle('_active')
        }

        /*  
            * Video play
        */
        const $videoComponent = isTarget(targetElement, '[data-video]')
        if ($videoComponent) {
            const $videoElement = $videoComponent.querySelector('[data-src]')
            const $videoCover = $videoComponent.querySelector('[data-video-cover]')

            if ($videoElement.paused && !$videoElement.hasAttribute('src')) {
                $videoCover.hidden = true
                $videoElement.src = $videoElement.dataset.src
                $videoElement.play()
            }
        }

        /*  
            * Gift item
        */
        const $giftCheckbox = isTarget(targetElement, '[data-gift-checkbox]')
        if ($giftCheckbox) {
            const $giftItem = $giftCheckbox.closest('[data-gift]')
            const $giftIcon = $giftItem.querySelector('[data-gift-icon]')
            const $giftInput = $giftCheckbox.querySelector('input[type="checkbox"]')

            if ($giftInput.checked) {
                $giftIcon.style.display = 'flex'
            } else {
                $giftIcon.style.display = 'none'
            }
        }
    }
   


    /*
        * Events
    */
    addEventListeners () {
        document.addEventListener('click', this.onClick.bind(this))
        window.addEventListener('resize', this.onResize.bind(this))
    }
    removeEventListeners () {
    }
}


;// CONCATENATED MODULE: ./src/js/components/filter/Filter.js


class Filter {
    constructor(options) {
        this.filterRoot = options.root

        /*
            * Static fields
        */
        this.activeSpollerClass = '_spoller-active'
        this.activeFilterClass = '_open'
        this.checketClass = '_checket'
        
        this.init()
    }
    
    /*
        * Init
    */
    init () {
        this.desktopFilter = this.filterRoot.querySelector('[data-desktop-filter]')
        this.desktopFilterOutput = this.desktopFilter.querySelector('[data-filter-output]')
        this.desktopFilterOutputContainer = this.desktopFilterOutput.querySelector('[data-filter-output-container]')
        this.mobileFilter = this.filterRoot.querySelector('[data-mobile-filter]')
        this.mobileSort = this.filterRoot.querySelector('[data-mobile-sort]')

        this.addEventListeners()
        this.onResize()
        this.domCalculate()
    }


    /*
        * Functions
    */
    setOffset (element) {
        this.desktopFilterOutput.style.marginTop = `${element.offsetHeight}px`
    }
    removeOffset () {
        this.desktopFilterOutput.style.marginTop = ''
    }
    domCalculate () {
        if(this.$filterSpoller) {
            this.setOffset(this.$filterSpoller.nextElementSibling)
        }
    }

    /*
        * Handlers
    */
    onClick (e) {
        const targetElement = e.target

        // * set offset filter output
        this.$filterSpoller = isTarget(targetElement, '[data-spoller]')
        if (this.$filterSpoller && this.$filterSpoller.classList.contains(this.activeSpollerClass)) {
            //this.setOffset(86)
            this.setOffset(this.$filterSpoller.nextElementSibling)
        } else if (!document.querySelector(`.${this.activeSpollerClass}`)) {
            this.removeOffset()
        }



        // * open mobile filter
        this.mobileFilterBtn = isTarget(targetElement, '[data-mobile-filter-btn]')
        this.mobileSortBtn = isTarget(targetElement, '[data-mobile-sort-btn]')
        if(this.mobileFilterBtn && this.mobileFilter) {
            this.mobileFilter.classList.add(`${this.activeFilterClass}`)
            if(bodyLockStatus) {
                bodyLockToggle(0)
            }
        }
        if(this.mobileSortBtn && this.mobileSort) {
            this.mobileSort.classList.add(`${this.activeFilterClass}`)
            if(bodyLockStatus) {
                bodyLockToggle(0)
            }
        }
        // * close mobile filter
        this.mobileFilterClose = isTarget(targetElement, '[data-filter-close]')
        if(this.mobileFilterClose) {
            this.mobileFilter.classList.remove(`${this.activeFilterClass}`)
            this.mobileSort.classList.remove(`${this.activeFilterClass}`)
            if(bodyLockStatus) {
                bodyLockToggle(0)
            }
        }



        // * filter checkbox
        this.filterCheckbox = isTarget(targetElement, '[data-filter-checkbox]')
        if(this.filterCheckbox) {
            this.activeCheckbox = this.filterCheckbox.querySelector('input[type="checkbox"]:checked')
            this.activeCheckboxGroup = this.filterCheckbox.closest('[data-filter-inputs]')
            this.ckeckboxesInGroup = this.activeCheckboxGroup.querySelectorAll('input[type="checkbox"]')

            if( this.activeCheckbox && !this.filterCheckbox.classList.contains(`${this.checketClass}`) ) {
                
                // * remove
                this.ckeckboxesInGroup.forEach(ckeckbox => {
                    ckeckbox.closest('[data-filter-checkbox]').classList.remove(`${this.checketClass}`)
                    ckeckbox.checked = false
                })

                // * add
                this.filterCheckbox.classList.add(`${this.checketClass}`)
                this.activeCheckbox.checked = true

            } else {
                this.filterCheckbox.classList.remove(`${this.checketClass}`)
            }
        }



        // * close filter body
        this.spollerClose = isTarget(targetElement, '[data-spoller-close]')
        if(this.spollerClose) {
            this.activeSpollerBody = this.spollerClose.closest('[data-spoller-body]')
            this.activeSpoller = this.activeSpollerBody.previousElementSibling

            if(this.activeSpoller) {
                this.activeSpoller.classList.remove(this.activeSpollerClass)
                this.removeOffset()
                _slideToggle(this.activeSpollerBody, 0)
            }
        }


        // * filter remove
        const filterRemoveBtn = isTarget(targetElement, '[data-filter-remove]')
        if(filterRemoveBtn) {
            const filterItem = filterRemoveBtn.closest('[data-filter-item]')
            this.removeState(filterItem.dataset.id)
        }
    }

    onResize () {
        this.domCalculate()
    }

    /*
        * Events
    */
    addEventListeners () {
        this.filterRoot.addEventListener('click', this.onClick.bind(this))
        window.addEventListener('resize', this.onResize.bind(this))
    }
    removeEventListeners () {
    }
}
;// CONCATENATED MODULE: ./src/js/index.js



//import './core/scroll/lazyload.js'







//import "./core/utils/tippy.js"
//import "./core/forms/nouislider.js"







/* 
    * GLOBAL VARIABLES
*/
const $html = document.documentElement

/*
    * INIT CORE ELEMENTS
*/
spollers()
menuOpen()
menuClose('[data-menu-close]')
tabs()
//functions.tabsAdaptive()
formFieldsInit()
formSubmit(true)
formPricerange()
formQuantity()
//scroll.windowScroll() // => pin header
//functions.isWebp()
//functions.addTouchClass()
//functions.addLoadedClass()
//functions.fullVHfix()
formViewpass()
//forms.formRating()
// scroll.scrollWatcher(false)
// scroll.pageNavigation()

/*
    * INIT COMPONENTS
*/
window.addEventListener('load', event => {
    setTimeout(function () {
        const pageFilter = document.querySelector('[data-filter]')

        $html.classList.add('loaded')
        new App()

        if(pageFilter) {
            new Filter({
                root: pageFilter
            })
        }
    }, 0)
})


/******/ })()
;
//# sourceMappingURL=main.js.map
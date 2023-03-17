
// accordion 
document.querySelectorAll('.work__link').forEach(function (tabsLink) {
    tabsLink.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;
        document.querySelectorAll('.work__link').forEach(function (link) {
            link.classList.remove('work__link--active')
        });
        e.currentTarget.classList.add('work__link--active');

        document.querySelectorAll('.tabs-item').forEach( function(tabsLink) {
            tabsLink.classList.remove('tabs-item--active')
        });
        document.querySelector(`[data-target=${path}]`).classList.add('tabs-item--active');
    });
});


//enjoyhint
var enjoyhint = new EnjoyHint({});

var array_enjoy = [
	{
		'next .new_btn': 'Шаг 1. Выберите уровень',
        margin: 20,
        scrollAnimationSpeed: 3000
	},
	{
		'next .new_btn2': 'Шаг 2. Выберите модуль',
        margin: 20,
        scrollAnimationSpeed: 3000
	},
    {
		'click .new_btn3': 'Шаг 3. Начните тестирование',
        margin: 20,
        scrollAnimationSpeed: 3000
	},
];

enjoyhint.set(array_enjoy);

enjoyhint.run();

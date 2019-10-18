class Dropdown {
    constructor(selector, option) {
        document.querySelector('.dropdown__label').insertAdjacentHTML('afterEnd', `<ul class="dropdown__menu"></ul>`);
        this.$el = document.querySelector(selector);
        this.items = option.items;
        this.cities = option.cities;
        this.$el.querySelector('.dropdown__label').textContent = 'Выберите город';

        this.$el.addEventListener('click', event => {
            if (event.target.classList.contains('dropdown__label')) {
                if (this.$el.classList.contains('open')) {
                    this.close();
                } else {
                    this.open();
                }
            } else if (event.target.tagName.toLowerCase() === 'li' || event.target.tagName.toLowerCase() === 'a') {
                this.select(event.target.dataset.id);
            }
        });

        document.body.addEventListener('click', event => {
            if (!event.target.classList.contains('dropdown__label')) {
                if (this.$el.classList.contains('open')) {
                    this.close();
                }
            }
        });

        document.body.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                if (this.$el.classList.contains('open')) {
                    this.close();
                }
            }
        });

        const itemsHTML = this.items.map(i => {
            return `<li data-id="${i.id}">${i.label}</li>`;
        }).join('');
        this.$el.querySelector('.dropdown__menu').insertAdjacentHTML('afterbegin', itemsHTML);
    }

    open() {
        this.$el.querySelector('.dropdown__info').innerHTML = ``;
        this.$el.classList.add('open');
    }

    close() {
        this.$el.classList.remove('open');
    }

    select(id) {
        const item = this.items.find(i => i.id === id);
        this.$el.querySelector('.dropdown__label').textContent = item.label;

        const cities = this.cities.find(i => i.id === id);
        this.$el.querySelector('.dropdown__info').innerHTML = `<div class="information">Узнать более подробно о городе: 
        <a href="${cities.link}" target="_blank" rel="nofollow noopener" data-id="${cities.id}">${cities.label}</a></div>`;
        this.close();
    }
}

const dropdown = new Dropdown('#dropdown', {
    items: [
        {label: 'Москва', id: 'mow'},
        {label: 'Санкт-Петербург', id: 'led'},
        {label: 'Новосибирск', id: 'ovb'},
        {label: 'Екатеринбург', id: 'svx'},
        {label: 'Нижний Новгород', id: 'goj'},
        {label: 'Казань', id: 'kzn'},
        {label: 'Челябинск', id: 'cek'},
        {label: 'Омск', id: 'oms'},
        {label: 'Самара', id: 'kuf'},
        {label: 'Ростов-на-Дону', id: 'rov'},
        {label: 'Уфа', id: 'ufa'},
        {label: 'Красноярск', id: 'kja'},
        {label: 'Пермь', id: 'pee'},
        {label: 'Воронеж', id: 'voz'},
        {label: 'Волгоград', id: 'vog'}
    ],
    cities: [
        {link: 'https://clc.am/moscow', label: 'Москва', id: 'mow'},
        {link: 'https://clc.am/saint-petersburg', label: 'Санкт-Петербург', id: 'led'},
        {link: 'https://clc.am/novosibirsk', label: 'Новосибирск', id: 'ovb'},
        {link: 'https://clc.am/ekaterinburg', label: 'Екатеринбург', id: 'svx'},
        {link: 'https://clc.am/nizhny-novgorod', label: 'Нижний Новгород', id: 'goj'},
        {link: 'https://clc.am/kazan', label: 'Казань', id: 'kzn'},
        {link: 'https://clc.am/chelyabinsk', label: 'Челябинск', id: 'cek'},
        {link: 'https://clc.am/omsk', label: 'Омск', id: 'oms'},
        {link: 'https://clc.am/samara', label: 'Самара', id: 'kuf'},
        {link: 'https://clc.am/rostov-on-don', label: 'Ростов-на-Дону', id: 'rov'},
        {link: 'https://clc.am/ufa', label: 'Уфа', id: 'ufa'},
        {link: 'https://clc.am/krasnoyarsk', label: 'Красноярск', id: 'kja'},
        {link: 'https://clc.am/perm', label: 'Пермь', id: 'pee'},
        {link: 'https://clc.am/voronezh', label: 'Воронеж', id: 'voz'},
        {link: 'https://clc.am/volgograd', label: 'Волгоград', id: 'vog'}
    ]
});
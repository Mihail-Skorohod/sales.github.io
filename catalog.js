const catalog = [
    { name: "Гамлет", description: "Класична трагедія Шекспіра" },
    { name: "Лускунчик", description: "Чарівний балет на музику Чайковського" },
    { name: "Наталка Полтавка", description: "Українська народна опера" }
];

const catalogList = document.getElementById('catalog-list');
catalog.forEach(item => {
    const div = document.createElement('div');
    div.className = 'catalog-item';
    div.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p>`;
    catalogList.appendChild(div);
});
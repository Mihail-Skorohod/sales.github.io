const sales = [
    { name: "Ромео і Джульєтта", price: 200, date: "2023-06-15" },
    { name: "Кайдашева сім'я", price: 180, date: "2023-06-20" },
    { name: "Лісова пісня", price: 220, date: "2023-06-25" }
];

const salesList = document.getElementById('sales-list');
sales.forEach(item => {
    const div = document.createElement('div');
    div.className = 'sale-item';
    div.innerHTML = `
        <h3>${item.name}</h3>
        <p>Ціна: ${item.price} грн</p>
        <p>Дата: ${item.date}</p>
        <button onclick="buyTicket('${item.name}')">Купити квиток</button>
    `;
    salesList.appendChild(div);
});

function buyTicket(name) {
    alert(`Ви купили квиток на виставу "${name}"`);
}
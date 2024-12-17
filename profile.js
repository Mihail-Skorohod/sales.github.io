document.getElementById('edit-profile').addEventListener('click', function() {
    const name = prompt("Введіть нове ім'я:", document.getElementById('user-name').textContent);
    const city = prompt("Введіть нове місто:", document.getElementById('user-city').textContent);
    
    if (name) document.getElementById('user-name').textContent = name;
    if (city) document.getElementById('user-city').textContent = city;
});
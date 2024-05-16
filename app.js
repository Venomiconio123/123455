var score = 0;
var maxClicks = 100; // Максимальное количество нажатий

document.getElementById("btn").addEventListener("click", function() {
    if (score < maxClicks) {
        score++;
        document.getElementById("score").innerText = score; // Обновляем только значение числа
    } else {
        window.location.href = "limit.html";
    }
});

// Обработчик события для центральной кнопки
document.getElementById("btn").addEventListener("click", function() {
    if (energyLevel > 0) {
        energyLevel -= 1; // Уменьшаем уровень энергии на 1
        document.getElementById("energy-level").style.width = energyLevel + "%"; // Обновляем отображение уровня энергии
    }
});

// Переносим этот блок кода изнутри обработчика события клика на кнопке
document.querySelectorAll(".tab").forEach(function(tab) {
    tab.addEventListener("click", function() {
        var target = this.getAttribute("data-target");
        window.location.href = target + ".html"; // Перенаправление на страницу с соответствующим именем
    });
});

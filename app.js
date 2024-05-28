var score = 0;
var maxClicks = 100; // Максимальное количество нажатий
var energyLevel = 100; // Уровень энергии пользователя (от 0 до 100)

// Обработчик события для кнопки
document.getElementById("btn").addEventListener("click", function() {
    if (score < maxClicks) {
        score++;
        document.getElementById("score").innerText = score; // Обновляем только значение числа
    } else {
        window.location.href = "limit.html";
    }

    // Уменьшаем уровень энергии
    if (energyLevel > 0) {
        energyLevel--; // Уменьшаем уровень энергии на 1
        document.getElementById("energy-level").style.width = energyLevel + "%"; // Обновляем отображение уровня энергии
    }
});

// Обработчики событий для вкладок
document.querySelectorAll(".tab").forEach(function(tab) {
    tab.addEventListener("click", function() {
        var target = this.getAttribute("data-target");
        window.location.href = target + ".html"; // Перенаправление на страницу с соответствующим именем
    });
});

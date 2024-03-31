document.addEventListener("DOMContentLoaded", function() {
    const carForm = document.getElementById("carForm");
    const brandSelect = document.getElementById("brand");
    const yearSelect = document.getElementById("year");

    if (localStorage.getItem("selectedBrand")) {
        brandSelect.value = localStorage.getItem("selectedBrand");
    }

    if (localStorage.getItem("selectedYear")) {
        yearSelect.value = localStorage.getItem("selectedYear");
    }

    brandSelect.addEventListener("change", function() {
        localStorage.setItem("selectedBrand", brandSelect.value);
    });

    yearSelect.addEventListener("change", function() {
        localStorage.setItem("selectedYear", yearSelect.value);
    });

    carForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        localStorage.setItem("selectedBrand", brandSelect.value);
        localStorage.setItem("selectedYear", yearSelect.value);

        alert("Выбор сохранен!");
        location.href="catalog.html"
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const selectedBrand = localStorage.getItem("selectedBrand");
    const selectedYear = localStorage.getItem("selectedYear");

    document.getElementById("selectedBrand").textContent = selectedBrand || 'Не выбрано';
    document.getElementById("selectedYear").textContent = selectedYear || 'Не выбрано';
});
document.querySelectorAll(".formulario").forEach(form => {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const targetId = form.getAttribute("data-target");
        const tabla = document.getElementById(targetId).querySelector("tbody");

        const row = document.createElement("tr");

        form.querySelectorAll("input").forEach(input => {
            const td = document.createElement("td");
            td.textContent = input.value;
            row.appendChild(td);
            input.value = ""; // Limpia el input una vez enviado el forms
        });

        tabla.appendChild(row);
    });
});



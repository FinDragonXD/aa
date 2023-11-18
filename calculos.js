function calcular() {
    const inputFuncion = document.getElementById("funcion").value;
    // Obtén la referencia a la tabla
    const tablaResultados = document.getElementById("tablaResultados");
    const tbody = tablaResultados.querySelector("tbody");

    // Reinicia tbody en cada llamada para evitar duplicados
    tbody.innerHTML = "";

    if (inputFuncion == "") {
        alert("Ingrese una función");
        return;
    }

    function f(x) {
        const temp = inputFuncion.replace(/x/g, x);
        const resultado = eval(temp);
        console.log("x:", x, "resultado:", resultado);
        return eval(temp);
    }

    var x0 = parseFloat(document.getElementById("x0").value);
    var x1 = parseFloat(document.getElementById("x1").value);
    const error = parseFloat(document.getElementById("error").value);

    var xi;
    var ea = 100;
    var iteracion = 1; // Inicia la variable de iteración

    while (ea > error) {
        xi = x1 - (f(x1) * (x1 - x0)) / (f(x1) - f(x0));
        console.log("xi", xi);
        ea = Math.abs((xi - x1) / xi) * 100;
        console.log("ea", ea);
                // Crea una nueva fila
        const fila = document.createElement("tr");

        // Agrega celdas con los valores calculados
        const celdaIteracion = document.createElement("td");
        celdaIteracion.textContent = iteracion;
        fila.appendChild(celdaIteracion);

        const celdaX0 = document.createElement("td");
        celdaX0.textContent = x0;
        fila.appendChild(celdaX0);
        x0 = x1;
        console.log("x0", x0);
        const celdaX1 = document.createElement("td");
        celdaX1.textContent = x1;
        fila.appendChild(celdaX1);
        x1 = xi;
        console.log("x1", x1);

        const celdaXi = document.createElement("td");
        celdaXi.textContent = xi;
        fila.appendChild(celdaXi);

        const celdaError = document.createElement("td");
        celdaError.textContent = ea;
        fila.appendChild(celdaError);

        // Agrega la fila al tbody
        tbody.appendChild(fila);

        iteracion++; // Incrementa la variable de iteración
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "La raíz es: " + xi;
}
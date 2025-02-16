function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: División por cero no permitida";
    }
    return a / b;
}

function mostrarMenu() {
    let opcion;
    do {
        opcion = prompt("Calculadora\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir\nIngrese una opción:");
        
        if (opcion >= 1 && opcion <= 4) {
            let num1 = parseFloat(prompt("Ingrese el primer número:"));
            let num2 = parseFloat(prompt("Ingrese el segundo número:"));
            let resultado;
            
            switch (opcion) {
                case "1":
                    resultado = sumar(num1, num2);
                    break;
                case "2":
                    resultado = restar(num1, num2);
                    break;
                case "3":
                    resultado = multiplicar(num1, num2);
                    break;
                case "4":
                    resultado = dividir(num1, num2);
                    break;
            }
            alert("Resultado: " + resultado);
        }
    } while (opcion !== "5");
}

mostrarMenu();
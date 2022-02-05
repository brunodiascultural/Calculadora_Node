const interface = require('readline-sync');

// Calculadora: Soma, Subtração, Divisão, Multiplicação, Sair.

let response = "";

do {
    console.log('\033[2J');
    console.log("1.- Soma");
    console.log("2.- Subtração");
    console.log("3.- Divisão");
    console.log("4.- Multiplicação");
    console.log("5.- Sair");
    response = interface.question("Qual operação deseja realizar? Escolha um número: ");

    if (response != "5") {
        const primeiroNumero = interface.question("Digite o primeiro número: ");
        const segundoNumero = interface.question("Digite o segundo número: ");

        switch (response) {
            case "1":
                var resultado = parseInt(primeiroNumero) + parseInt(segundoNumero);
                console.log("O resultado é: " + resultado);
                break;

            case "2":
                var resultado = parseInt(primeiroNumero) - parseInt(segundoNumero);
                console.log("O resultado é: " + resultado);
                break;

            case "3":
                var resultado = parseInt(primeiroNumero) / parseInt(segundoNumero);
                console.log("O resultado é: " + resultado);
                break;

            case "4":
                var resultado = parseInt(primeiroNumero) * parseInt(segundoNumero);
                console.log("O resultado é: " + resultado);
                break;

            case "5":
                var resultado = parseInt(primeiroNumero) * parseInt(segundoNumero);
                console.log("O resultado é: " + resultado);
                break;
            default:
                break;
        }

        interface.question("Pressione Enter para continuar: ");
    }
} while (response != "5");
function calcular() {
    //Entradas
    var numero1 = document.getElementById("txtNumero1");
    var numero2 = document.getElementById("txtNumero2");
    var numero3 = document.getElementById("txtNumero3");

    // Proceso
    var promedio = parseFloat(numero1.value) + parseFloat(numero2.value) + parseFloat(numero3.value);

    //Salida
    document.getElementById("txtPromedio").value = promedio;
}
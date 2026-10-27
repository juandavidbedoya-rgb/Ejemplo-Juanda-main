
mostrarResumenes();

function calcularTotalCompra(precioUnitario, cantidad) {
    const IVA = 0.19;
    let subtotal = precioUnitario * cantidad; 
    let descuento = 0;

    if (cantidad >= 3) { 
        descuento = subtotal * 0.10; 
    }

    let subtotalConDescuento = subtotal - descuento;
    let montoIVA = subtotalConDescuento * IVA;
    let totalFinal = subtotalConDescuento + montoIVA;

    return {
        subtotal: subtotal,
        descuento: descuento,
        iva: montoIVA,
        total: Math.round(totalFinal)
    };
}

function mostrarResumenes() {
    console.log("=== PRUEBAS AUTOMÁTICAS EN CONSOLA ===");

    const precio1 = 149900;
    let cantidad1 = 3;
    let res1 = calcularTotalCompra(precio1, cantidad1);
    console.log("Caso 1 - Hoodie Oversize Neon (x3): $" + res1.total + " COP");

    const precio2 = 210000;
    let cantidad2 = 1;
    let res2 = calcularTotalCompra(precio2, cantidad2);
    console.log("Caso 2 - Chaqueta Street Biker (x1): $" + res2.total + " COP");
}

function calcularInteractiva() {

    const select = document.getElementById("selectProducto");
    const inputCant = document.getElementById("inputCantidad");

    const precioUnitario = Number(select.value);
    const cantidad = Number(inputCant.value);

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor ingresa una cantidad válida mayor a 0.");
        return;
    }

    const calculo = calcularTotalCompra(precioUnitario, cantidad);

    document.getElementById("resSubtotal").textContent = "$" + calculo.subtotal.toLocaleString("es-CO") + " COP";
    document.getElementById("resDescuento").textContent = "- $" + calculo.descuento.toLocaleString("es-CO") + " COP";
    document.getElementById("resIVA").textContent = "$" + Math.round(calculo.iva).toLocaleString("es-CO") + " COP";
    document.getElementById("resTotal").textContent = "$" + calculo.total.toLocaleString("es-CO") + " COP";
}
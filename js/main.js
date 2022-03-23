
const $btn_comprar = document.getElementById("btn-comprar");
const $cantidadProducto = document.getElementById("cantidad");
const $btn_calcular = document.getElementById("btn-calcular");
const $compra = document.getElementById("compra");
const $descuento = document.getElementById("descuento");
const $total = document.getElementById("total");
const $notificacion = document.getElementById("notificacion");

function calcularVenta(cantidad) {
    let valor_producto = 3000000;
    let valor_compra;
    let valor_descuento;
    let total_pagar;
    let tipo_descuento;
    valor_compra = valor_producto * cantidad.value;

    if (cantidad.value >= 5 && cantidad.value <= 9) {
        valor_descuento = valor_compra * 0.15;
        $notificacion.innerHTML = "15%";
    } else if (cantidad.value >= 10 && cantidad.value <= 14) {
        valor_descuento = valor_compra * 0.30;
        $notificacion.innerHTML = "30%";
    } else if (cantidad.value >= 15) {
        valor_descuento = valor_compra * 0.50;
        $notificacion.innerHTML = "50%";
    } else {
        valor_descuento = valor_compra * 0.0;
        $notificacion.innerHTML = "No tiene descuento";
    }

    total_pagar = valor_compra - valor_descuento;
    
    $compra.value = valor_compra;
    $descuento.value = valor_descuento;
    $total.value = total_pagar;
}

document.addEventListener("click", e => {
    e.preventDefault()
    if (e.target === $btn_calcular) {
        calcularVenta($cantidadProducto)
    }
})

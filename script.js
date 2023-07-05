
let carrit = new Array()
function centrarse(elemento) {
	elemento.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

let bandera = false

function operar(btn) {   // Se activara siempre y cuando presionemos el boton para agregar un elemento al carrito
	// let nombre=  contenedor.querySelector('h2').innerHTML
	let contenedor = btn.parentNode
	let etiqueta = contenedor.querySelector('#producto').innerHTML
	let tallas = contenedor.querySelector('#tallas')
	let talla = tallas.options
	let cantidad = contenedor.querySelector('input[type="number"]').value
	comprar()

	carrit.push({
		'producto': etiqueta,
		'cantidad': cantidad,
		'talla': 3
	})
	carrit.forEach((a) => {
		let t_tarjeta = a.producto;
		let cant_tarjeta = a.cantidad;
		let talla_tarjeta = a.talla;
	})
	document.getElementById('titulo-carrito').innerHTML = `Se agrego <br>${etiqueta}<br>Talla: ${talla[tallas.selectedIndex].innerHTML}
	<br> cantidad: ${cantidad}`
}

let comprar = function () {
	let modal = document.getElementById('modal')
	modal.classList.remove('modal-hidden')
	bandera = true
}

let cerrar = function () {
	let modal = document.getElementById('modal')
	modal.classList.add('modal-hidden')
	document.getElementById('titulo-carrito').innerHTML = ''
}

function mostrarCarrito() {
	let carrito = document.getElementById('panel-carrito');
	let aux = 0;
	carrito.classList.remove('modal-hidden')
	if (carrit.length > 0) {
		while (aux < carrit.length) {
			let div_tarjeta = document.createElement('div');
			div_tarjeta.classList.add('tarjeta')
			let contenedor = document.getElementById('contenido-carrito')
			contenedor.append(div_tarjeta)
			aux++;
		}
	}
}

ocultarCarrito = function () {
	let carrito = document.getElementById('panel-carrito');
	carrito.classList.add('modal-hidden')
	eliminarElementos()
}

function eliminarElementos() {  // Permite eliminar elemetnod de un contenedor
	var div = document.getElementById("contenido-carrito");

	while (div.firstChild) {
		div.removeChild(div.firstChild);
	}
}

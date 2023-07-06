
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
	let referencia = contenedor.get

	carrit.push({
		'producto': etiqueta,
		'cantidad': cantidad,
		'talla': 3,
		'referencia': referencia // guardo la referencia de la imagen que corresponde al producto.
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

function mostrarCarrito() { // Esta funcion ayuda a que pueda mostrarse el carrito de compras
	let carrito = document.getElementById('panel-carrito');
	carrito.classList.remove('modal-hidden');
	let aux = 0;
	if (carrit.length > 0) {
		while (aux < carrit.length) {
			// este codigo crea la tarjeta
			let div_tarjeta = document.createElement('div');
			div_tarjeta.classList.add('tarjeta');
			//agrago la imagen correspondiente del producto
			let img_carrito = document.createElement('img')
			img_carrito.classList.add('img')
			img_carrito.src = carrit[aux]['referencia']
			div_tarjeta.append(img_carrito)  // agrego la imagen a el div tarjeta
			// este otro crea la tarjeta para almacenar el contenido.
			let tarjeta_contenedor = document.createElement('div')
			tarjeta_contenedor.classList.add('tarjeta-contenedor')
			let contenedor = document.getElementById('contenido-carrito');
			// Este codigo crea los elementos que contendra la tarjeta
			let cabecera_carrito = document.createElement('h2') // obtengo la info del producto
			cabecera_carrito.innerHTML = carrit[aux]['producto'];
			cabecera_carrito.classList.add('h3-font')
			
			tarjeta_contenedor.appendChild(cabecera_carrito);
			div_tarjeta.append(tarjeta_contenedor)
			// agrego la tarjeta a mi contenedor padre ''contenido''
			contenedor.append(div_tarjeta);
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


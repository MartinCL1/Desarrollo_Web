

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
	document.getElementById('titulo-carrito').innerHTML = `Se agrego <br>${etiqueta}<br>Talla: ${talla[tallas.selectedIndex].innerHTML}
	<br> cantidad: ${cantidad}`
}

let comprar = function () {
	let modal = document.getElementById('modal')
	modal.classList.add('modal-tienda')
	modal.classList.remove('modal-tienda-hidden')
	bandera = true
}

let cerrar = function () {
		let modal = document.getElementById('modal')
		modal.classList.add('modal-tienda-hidden')
		document.getElementById('titulo-carrito').innerHTML = ''
}

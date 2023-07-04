function centrarse(elemento) {
	elemento.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

let bandera = false

function operar(contenedor) {   // Se activara siempre y cuando presionemos el boton para agregar un elemento al carrito
	// let nombre=  contenedor.querySelector('h2').innerHTML
	comprar()
	let descripcion = contenedor.querySelector('h3').innerHTML;
	let talla = contenedor.querySelector('select');
	let tallas = talla.options

	let titulo = document.getElementById('titulo-carrito')
	titulo.innerHTML = `Se agrego correctamente<br> ${descripcion}`
	let info = document.getElementById('info')
	info.innerHTML = `Talla: ${tallas[talla.selectedIndex].innerHTML}
	precio: 350.20`
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
}

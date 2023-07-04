function centrarse(elemento) {
	elemento.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function operar(contenedor){   // Se activara siempre y cuando presionemos el boton para agregar un elemento al carrito
	// let nombre=  contenedor.querySelector('h2').innerHTML;
	let descripcion = contenedor.querySelector('h3').innerHTML;
	let talla = contenedor.querySelector('select');
	let tallas = talla.options
	console.log(`Datos: \n\n${descripcion}, ${tallas[talla.selectedIndex].innerHTML}`)
}

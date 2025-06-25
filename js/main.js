const fasePrimary = document.getElementById('selection').value.trim();


function send() {
	const name = document.getElementById('name').value.trim();
	const select = document.getElementById('selection').value.trim();
	const msg = document.getElementById('msg').value.trim();
	if (name == "" || msg == "" || select == fasePrimary) {
		alert('Por favor completa correctamente los campos.')
	}
	else {
	window.location.href = `https://wa.me/51987160920?text=Mi nombre es: ${name}. El servicio que escogí es: ${select}. ${msg}.`
	}
}